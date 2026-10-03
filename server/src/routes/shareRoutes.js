import express from 'express';
import crypto from 'crypto';

const router = express.Router();

// In-memory store for shared calculations (with auto cleanup after 30 days)
const shareStore = new Map();

// Helper to generate a 7-character clean alphanumeric ID
function generateShareId() {
  return crypto.randomBytes(4).toString('hex').slice(0, 7);
}

// POST /api/shares - Create a shareable calculation permalink
router.post('/', (req, res) => {
  try {
    const { calculatorType, inputs, result, title } = req.body;

    if (!calculatorType || !inputs) {
      return res.status(400).json({ error: 'calculatorType and inputs are required.' });
    }

    const shareId = generateShareId();
    const shareData = {
      id: shareId,
      calculatorType,
      inputs,
      result: result || null,
      title: title || 'Calculation',
      createdAt: new Date().toISOString()
    };

    shareStore.set(shareId, shareData);

    // Limit memory store to 10,000 entries max to prevent memory leakage
    if (shareStore.size > 10000) {
      const firstKey = shareStore.keys().next().value;
      shareStore.delete(firstKey);
    }

    return res.status(201).json({
      success: true,
      shareId,
      shareUrl: `/share/${shareId}`
    });
  } catch (error) {
    console.error('Error creating share:', error);
    return res.status(500).json({ error: 'Failed to create shareable link.' });
  }
});

// GET /api/shares/:id - Retrieve shared calculation
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const shareData = shareStore.get(id);

  if (!shareData) {
    return res.status(404).json({ error: 'Shared calculation not found or expired.' });
  }

  return res.json({
    success: true,
    data: shareData
  });
});

export default router;

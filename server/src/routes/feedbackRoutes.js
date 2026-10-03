import express from 'express';

const router = express.Router();

// In-memory feedback store (in production could be hooked to database or email webhook)
const feedbackStore = [];

router.post('/', (req, res) => {
  try {
    const { name, email, type, message } = req.body;

    if (!message || message.trim().length === 0) {
      return res.status(400).json({ error: 'Message is required.' });
    }

    const feedbackEntry = {
      id: Date.now().toString(),
      name: (name || 'Anonymous').trim(),
      email: (email || '').trim(),
      type: type || 'general',
      message: message.trim(),
      createdAt: new Date().toISOString()
    };

    feedbackStore.push(feedbackEntry);
    console.log('[Feedback Received]:', feedbackEntry);

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your feedback has been received.'
    });
  } catch (error) {
    console.error('Error recording feedback:', error);
    return res.status(500).json({ error: 'Failed to record feedback.' });
  }
});

export default router;

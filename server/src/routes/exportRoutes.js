import express from 'express';

const router = express.Router();

// POST /api/export/csv - Generate and download calculation history as CSV
router.post('/csv', (req, res) => {
  try {
    const { items, title } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'No items provided for export.' });
    }

    // Prepare CSV header and lines
    const headers = ['Date', 'Calculator', 'Expression / Description', 'Result'];
    const rows = items.map(item => {
      const date = item.timestamp ? new Date(item.timestamp).toLocaleString() : new Date().toLocaleString();
      const calc = `"${(item.calculatorName || 'Percentage Calculator').replace(/"/g, '""')}"`;
      const expr = `"${(item.expression || item.description || '').replace(/"/g, '""')}"`;
      const resVal = `"${(item.result || '').replace(/"/g, '""')}"`;
      return [date, calc, expr, resVal].join(',');
    });

    const csvContent = [headers.join(','), ...rows].join('\r\n');

    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename="${(title || 'calculation-history').toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.csv"`);
    return res.status(200).send(csvContent);
  } catch (error) {
    console.error('Error generating CSV:', error);
    return res.status(500).json({ error: 'Failed to generate CSV export.' });
  }
});

export default router;

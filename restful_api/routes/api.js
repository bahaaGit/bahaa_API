const express = require('express');
const router = express.Router();

router.get('/drivers', (req, res) => {
    res.send({ type: 'Get Request' });
});

router.post('/drivers', (req, res) => {
    res.send({ type: 'Post Request' });
});
router.put('/drivers/:id', (req, res) => {
    res.send({ type: 'Put Request' });
});

router.delete('/drivers/:id', (req, res) => {
    res.send({ type: 'Delete Request' });
});

module.exports = router;
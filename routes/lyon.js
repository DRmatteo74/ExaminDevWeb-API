const express = require('express');

const router = express.Router();

router.get('/paris', (req, res, next) => {
  res.send(
    '<h2>Météo Lyon : Soleil</h2>'
  );
});

module.exports = router;

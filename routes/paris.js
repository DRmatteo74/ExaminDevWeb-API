const express = require('express');

const router = express.Router();

router.get('/paris', (req, res, next) => {
  res.send(
    '<h2>Météo Paris : Pluie</h2>'
  );
});

module.exports = router;

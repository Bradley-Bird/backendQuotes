const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router().get('/', async (req, res) => {
  const CharacterData = await Character.getAll();
  const finalData = CharacterData.map((character) => character);
  res.json(finalData);
});

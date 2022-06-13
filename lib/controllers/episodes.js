const { Router } = require('express');
const { Episode } = require('../models/Episode');

module.exports = Router().get('/', async (req, res) => {
  const EpisodeData = await Episode.getAll();
  const finalData = EpisodeData.map((episode) => episode);
  res.json(finalData);
});

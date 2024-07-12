const realTimeRouter = require("express").Router();
const path = require('path');

realTimeRouter.get('/:camNo/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/real_time', 'real_time.html'));
  //query
  //console.log('===>req.query.camNo',req.query.camNo)
  //params
  console.log('===>',req.params)
});

module.exports = realTimeRouter;
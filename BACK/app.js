
const express = require("express");
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');

const constant = require('./constant');
const POINTS = constant.points;

/* MIDDLEWARES */
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* GET la liste des points */
app.get('/api/points', (req, res) => {
  res.json(POINTS)
})

/* GET un point selon son id */
app.get('/api/points/:id', (req, res) => {
  const pointId = req.params.id;
  const point = POINTS.filter(point => point.id == pointId);
  res.json(point);
})

/* POST un point */
app.post('/api/points', (req, res) => {

  const newId = POINTS[POINTS.length -1].id + 1;

  if (req.body) {
    const newPoint = {...req.body, id : newId}
    console.log('newPoint :>> ', newPoint);
    POINTS.push(newPoint);
    res.json(POINTS)
  }
  else {
    res.json("Wrong body parameters");
  }
})

/* LANCEMENT DU SERVEUR */
app.listen(8080, (error) => {
  if (error) { console.log('error :>> ', error); }
  else {
    console.log('Started on port 8080');
  }
})
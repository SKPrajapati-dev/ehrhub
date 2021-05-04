const { medication_pdf } = require('../models');

const getByVisitId = (req, res) => {
  medication_pdf
    .findAll({
      where: {
        visit_id: req.query.visitId,
      },
    })
    .then((pdf) => {
      res.send(pdf);
    }).catch = (e) => {
    console.log(e);
    res.status(400).send("Some error occured");
  };
};

module.exports = {
  getByVisitId,
};

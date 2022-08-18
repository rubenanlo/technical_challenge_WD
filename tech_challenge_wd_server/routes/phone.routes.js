const router = require("express").Router();
const phoneArr = require("../data/phones.json");

router.get("/phones", (req, res, next) => {
  res.json(phoneArr);
});

router.get("/phones/:phoneId", (req, res, next) => {
  const phoneId = req.params.phoneId;
  const phoneDetails = phoneArr.find((phoneObj) => phoneId == phoneObj.id);
  if (phoneDetails) {
    res.json(phoneDetails);
  } else {
    res.status(404).send("product doesn't exist");
  }
});

module.exports = router;

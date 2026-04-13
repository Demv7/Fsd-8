const router = require("express").Router();
const upload = require("../middleware/upload");

router.post("/", upload.single("image"), (req, res) => {
  res.json({ file: req.file });
});

module.exports = router;

const User = require("../models/User");
const { verifyTokenAuthorization, verifyTokenAdmin } = require("./verifyToken");

const router = require("express").Router();

router.put("/:id", verifyTokenAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndDelete(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", verifyTokenAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", verifyTokenAdmin, async (req, res) => {
  const query = req.query.new
  try {
    const users = query ? await User.find().sort({_id:-1}).limit(5) : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/stats", verifyTokenAndAdmin, async(req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try{
const data = await User.aggregate([
  {$match: {createAt:}}
])
  } catch(Err) {
    res.status(500).json(err);
  }
})

module.exports = router;

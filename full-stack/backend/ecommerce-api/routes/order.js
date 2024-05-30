const Order = require("../models/Product");
const {
  verifyTokenAuthorization,
  verifyTokenAdmin,
  verifyToken,
} = require("./verifyToken");

const router = require("express").Router();

// CREATE

router.post("/", verifyToken, async (req, res) => {
  const newOrder = new Car(req.body);

  try {
    const savedCar = await newCar;
    res.status(200).json(savedCar);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", verifyTokenAdmin, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndDelete(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", verifyTokenAuthorization, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/find/:id", verifyTokenAuthorization, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", verifyTokenAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/income", verifyTokenAdmin, async (req, res) => {
  const today = new Date();
  const previousMonth = new Date(today.setMonth(today.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth }, // Filter orders from previous month onwards
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" }, // Extract month from createdAt
          sales: "$amount", // Include sales amount
        },
      },
      {
        $group: {
          _id: "$month", // Group by month
          total: { $sum: "$sales" }, // Calculate total sales for each month
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json({ message: "Error fetching income data", error: err });
  }
});

module.exports = router;

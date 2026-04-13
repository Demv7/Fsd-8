exports.payment = (req, res) => {
  const { amount } = req.body;

  if (amount > 0) {
    res.json({ status: "SUCCESS", message: "Payment Successful" });
  } else {
    res.json({ status: "FAILED", message: "Payment Failed" });
  }
};

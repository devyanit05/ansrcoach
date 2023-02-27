// upto 7 days choose a pack - charges will be 28 rs(razorpay)
// from date of payment to 7 days
// starting date and end date
// timer(days: hrs: mins)

const { instance } = require("../index");
var crypto = require("crypto");

// payment controller
// 1. create order
const checkout = async (req, res) => {
  const options = {
    amount: 2800, // amount in the smallest currency unit
    currency: "INR",
  };

  try {
    const order = await instance.orders.create(options);

    return res.json({
      success: true,
      message: "Order created successfully",
      body: order,
    });
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, error, message: "outer error" });
  }
};

// 2.
const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", "process.env.RAZORPAY_API_SECRET")
    .update(body.toString())
    .digest("hex");
  console.log("sig received ", razorpay_signature);
  console.log("sig generated ", expectedSignature);

  var paymentSuccessful = false;
  if (expectedSignature === razorpay_signature) paymentSuccessful = true;

  res.status(200).json({
    success: true,
    message: "paymentSuccessful = " + paymentSuccessful,
    paymentSuccessful: paymentSuccessful,
  });
};

// 3. get key for frontend
const getkey = async (req, res) => {
  req.status(200).json({ key: process.env.RAZORPAY_API_KEY });
};

// 4. & days trial timer
const trialTimer = async (req, res) => {
    const { paymentSuccessful, sClass, razorpay_order_id, razorpay_payment_id } = req.body;

  if (paymentSuccessful) {
    var trialEnded = false;

    let deadline = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    let interval = setInterval(function () {
      let now = new Date();
      let diff = deadline - now;
      let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((diff % (1000 * 60)) / 1000);
      console.log(
        days +
          " days " +
          hours +
          " hours " +
          mins +
          " minutes " +
          secs +
          " seconds remaining"
      );
      if (diff <= 0) {
        clearInterval(interval);
        console.log("Trial Access complete!");
        trialEnded = true;
      }
    }, 1000);

    let timerDetails = {
      days: days,
      hours: hours,
      mins: mins,
      secs: secs,
      trialEnded: trialEnded,
    };

    return res.json({
      body: timerDetails,
    });

    // // this link should be created in frontend and pass here for redirecting to a page.
    // res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`)
  } else {
    res.status(400).json({
      success: false,
      message: "Payment not successful",
    });
  }
};


module.exports = {
  checkout,
  paymentVerification,
  getkey,
  trialTimer,
};

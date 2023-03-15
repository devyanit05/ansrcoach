const express = require("express");
const cors = require("cors");
const mongooseConnect = require("mongoose").connect;
const dotenvConfig = require("dotenv").config;
const cookieParser = require("cookie-parser");
const Razorpay = require("razorpay");
const compression = require("compression");
const helmet = require("helmet");
// const client = require("twilio")(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const app = express();
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser());
dotenvConfig();

// --------------------------------------------------------
const instance = new Razorpay({
  // val to be added
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

module.exports = {
  instance,
};

// -----------------------------------------------------------

const userRoutes = require("./Routes/user");
const adminRoutes = require("./Routes/admin");
const courseRoutes = require("./Routes/course");
const registerRoute = require("./Routes/register");
const demoClassRoute = require("./Routes/demoClass");
const liveClassRoute = require("./Routes/liveClass");
const courseFeatureRoute = require("./Routes/courseFeature");
const courseSyllabusRoute = require("./Routes/courseSyllabus");
const cohortRoutes = require("./Routes/cohort");
const cohortSubjectRoutes = require("./Routes/cohortSubject");
const cohortTopicRoutes = require("./Routes/cohortTopic");
const cohortFAQRoutes = require("./Routes/cohortFAQ");
const videoRoutes = require("./Routes/video");
const lastWatchedRoutes = require("./Routes/lastWatched");
const mobileRoutes = require("./Routes/mobileAuth");
const home = require("./Routes/home");
const purchaseUser = require("./Routes/purchaseUser");
const testimonials = require("./Routes/testimonials");
const blogsRoutes = require("./Routes/blogs");
const blogsFeatureRoutes = require("./Routes/blogsFeature");

app.use("/user", userRoutes);
app.use("/admin", adminRoutes); // /admin/signup/local
app.use("/course", courseRoutes);
app.use("/course/price/demo", demoClassRoute);
app.use("/course/price/live", liveClassRoute);
app.use("/course/feature", courseFeatureRoute);
app.use("/course/syllabus", courseSyllabusRoute);
app.use("/register", registerRoute);
app.use("/cohort", cohortRoutes);
app.use("/cohort/subject", cohortSubjectRoutes);
app.use("/cohort/topic", cohortTopicRoutes);
app.use("/cohort/faq", cohortFAQRoutes);
app.use("/video", videoRoutes);
app.use("/last-watched", lastWatchedRoutes);
app.use("/mobileAuth", mobileRoutes);
app.use("/home", home);
app.use("/purchaseUser", purchaseUser);
app.use("/testimonials", testimonials);
app.use("/blogs", blogsRoutes);
app.use("/blogs/feature", blogsFeatureRoutes);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  mongooseConnect(process.env.MONGODB_URL);
  console.log("Connected to MongoDB on port " + PORT);
});

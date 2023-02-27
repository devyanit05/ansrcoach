import styles from "../styles/Signup.module.css";
import style from "../styles/popups/Popup.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  registerCreate as registerCreateApi,
  registerAddDetailpersonal as personalisedAddDetailApi,
  registerAddDetailcohurt as cohurtregisterAddDetailApi,
  registerResendOtp as registerResendOtpApi,
  signup as signupApi,
  registerAddDetail,
} from "../services/api";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../redux/reducer/auth";

const Signup = () => {
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [registerationID, setRegisterationID] = useState("");

  // Container 1
  const [selectedCourse, setSelectedCourse] = useState(0);
  // Container 2
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sClass, setSClass] = useState("");
  const [sub, setSub] = useState("");
  const [email, setemail] = useState("");

  // Container 5
  const [board, setboard] = useState("");

  // Container 3
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");
  const handleClose = async () => {
    if (step == 1 && name && phone.length == 10 && sClass) {
      await registerAddDetail(registerationID, name, phone, sClass);
    }

    const query = router.query;
    delete query.action;

    router.replace(
      {
        pathname: router.pathname,
        query,
      },
      undefined,
      { scroll: false }
    );
  };

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.main}>
          <svg viewBox="0 0 42 42" fill="none" onClick={handleClose}>
            <path d="M40.3307 35.322C41.7394 36.7307 41.7394 38.922 40.3307 40.3307C39.6263 41.035 38.7655 41.3481 37.8263 41.3481C36.8872 41.3481 36.0263 41.035 35.322 40.3307L21.0002 26.0089L6.6785 40.3307C5.97415 41.035 5.11328 41.3481 4.17415 41.3481C3.23502 41.3481 2.37415 41.035 1.6698 40.3307C0.261107 38.922 0.261107 36.7307 1.6698 35.322L15.9915 21.0002L1.6698 6.6785C0.261107 5.2698 0.261107 3.0785 1.6698 1.6698C3.0785 0.261107 5.2698 0.261107 6.6785 1.6698L21.0002 15.9915L35.322 1.6698C36.7307 0.261107 38.922 0.261107 40.3307 1.6698C41.7394 3.0785 41.7394 5.2698 40.3307 6.6785L26.0089 21.0002L40.3307 35.322Z" />
          </svg>

          {step === 0 ? (
            <Container1
              setSelectedCourse={setSelectedCourse}
              setStep={setStep}
              setRegisterationID={setRegisterationID}
            />
          ) : step === 1 ? (
            <Container2
              name={name}
              setName={setName}
              phone={phone}
              setPhone={setPhone}
              sClass={sClass}
              sub={sub}
              setSub={setSub}
              setSClass={setSClass}
              setStep={setStep}
              selectedCourse={selectedCourse}
              registerationID={registerationID}
            />
          ) : step === 2 ? (
            <Container5
              name={name}
              setName={setName}
              phone={phone}
              setPhone={setPhone}
              sClass={sClass}
              board={board}
              setboard={setboard}
              email={email}
              setemail={setemail}
              setSClass={setSClass}
              setStep={setStep}
              selectedCourse={selectedCourse}
              registerationID={registerationID}
            />
          ) : step === 3 ? (
            <Container3
              otp1={otp1}
              setOtp1={setOtp1}
              otp2={otp2}
              setOtp2={setOtp2}
              otp3={otp3}
              setOtp3={setOtp3}
              otp4={otp4}
              setOtp4={setOtp4}
              otp5={otp5}
              setOtp5={setOtp5}
              otp6={otp6}
              setOtp6={setOtp6}
              mobile={phone}
              setStep={setStep}
              selectedCourse={selectedCourse}
              registerationID={registerationID}
            />
          ) : step === 4 ? (
            <Container4 selectedCourse={selectedCourse} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Signup;

const Container1 = ({ setSelectedCourse, setStep, setRegisterationID }) => {
  const [err, setErr] = useState("");

  const handleCourseSelection = async (course) => {
    setSelectedCourse(course);

    const response = await registerCreateApi(
      course == 1 ? "personal" : "cohort"
    );

    if (response.success && course == 1) {
      setRegisterationID(response._id);
      setStep(1);
    } else if (response.success && course == 2) {
      setRegisterationID(response._id);
      setStep(2);
    } else {
      setErr("Something Went Wrong");
      console.log(response.error);
    }
  };

  return (
    <div className={styles.container1}>
      <h2>Choose any one option</h2>

      <img src="/images/hare.png" alt="Animation" />

      <div className={styles.options}>
        <h3 style={{ marginBottom: "15px", color: "red" }}>{err}</h3>

        <div className={styles.option}>
          <h4>Personalised Course</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nunc ultrices commodo orci
            pretiumLorem ipsum dolor sit amet. Nunc commodo orci pretium
          </p>
          <button
            type="button"
            maxLength={1}
            onClick={() => {
              handleCourseSelection(1);
            }}
          >
            Join Now
          </button>
        </div>

        <div className={styles.option}>
          <h4>Cohort Course</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nunc ultrices commodo orci
            pretiumLorem ipsum dolor sit amet. Nunc commodo orci pretium
          </p>
          <button
            type="button"
            onClick={() => {
              handleCourseSelection(2);
            }}
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

const Container2 = ({
  name,
  setName,
  phone,
  setPhone,
  sClass,
  setSClass,
  sub,
  setSub,
  setStep,
  selectedCourse,
  registerationID,
}) => {
  const [err, seterr] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await personalisedAddDetailApi(
      registerationID,
      name,
      phone,
      sClass,
      sub
    );

    if (response.success) {
      setStep(3);
    } else {
      setErr("Something Went Wrong");
      console.log(response.error);
    }
  };

  return (
    <div className={styles.container2}>
      <div className={styles.header}>
        <img src="/images/signup.webp" alt="Animation" />

        <h4>
          <span>{selectedCourse == 1 ? "Personalised" : "Cohort"}</span> Courses
        </h4>
        <h3 style={{ marginBottom: "15px", color: "red" }}>{err}</h3>
      </div>

      <p>Fill out the below details to Begin</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Full Name here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="tel"
          pattern="[0-9]{1}[0-9]{9}"
          placeholder="Enter your Mobile Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "22px",
            border: "none",
          }}
        >
          <select value={sClass} onChange={(e) => setSClass(e.target.value)}>
            <option value="" disabled>
              Select your Class
            </option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
          </select>

          <select value={sub} onChange={(e) => setSub(e.target.value)}>
            <option>Select your subject</option>
            <option>Mathematics</option>
            <option>Science</option>
            <option>Social Science</option>
            <option>Computer Science</option>
          </select>
          <h3 style={{ marginBottom: "15px", color: "red" }}>{err}</h3>
        </div>

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

const Container5 = ({
  name,
  setName,
  phone,
  setPhone,
  sClass,
  setSClass,
  board,
  setboard,
  email,
  setemail,
  setStep,
  selectedCourse,
  registerationID,
}) => {
  const [err, setErr] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await cohurtregisterAddDetailApi(
      registerationID,
      name,

      phone,
      sClass,
      email,
      board
    );

    if (response.success) {
      console.log(1);
      setStep(3);
    } else {
      setErr("Something Went Wrong");
      console.log(response.error);
    }
  };

  return (
    <div className={styles.container2}>
      <div className={styles.header}>
        <img src="/images/signup.webp" alt="Animation" />

        <h4>
          <span>{selectedCourse == 1 ? "Personalised" : "Cohort"}</span> Courses
        </h4>
      </div>

      <p>Fill out the below details to Begin</p>
      <h3 style={{ marginBottom: "20px", color: "red", textAlign: "center" }}>
        {err}
      </h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Full Name here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="tel"
          pattern="[0-9]{1}[0-9]{9}"
          placeholder="Enter your Mobile Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          type="email"
          placeholder="Enter your email (optional)"
        ></input>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "22px",
            border: "none",
          }}
        >
          <select value={sClass} onChange={(e) => setSClass(e.target.value)}>
            <option value="" disabled>
              Select your Class
            </option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
          </select>

          <select value={board} onChange={(e) => setboard(e.target.value)}>
            <option>Select your board</option>
            <option>ICSE</option>
            <option>CBSE</option>
          </select>
        </div>

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

const Container3 = ({
  otp1,
  setOtp1,
  otp2,
  setOtp2,
  otp3,
  setOtp3,
  otp4,
  setOtp4,
  otp5,
  setOtp5,
  otp6,
  setOtp6,
  mobile,
  selectedCourse,
  setStep,
  registerationID,
}) => {
  const dispatch = useDispatch();
  const [err, setErr] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    {
      selectedCourse == 1 ? "Personalised" : "Cohort";
    }
    const otp = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;

    const response = await signupApi(registerationID, otp, selectedCourse);
    if (response.success) {
      dispatch(loginAction(response.user));
      setStep(4);
    } else {
      setErr("Something Went Wrong");
      console.log(response.error);
    }
  };

  const handleResend = async (e) => {
    const response = await registerResendOtpApi(registerationID);

    if (response.error) {
      console.log(response.error);
    }
  };

  return (
    <div className={styles.container3}>
      <h4>
        Please Enter the<span> OTP </span>to verify your account
      </h4>

      <p>A One Time Password has been sent to {mobile}</p>

      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            type="number"
            maxLength={1}
            value={otp1}
            onChange={(e) => setOtp1(e.target.value)}
          />

          <input
            type="number"
            maxLength={1}
            value={otp2}
            onChange={(e) => setOtp2(e.target.value)}
          />

          <input
            type="number"
            maxLength={1}
            value={otp3}
            onChange={(e) => setOtp3(e.target.value)}
          />

          <input
            type="number"
            maxLength={1}
            value={otp4}
            onChange={(e) => setOtp4(e.target.value)}
          />

          <input
            type="number"
            maxLength={1}
            value={otp5}
            onChange={(e) => setOtp5(e.target.value)}
          />

          <input
            type="number"
            maxLength={1}
            value={otp6}
            onChange={(e) => setOtp6(e.target.value)}
          />
        </div>
        <h3 style={{ margin: "auto", textAlign: "center", color: "red" }}>
          {err}
        </h3>

        <button type="submit">Verify</button>
      </form>

      <p>
        Dont Recieve the OTP? <span onClick={handleResend}>Resend OTP</span>
      </p>
    </div>
  );
};

const Container4 = ({ selectedCourse }) => {
  return (
    <div className={styles.container4}>
      <h4>
        <span>Congralulation </span>you are <span>joined </span>for{" "}
        {selectedCourse == 1 ? "personalised" : "cohort"} course free trial
      </h4>
    </div>
  );
};

// const ContainerDemo = ({
//   name,
//   setName,
//   phone,
//   setPhone,
//   sClass,
//   setSClass,
//   sub,
//   email,
//   setemail,
//   setSub,
//   setStep,
//   selectedCourse,
//   registerationID,
// }) => {
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await personalisedAddDetailApi(
//       registerationID,
//       name,
//       phone,
//       sClass,
//       sub,
//       email
//     );

//     if (response.success) {
//       setStep(3);
//     } else {
//       console.log(response.error);
//     }
//   };

//   return (
//     <div className={styles.container2}>
//       <div className={styles.header}>
//         <img src="/images/signup.webp" alt="Animation" />

//         <h4>
//           <span>{selectedCourse == 1 ? "Personalised" : "Cohort"}</span> Courses
//         </h4>
//       </div>

//       <p>Fill out the below details to Begin</p>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter your Full Name here"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <input
//           type="tel"
//           pattern="[0-9]{1}[0-9]{9}"
//           placeholder="Enter your Mobile Number"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />

//         <select value={sClass} onChange={(e) => setSClass(e.target.value)}>
//           <option value="" disabled>
//             Select your Class
//           </option>
//           <option value={6}>6</option>
//           <option value={7}>7</option>
//           <option value={8}>8</option>
//           <option value={9}>9</option>
//         </select>
//         <div>
//           <select value={sub} onChange={(e) => setSub(e.target.value)}>
//             <option>Select your subject</option>
//             <option>Mathematics</option>
//             <option>Science</option>
//             <option>Social Science</option>
//             <option>Computer Science</option>
//           </select>
//         </div>

//         <div className={style.dateSection}>
//           <button>January 3, 2023</button>
//           <button>January 4, 2023</button>
//           <button>January 5, 2023</button>
//           <button style={{ backgroundColor: "#ff242a", color: "white" }}>
//             January 6, 2023
//           </button>
//           <button>January 7, 2023</button>
//         </div>

//         <div className={style.timeSection}>
//           <div className={style.timecontainer}>
//             <div className={style.time1}>
//               <p>9am - 10am</p>
//             </div>
//             <div className={style.time2} style={{ border: " dotted #FFC727" }}>
//               <p>10am - 11am</p>
//             </div>
//             <div className={style.time3}>
//               <p>11am - 12pm</p>
//             </div>
//             <div className={style.time4}>
//               <p>12pm - 1pm</p>
//             </div>
//             <div className={style.time5} style={{ border: " dotted #FFC727" }}>
//               <p>1pm - 2pm</p>
//             </div>
//             <div className={style.time6}>
//               <p>2pm - 3pm</p>
//             </div>
//             <div className={style.time7}>
//               <p>3pm - 4pm</p>
//             </div>
//             <div className={style.time8}>
//               <p>4pm -</p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <input
//             style={{ marginTop: "35px" }}
//             value={email}
//             onChange={(e) => setemail(e.target.value)}
//             type="email"
//             placeholder="Enter your email (optional)"
//           ></input>
//         </div>

//         <button type="submit">Next</button>
//       </form>
//     </div>
//   );
// };

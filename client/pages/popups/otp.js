import styles from "../../styles/popups/otp.module.css";

const otp = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.main}>
        <svg viewBox="0 0 42 42" fill="none">
          <path d="M40.3307 35.322C41.7394 36.7307 41.7394 38.922 40.3307 40.3307C39.6263 41.035 38.7655 41.3481 37.8263 41.3481C36.8872 41.3481 36.0263 41.035 35.322 40.3307L21.0002 26.0089L6.6785 40.3307C5.97415 41.035 5.11328 41.3481 4.17415 41.3481C3.23502 41.3481 2.37415 41.035 1.6698 40.3307C0.261107 38.922 0.261107 36.7307 1.6698 35.322L15.9915 21.0002L1.6698 6.6785C0.261107 5.2698 0.261107 3.0785 1.6698 1.6698C3.0785 0.261107 5.2698 0.261107 6.6785 1.6698L21.0002 15.9915L35.322 1.6698C36.7307 0.261107 38.922 0.261107 40.3307 1.6698C41.7394 3.0785 41.7394 5.2698 40.3307 6.6785L26.0089 21.0002L40.3307 35.322Z" />
        </svg>
        <h2>
          Please Enter the <span style={{ color: "#ff242a" }}>OTP</span> to
          verify your account
        </h2>
        <p>A One Time Password has been sent to 9675497117</p>
        <div className={styles.otpinput}>
          <input maxLength="1"></input>
          <input maxLength="1"></input>
          <input maxLength="1"></input>
          <input maxLength="1"></input>
          <input maxLength="1"></input>
          <input maxLength="1"></input>
        </div>
        <button>Verify</button>
        <p style={{ marginTop: "5em", padding: "15px" }}>
          Did not receive the OTP?
          <span style={{ color: "#ff242a" }}>Resend OTP</span>
        </p>
      </div>
    </div>
  );
};

export default otp;

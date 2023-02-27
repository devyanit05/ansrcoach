import styles from "../../styles/Payment.module.css";

const Payment = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.BodyLeft}>
        <button>Go back</button>
        <h3>Book your demo session</h3>
        <div className={styles.PaymentInfo}>
          <h4>Fill in your Personal Details!</h4>
          <div className={styles.InputContainer}>
            <input placeholder="Name"></input>
            <input placeholder="Phone Number"></input>
            <input placeholder="Email"></input>
          </div>
          <button style={{ width: "100%", height: "9vh", marginTop: "15px" }}>
            Continue to Pay
          </button>
          <div className={styles.Footer}>
            <p>This payment is secured by</p>
            <img style={{ width: "6em" }} src="/images/razorpay.png"></img>
          </div>
        </div>
      </div>
      <div className={styles.BodyRight}>
        <img src="/images/astro_fishing.png"></img>
      </div>
    </div>
  );
};

export default Payment;

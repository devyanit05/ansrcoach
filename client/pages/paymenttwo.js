import styles from "../styles/Payment.module.css";

const PaymentOne = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>
        <button>Go back</button>
        <div className={styles.PaymentOptions}>
          <div>
            <h4>Credit and Debit Cards</h4>
            <div className={styles.CreditContainer}>
              <div>
                <img src="/images/plusicon.png"></img>
              </div>
              <p>Add new card</p>
            </div>
          </div>

          <div>
            <h4>Wallets</h4>
            <div className={styles.WalletContainer}>
              <div>
                <img
                  src="/images/amazonpay.png"
                  style={{ width: "50%" }}></img>
                <p>Amazon pay</p>
              </div>
              <div>
                <img src="/images/paytm.png" style={{ width: "45%" }}></img>
                <p>Paytm</p>
              </div>
              <div>
                <img src="/images/phonepe.webp" style={{ width: "35%" }}></img>
                <p>Phonepe</p>
              </div>
              <div>
                <img
                  src="/images/freecharge.webp"
                  style={{ width: "40%" }}></img>
                <p>Freecharge</p>
              </div>
              <div>
                <img src="/images/mibikwik.webp" style={{ width: "35%" }}></img>
                <p>Mobikwik</p>
              </div>
            </div>
          </div>

          <div>
            <h4>UPI</h4>
            <div className={styles.UpiContainer}>
              <div>
                <img src="/images/plusicon.png"></img>
              </div>
              <p>Add new UPI ID</p>
            </div>
          </div>
                  <button style={{
                      width: "90%", height: "10vh"
                  }}>
             Pay Rs 00
          </button>
        </div>
      </div>
      <div className={styles.BodyRight}>
        <img src="/images/astro_fishing.png"></img>
      </div>
    </div>
  );
};

export default PaymentOne;

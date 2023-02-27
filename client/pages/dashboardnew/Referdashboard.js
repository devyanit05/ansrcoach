import styles from "../../styles/dashboardnew/Referdashboard.module.css";

const Referdashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h2>Good Morning, User</h2>
        <div className={styles.icons}>
          <img src="/icons/gift.png" className={styles.img1}></img>
          <img src="/icons/notification.png" className={styles.img2}></img>
          <button>Get the App</button>
        </div>
      </div>
      <div className={styles.referbox}>
        <div className={styles.referboxtext}>
          <h1>Refer friends, win exciting rewards</h1>
          <h4>
            For every successful referral you can win{" "}
            <span style={{ color: "#FF242A" }}>₹100 Paytm Cash</span>
          </h4>
          <div className={styles.referalcodebox}>
            <div>
              <p style={{color: "#898989", fontSize: "13px"}}>Your referal code</p>
              <p>PUYSLTG4512</p>
            </div>
            <button>Copy code</button>
          </div>
        </div>
        <div className={styles.images}>
          <img src="/images/confetti.png" className={styles.image1}></img>
          <img src="/images/giftbox.png" className={styles.image2}></img>
        </div>
      </div>
    </div>
  );
}

export default Referdashboard

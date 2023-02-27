import styles from "../../styles/popups/Popup.module.css";

const popup09 = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.main}>
        <svg viewBox="0 0 42 42" fill="none">
          <path d="M40.3307 35.322C41.7394 36.7307 41.7394 38.922 40.3307 40.3307C39.6263 41.035 38.7655 41.3481 37.8263 41.3481C36.8872 41.3481 36.0263 41.035 35.322 40.3307L21.0002 26.0089L6.6785 40.3307C5.97415 41.035 5.11328 41.3481 4.17415 41.3481C3.23502 41.3481 2.37415 41.035 1.6698 40.3307C0.261107 38.922 0.261107 36.7307 1.6698 35.322L15.9915 21.0002L1.6698 6.6785C0.261107 5.2698 0.261107 3.0785 1.6698 1.6698C3.0785 0.261107 5.2698 0.261107 6.6785 1.6698L21.0002 15.9915L35.322 1.6698C36.7307 0.261107 38.922 0.261107 40.3307 1.6698C41.7394 3.0785 41.7394 5.2698 40.3307 6.6785L26.0089 21.0002L40.3307 35.322Z" />
        </svg>
        <div className={styles.header}>
          <img src="/images/account.png" alt="image"></img>
          <h2>
            Personalised <span style={{ color: "white" }}>Courses</span>
          </h2>
        </div>
        <h4>Pick your time slots</h4>
        <div className={styles.dateSection}>
          <div>
            <p>January 3, 2023</p>
          </div>
          <div>
            <p>January 4, 2023</p>
          </div>
          <div>
            <p>January 5, 2023</p>
          </div>
          <div style={{ backgroundColor: "#ff242a", color: "white" }}>
            <p>January 6, 2023</p>
          </div>
          <div>
            <p>January 7, 2023</p>
          </div>
        </div>

        <div className={styles.timeSection}>
          <div className={styles.timecontainer}>
            <div className={styles.time1}>
              <p>9am - 10am</p>
            </div>
            <div className={styles.time2} style={{ border: " dotted #FFC727" }}>
              <p>10am - 11am</p>
            </div>
            <div className={styles.time3}>
              <p>11am - 12pm</p>
            </div>
            <div className={styles.time4}>
              <p>12pm - 1pm</p>
            </div>
            <div className={styles.time5} style={{ border: " dotted #FFC727" }}>
              <p>1pm - 2pm</p>
            </div>
            <div className={styles.time6}>
              <p>2pm - 3pm</p>
            </div>
            <div className={styles.time7}>
              <p>3pm - 4pm</p>
            </div>
            <div className={styles.time8}>
              <p>4pm -</p>
            </div>
          </div>
        </div>
        <button>Next</button>
      </div>
    </div>
  );
}

export default popup09

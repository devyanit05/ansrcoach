import styles from "../../styles/popups/Popup.module.css";

const Popup02 = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.main}>
        <svg viewBox="0 0 42 42" fill="none">
          <path d="M40.3307 35.322C41.7394 36.7307 41.7394 38.922 40.3307 40.3307C39.6263 41.035 38.7655 41.3481 37.8263 41.3481C36.8872 41.3481 36.0263 41.035 35.322 40.3307L21.0002 26.0089L6.6785 40.3307C5.97415 41.035 5.11328 41.3481 4.17415 41.3481C3.23502 41.3481 2.37415 41.035 1.6698 40.3307C0.261107 38.922 0.261107 36.7307 1.6698 35.322L15.9915 21.0002L1.6698 6.6785C0.261107 5.2698 0.261107 3.0785 1.6698 1.6698C3.0785 0.261107 5.2698 0.261107 6.6785 1.6698L21.0002 15.9915L35.322 1.6698C36.7307 0.261107 38.922 0.261107 40.3307 1.6698C41.7394 3.0785 41.7394 5.2698 40.3307 6.6785L26.0089 21.0002L40.3307 35.322Z" />
        </svg>
        <div className={styles.header}>
          <img src="/images/account.png" alt="image"></img>
          <h2>
            Cohort <span style={{ color: "white" }}>Courses</span>
          </h2>
        </div>
        <h4>Fill out the below details to Begin</h4>
        <div className={styles.textfield}>
          <div>
            <input placeholder="Enter your full name "></input>
          </div>
          <div>
            <input placeholder="Enter your Parent name"></input>
          </div>
          <div>
            <input placeholder="Enter your mobile number"></input>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: "22px",
              border: 'none'
          }}
          >
            <div>
              <select>
                <option>Select your class</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
              </select>
            </div>
            <div>
              <select>
                <option>Select your board</option>
                <option>ICSE</option>
                <option>CBSE</option>
              </select>
            </div>
          </div>
        </div>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Popup02;

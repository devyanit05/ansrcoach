import styles from "../../styles/dashboardnew/Dashboard.module.css";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h2>Good Morning, User</h2>
        <div className={styles.icons}>
          <Link href="/Referdashboard">
            <img src="/icons/gift.png" className={styles.img1}></img>
          </Link>
          <img src="/icons/notification.png" className={styles.img2}></img>
          <button>Get the App</button>
        </div>
      </div>
      <img className={styles.animation} src="/animations/astronaut.gif"></img>

      <div className={styles.gridContainer}>
        <div className={styles.item1}>
          <div className={styles.statisticsContainer}>
            <h3>Your Monthly Statistics</h3>

            <div className={styles.customselect}>
              <select style={{ color: "white", fontSize: "10px" }}>
                <option value="0">DEC 2022</option>
                <option value="1">2021</option>
                <option value="2">2020</option>
              </select>
            </div>
          </div>

          <div className={styles.dateflexHeader}>
            <p>Present</p>
            <p>Absent</p>
            <p>Holidays</p>
            <p>Remains</p>
          </div>
          <div className={styles.dateflex}>
            <div
              className={styles.dateGrid}
              style={{ backgroundColor: "#3FF63F" }}>
              <h3>15</h3>
              <p>days</p>
            </div>
            <div
              className={styles.dateGrid}
              style={{ backgroundColor: "#FF6347" }}>
              <h3>01</h3>
              <p>days</p>
            </div>
            <div
              className={styles.dateGrid}
              style={{ backgroundColor: "#F6A01F" }}>
              <h3>04</h3>
              <p>days</p>
            </div>
            <div
              className={styles.dateGrid}
              style={{ backgroundColor: "#0A82F3" }}>
              <h3>10</h3>
              <p>days</p>
            </div>
          </div>
        </div>

        <div className={styles.item2}>
          <div className={styles.profile}>
            <div>
              <div className={styles.box}></div>
              <img src="/images/person.png"></img>
            </div>
            <div className={styles.profileinfo}>
              <h3>Abhishek Singh</h3>
              <p style={{ color: "#898989" }}>
                Joined 10X Learning on 12 June 2022
              </p>
              <p>+91 123456789</p>
            </div>
          </div>
        </div>

        <div className={styles.item3}>
          <div className={styles.notesection}>
            <img src="./images/word-doc.png"></img>
            <h3>Study Notes</h3>
          </div>
        </div>
        <div className={styles.item4}>
          <div className={styles.notesection}>
            <img src="./images/quiz.png"></img>
            <h3>Online Quiz</h3>
          </div>
        </div>
        <div className={styles.item5}>
          <div className={styles.notesection}>
            <img src="./images/exam.png"></img>
            <h3>Tests</h3>
          </div>
        </div>

        <div className={styles.item6}>
          <h3>Your Statistics</h3>
          <div className={styles.timecontainerheader1}>
            <p>Total watched time </p>
            <p>Live watched time</p>
          </div>
          <div className={styles.timecontainerheader2}>
            <p>Online Quiz</p>
            <p>Time left for free trail</p>
          </div>
          <div className={styles.timecontainer}>
            <div className={styles.time1} style={{ marginTop: "-23px" }}>
              <p>25hrs 40min 20sec</p>
            </div>
            <div className={styles.time2} style={{ marginTop: "-23px" }}>
              <p>4hrs 54min 17sec</p>
            </div>
            <div className={styles.time3}>
              <p>10 attempted</p>
            </div>
            <div className={styles.time4}>
              <p>10 attempted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard

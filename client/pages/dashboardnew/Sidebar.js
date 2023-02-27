import styles from "../../styles/dashboardnew/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.logo}
        src="/logos/logo.webp"
        alt="AnrCoach Logo"></img>

      <div className={styles.main}>
        <a href="#">
          <img src="/images/homeicon.png"></img>
          Dashboard
        </a>

        <a href="#" style={{marginLeft: "-1em"}}>
          <img src="/images/bookicon.png"></img>Courses
        </a>

        <a href="#" style={{marginLeft: "-1.6em"}}>
          <img src="/images/logouticon.png"></img>Logout
        </a>
      </div>
    </div>
  );
}

export default Sidebar

import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import styles from "../../styles/dashboardnew/Layout.module.css";
import Referdashboard from "./Referdashboard";
import logout from "./logout";

const Layout = () => {
  return (
    <div className={styles.container}>
          <Sidebar />
          <Dashboard />
    </div>
  )
}

export default Layout;

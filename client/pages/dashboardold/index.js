import Hero from "../../components/dashboardold/Hero";
import Header from "../../components/Header";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    setAttendance([
      {
        date: new Date(),
        vidoeId: null,
        attended: true,
      },
      {
        date: new Date(),
        vidoeId: null,
        attended: true,
      },
      {
        date: new Date(),
        vidoeId: null,
        attended: true,
      },
      {
        date: new Date(),
        vidoeId: null,
        attended: true,
      },
      {
        date: new Date(),
        vidoeId: null,
        attended: false,
      },
    ]);
  }, []);

  return (
    <>
      <Header />
      <Hero attendance={attendance} />
    </>
  );
};

export default Dashboard;

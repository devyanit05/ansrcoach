import styles from "../../styles/studynotes/Notes.module.css";
import NotesCard from "./NotesCard";
import Link from "next/link";

const Notes = () => {
    const courses = [
      {
        color: "#570EFA",
        backgroundColor: "#F6F1FF",
        title: "Mathematics",
        description: [
          "Number upto 99",
          "Subtraction",
          "Multiplication",
          "Lines and Planes",
          "Measurements",
          "Data Handling",
        ],
        link: "/",
        icon1: "/icons/figure_4.png",
      },
      {
        color: "#227FFB",
        backgroundColor: "#E9EFF7",

        title: "Science",
        description: [
          "Number upto 99",
          "Subtraction",
          "Multiplication",
          "Lines and Planes",
          "Measurements",
          "Data Handling",
        ],
        link: "/",
        icon1: "/icons/figure_1.png",
      },
      {
        color: "#FF3276",
        backgroundColor: "#FCE4EC",
        title: "Social Science",
        description: [
          "Number upto 99",
          "Subtraction",
          "Multiplication",
          "Lines and Planes",
          "Measurements",
          "Data Handling",
        ],
        link: "/",
        icon1: "/icons/figure_3.png",
      },
      {
        color: "#FF634C",
        backgroundColor: "#FFEBE1",

        title: "English",
        description: [
          "Number upto 99",
          "Subtraction",
          "Multiplication",
          "Lines and Planes",
          "Measurements",
          "Data Handling",
        ],
        link: "/",
        icon1: "/icons/figure_5.png",
      },
      {
        color: "#237E74",
        backgroundColor: "#E7FBE8",
        title: "Hindi",
        description: [
          "Number upto 99",
          "Subtraction",
          "Multiplication",
          "Lines and Planes",
          "Measurements",
          "Data Handling",
        ],
        link: "/",
        icon1: "/icons/figure_2.png",
      },
      {
        color: "#FF8C00",
        backgroundColor: "#FFF0CB",

        title: "Coding",
        description: [
          "Number upto 99",
          "Subtraction",
          "Multiplication",
          "Lines and Planes",
          "Measurements",
          "Data Handling",
        ],
        link: "/",
        icon1: "/icons/computer_2.webp",
      },
    ];

    return (
      <>
        <div className={styles.main}>
          <div className={styles.breadcrumb}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Dashboard</li>
               <li>Study Notes</li>
            </ul>
          </div>
          <h2>All Subjects</h2>
          <div className={styles.container}>
            <div className={styles.cards}>
              {courses.map((course, i) => (
                <NotesCard
                  key={i}
                  color={course.color}
                  backgroundColor={course.backgroundColor}
                  title={course.title}
                  description={course.description}
                  link={course.link}
                  icon1={course.icon1}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
};

export default Notes;

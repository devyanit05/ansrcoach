import { Typography } from "@mui/material";
import styles from "../../styles/home/Course.module.css";
import CourseCard from "./CourseCard";
import Box from "@mui/material/Box";
import { AddBoxOutlined } from "@mui/icons-material";

const Course = () => {
    const courses = [
        {
            id: "Mathematics",
            color: "#FF634C",
            backgroundColor: "#FFF0E9",
            classRange: "6th - 9th",
            title: "Mathematics",
            description:
                "Lorem ipsum dolor sit amet consectetur. Adipiscing adipiscing ut quisque.",
            link: "/",
            icon1: "/icons/maths_1.webp",
            icon2: "/icons/maths_2.webp",
        },
        {
            id: "Computer",
            color: "#FF8C00",
            backgroundColor: "#FFF0CB",
            classRange: "6th - 9th",
            title: "Computer",
            description:
                "Lorem ipsum dolor sit amet consectetur. Adipiscing adipiscing ut quisque.",
            link: "/",
            icon1: "/icons/computer_1.webp",
            icon2: "/icons/computer_2.webp",
        },
        {
            id:"Science",
            color: "#00A3FF",
            backgroundColor: "#EBF2FF",
            classRange: "6th - 9th",
            title: "Science",
            description:
                "Lorem ipsum dolor sit amet consectetur. Adipiscing adipiscing ut quisque.",
            link: "/",
            icon1: "/icons/science_1.webp",
            icon2: "/icons/science_2.webp",
        },
        {
            id: "Maths + Science",
            color: "#FF3276",
            backgroundColor: "#FCE4EC",
            classRange: "6th - 9th",
            title: "Maths + Science",
            description:
                "Lorem ipsum dolor sit amet consectetur. Adipiscing adipiscing ut quisque.",
            link: "/",
            icon1: "/icons/ms_1.webp",
            icon2: "/icons/ms_2.webp",
        },
    ];

    return (
      <>
        <Box
          className={styles.main}
          sx={{ display: { xs: "none",sm: "none", md: "block" } }}>
          <Typography
            component="h2"
            sx={{ fontSize: { xs: "24px", sm: "30px", md: "45px" } }}>
            Cohort <span>One is to 1</span> courses
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: { xs: "14px", md: "20px" } }}>
            AnsrCoach is an Platfrom that will teach you in more interactive way
          </Typography>

          <Box className={styles.container}>
            <img src="/animations/monkey.gif" alt="Graphic" />

            <Box className={styles.cards}>
              {courses.map((course, i) => (
                <CourseCard
                  key={i}
                  id={course.id}
                  color={course.color}
                  backgroundColor={course.backgroundColor}
                  classRange={course.classRange}
                  title={course.title}
                  description={course.description}
                  link={course.link}
                  icon1={course.icon1}
                  icon2={course.icon2}
                />
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          className={styles.main}
          sx={{ display: { xs: "none",sm: "block", md: "none" } }}>
          <Typography
            component="h2"
            sx={{ fontSize: { xs: "24px", sm: "30px", md: "45px" } }}>
            Cohort <span>One is to 1</span> courses
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: { xs: "14px", md: "20px" } }}>
            AnsrCoach is an Platfrom that will teach you in more interactive way
          </Typography>

          <Box>
            <img
              src="/animations/monkey.gif"
              alt="Graphic"
              style={{ width: "100%", objectFit: "contain" }}
            />

            <Box className={styles.cards}>
              {courses.map((course, i) => (
                <CourseCard
                  key={i}
                  id={course.id}
                  color={course.color}
                  backgroundColor={course.backgroundColor}
                  classRange={course.classRange}
                  title={course.title}
                  description={course.description}
                  link={course.link}
                  icon1={course.icon1}
                  icon2={course.icon2}
                />
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          className={styles.main}
          sx={{ display: { xs: "block",sm: "none", md: "none" } }}>
          <Typography
            component="h2"
            sx={{ fontSize: { xs: "24px", sm: "30px", md: "45px" } }}>
            Cohort <span>One is to 1</span> courses
          </Typography>
          <Typography
            component="p"
            sx={{ fontSize: { xs: "14px", md: "20px" } }}>
            AnsrCoach is an Platfrom that will teach you in more interactive way
          </Typography>

          <Box>
            <img
              src="/animations/monkey.gif"
              alt="Graphic"
              style={{ width: "100%", objectFit: "contain" }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}>
              {courses.map((course, i) => (
                <CourseCard
                  key={i}
                  id={course.id}
                  color={course.color}
                  backgroundColor={course.backgroundColor}
                  classRange={course.classRange}
                  title={course.title}
                  description={course.description}
                  link={course.link}
                  icon1={course.icon1}
                  icon2={course.icon2}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </>
    );
};

export default Course;

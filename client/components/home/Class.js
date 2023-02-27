import styles from "../../styles/home/Class.module.css";
import ClassCard from "./ClassCard";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import "splide-nextjs/splide/dist/css/themes/splide-default.min.css";
const Class = () => {
  const classes = [
    {
      sClass: "6",
      image: "/images/home_class_6.webp",
      description:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing adipiscing ut quisque.",
      link: "/",
      shape1: "/images/books.webp",
      shape2: "/images/hacker.webp",
    },
    {
      sClass: "7",
      image: "/images/home_class_7.webp",
      description:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing adipiscing ut quisque.",
      link: "/",
      shape1: "/images/books.webp",
      shape2: "/images/hacker.webp",
    },
    {
      sClass: "8",
      image: "/images/home_class_8.webp",
      description:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing adipiscing ut quisque.",
      link: "/",
      shape1: "/images/books.webp",
      shape2: "/images/hacker.webp",
    },
    {
      sClass: "9",
      image: "/images/home_class_9.webp",
      description:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing adipiscing ut quisque.",
      link: "/",
      shape1: "/images/books.webp",
      shape2: "/images/hacker.webp",
    },
  ];

  return (
    <div id="courses">
      <Box className={styles.main}>
        <Typography
          component="h2"
          sx={{ fontSize: { xs: "24px", sm: "30px", md: "45px" } }}
        >
          <span>Cohurt</span> Based Courses
        </Typography>
        <Typography component="p" sx={{ fontSize: { xs: "14px", md: "18px" } }}>
          AnsrCoach is an Platfrom that will teach you in more interactive way
        </Typography>

        <Box
          className={styles.container}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <Box className={styles.cards}>
            {classes.map((c, i) => (
              <ClassCard
                key={c.sClass}
                sClass={c.sClass}
                image={c.image}
                description={c.description}
                link={c.link}
                shape1={c.shape1}
                shape2={c.shape2}
              />
            ))}
          </Box>
        </Box>

        <Box sx={{ display: { xs: " none", sm: "block", md: "none" }, mt: 6 }}>
          <Box>
            <Splide
              options={{
                perPage: 2,
                drag: "free",
                gap: "20px",
              }}
            >
              {classes.map((c, i) => (
                <SplideSlide key={c.sClass}>
                  <ClassCard
                    sClass={c.sClass}
                    image={c.image}
                    description={c.description}
                    link={c.link}
                    shape1={c.shape1}
                    shape2={c.shape2}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </Box>
        </Box>

        <Box sx={{ display: { xs: "block", sm: "none", md: "none" }, mt: 6 }}>
          <Box>
            <Splide
              options={{
                perPage: 1,
                drag: "free",
              }}
            >
              {classes.map((c, i) => (
                <SplideSlide key={c.sClass}>
                  <ClassCard
                    sClass={c.sClass}
                    image={c.image}
                    description={c.description}
                    link={c.link}
                    shape1={c.shape1}
                    shape2={c.shape2}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Class;

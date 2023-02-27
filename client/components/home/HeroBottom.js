import { Box, Typography } from "@mui/material";
import styles from "../../styles/home/HeroBottom.module.css";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import "splide-nextjs/splide/dist/css/themes/splide-default.min.css";

const HeroBottom = () => {
    return (
      <>
        <Box
          className={styles.main}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          <Box className={styles.container}>
            <Box className={styles.card}>
              <Typography
                component="h2"
                sx={{ fontSize: { sm: "28px", md: "40px" } }}>
                Hot 🔥 deals for you
              </Typography>
              <Typography component="p" sx={{ fontSize: "16px" }}>
                In addition to practical educational experinece technology
              </Typography>
            </Box>

            <Box className={styles.card}>
              <Typography
                component="h3"
                sx={{ fontSize: { sm: "28px", md: "40px" } }}>
                01
              </Typography>
              <Typography
                component="h4"
                sx={{ fontSize: { sm: "25px", md: "32px" } }}>
                One is to 1 courses
              </Typography>
            </Box>

            <Box className={styles.card}>
              <Typography
                component="h3"
                sx={{ fontSize: { sm: "28px", md: "40px" } }}>
                02
              </Typography>
              <Typography
                component="h4"
                sx={{ fontSize: { sm: "25px", md: "32px" } }}>
                Cohurt based courses
              </Typography>
            </Box>

            <Box className={styles.card}>
              <Typography
                component="h3"
                sx={{ fontSize: { sm: "28px", md: "40px" } }}>
                03
              </Typography>
              <Typography
                component="h4"
                sx={{ fontSize: { sm: "25px", md: "32px" } }}>
                Free Demo session
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          className={styles.main}
          sx={{ display: { xs: "none", sm: "block", md: "none" } }}>
          <Box className={styles.container}>
            <Box className={styles.card}>
              <Typography
                component="h2"
                sx={{ fontSize: { sm: "28px", md: "40px" } }}>
                Hot 🔥 deals for you
              </Typography>
              <Typography component="p" sx={{ fontSize: "16px" }}>
                In addition to practical educational experinece technology
              </Typography>
            </Box>

            <Box className={styles.card}>
              <Typography
                component="h3"
                sx={{ fontSize: { sm: "28px", md: "40px" } }}>
                01
              </Typography>
              <Typography
                component="h4"
                sx={{ fontSize: { sm: "25px", md: "32px" } }}>
                One is to 1 courses
              </Typography>
            </Box>

            <Box className={styles.card}>
              <Typography
                component="h3"
                sx={{ fontSize: { sm: "28px", md: "40px" } }}>
                02
              </Typography>
              <Typography
                component="h4"
                sx={{ fontSize: { sm: "25px", md: "32px" } }}>
                Cohurt based courses
              </Typography>
            </Box>

            <Box className={styles.card}>
              <Typography
                component="h3"
                sx={{ fontSize: { sm: "28px", md: "40px" } }}>
                03
              </Typography>
              <Typography
                component="h4"
                sx={{ fontSize: { sm: "25px", md: "32px" } }}>
                Free Demo session
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          className={styles.main}
          sx={{ display: { xs: "block", sm: "none", md: "none" } }}>
          <Box className={styles.container}>
            <Box className={styles.card}>
              <Typography
                component="h2"
                sx={{ fontSize: { xs: "18px"} }}>
                Hot 🔥 deals for you
              </Typography>
              <Typography
                component="p"
                sx={{ fontSize: { xs: "12px" } }}>
                In addition to practical educational experinece technology
              </Typography>
            </Box>

            <Box className={styles.card}>
              <Typography
                component="h3"
                sx={{ fontSize: { xs: "24px", md: "40px" } }}>
                01
              </Typography>
              <Typography
                component="h4"
                sx={{ fontSize: { xs: "18px", md: "32px" } }}>
                Cohurt based courses
              </Typography>
            </Box>

            <Box className={styles.card}>
              <Typography
                component="h3"
                sx={{ fontSize: { xs: "24px", md: "40px" } }}>
                02
              </Typography>
              <Typography
                component="h4"
                sx={{ fontSize: { xs: "18px", md: "32px" } }}>
                Free Demo session
              </Typography>
            </Box>
          </Box>
        </Box>
      </>
    );
};

export default HeroBottom;

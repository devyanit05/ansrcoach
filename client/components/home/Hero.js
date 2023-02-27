import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../../styles/home/Hero.module.css";
import { Link } from "@mui/material";
import Signup from "../Signup";
import Login from "../Login";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import {
  FaInstagram,
  FaInstagramSquare,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { CookiesProvider } from "react-cookie";
import Cookies from "universal-cookie";
import { login, logout } from "../../redux/reducer/auth";
import { useDispatch, useSelector } from "react-redux";

const Hero = () => {
  const router = useRouter();
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleJoin = () => {
    router.replace(
      {
        pathname: router.pathname,
        query: { action: "signup" },
      },
      undefined,
      { scroll: false }
    );
  };

  const [user, setUser] = useState("");
  useEffect(() => {
    const cookie = new Cookies();
    setUser(cookie.get("JWT"));
    console.log(cookie, user);
  }, []);
  const dispatch = useDispatch();

  useEffect(() => {
    if (router.isReady) {
      setShowSignup(router.query.action === "signup");
      setShowLogin(router.query.action === "login");
    }
  }, [router]);

  const handleLogin = () => {
    router.replace(
      {
        pathname: router.pathname,
        query: { action: "login" },
      },
      undefined,
      { scroll: false }
    );
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Box
        className={styles.main}
        sx={{ display: { xs: "none", sm: "none", md: "block" } }}
      >
        <Box className={styles.container}>
          <img
            className={styles.astronaut}
            src="/animations/astronaut.gif"
            alt="Animation"
          />

          <Box className={styles.content}>
            <Typography component="h1" sx={{ fontSize: { md: "75px" } }}>
              <span>Studying</span> Online is now much easier
            </Typography>

            <Typography component="p" sx={{ fontSize: { md: "24px" } }}>
              AnsrCoach is an Platfrom that will teach you in more interactive
              way
            </Typography>

            <Box className={styles.buttonGroup}>
              <Button
                type="button"
                className={styles.primary}
                onClick={handleJoin}
              >
                Join for free
              </Button>
              <Link
                href="https://www.youtube.com/watch?v=Vmoq4NaRhSE"
                sx={{ textDecoration: "none" }}
                target="_blank"
              >
                <Button type="button" className={styles.secondary}>
                  <img src="/icons/play.webp" alt="Play Icon" />
                  Watch how it works
                </Button>
              </Link>
            </Box>
          </Box>

          <img
            className={styles.rocket}
            src="/animations/rocket.gif"
            alt="Animation"
          />
        </Box>
      </Box>
      <Box
        className={styles.main}
        sx={{ display: { xs: "none", sm: "block", md: "none" } }}
      >
        <Box className={styles.container}>
          <img
            className={styles.astronaut}
            src="/animations/astronaut.gif"
            alt="Animation"
            style={{ width: "30vw" }}
          />

          <Box className={styles.content}>
            <Typography component="h1" sx={{ fontSize: { sm: "47px" } }}>
              <span>Studying</span> Online is now much easier
            </Typography>
            <Typography
              component="p"
              sx={{ fontSize: { sm: "17px", md: "24px" } }}
            >
              AnsrCoach is an Platfrom that will teach you in more interactive
              way
            </Typography>

            <Box
              sx={{
                mt: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "15px",
              }}
            >
              <Button
                sx={{
                  borderRadius: "40px",
                  fontFamily: "Inter",
                  color: "#ffffff",
                  backgroundColor: "#ff242a",
                  padding: "18px 25px",
                  fontSize: "16px",
                  width: "26vw",
                }}
                type="button"
                onClick={handleJoin}
              >
                Join for free
              </Button>
              <Link
                href="https://www.youtube.com/watch?v=Vmoq4NaRhSE"
                sx={{ textDecoration: "none" }}
                target="_blank"
              >
                <Button
                  type="button"
                  sx={{
                    borderRadius: "40px",
                    fontFamily: "Inter",
                    color: "#ffffff",
                    background: "rgba(255, 255, 255, 0.4)",
                    backdropFilter: "blur(35px)",
                    padding: "18px 25px",
                    fontSize: "14px",
                    width: "35vw",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                  }}
                >
                  <img
                    src="/icons/play.webp"
                    alt="Play Icon"
                    style={{
                      width: "25px",
                      height: "25px",
                      objectFit: "contain",
                    }}
                  />
                  Watch how it works
                </Button>
              </Link>
            </Box>
          </Box>

          <img
            className={styles.rocket}
            src="/animations/rocket.gif"
            alt="Animation"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "block", sm: "none", md: "none" },
          overflow: "hidden",
          marginTop: "30px",
          padding: "30px",
        }}
      >
        <Box>
          <Box className={styles.content}>
            <Typography
              component="h1"
              sx={{ fontSize: { xs: "26px" }, textAlign: "center" }}
            >
              <span>Studying</span> Online is now much easier
            </Typography>
            <img
              src="/animations/astronaut.gif"
              alt="Animation"
              // style={{ position: "absolute", zIndex: 10, width: "20vw", top: 90 }}
              style={{ width: "100%", objectFit: "contain" }}
            />

            <Box
              sx={{
                mt: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "10px",
              }}
            >
              <Button
                sx={{
                  borderRadius: "40px",
                  fontFamily: "Inter",
                  color: "#ffffff",
                  backgroundColor: "#ff242a",
                  padding: "12px 15px",
                  fontSize: "12px",
                  width: "35vw",
                }}
                type="button"
                onClick={handleJoin}
              >
                Join for free
              </Button>
              <Link
                href="https://www.youtube.com/watch?v=Vmoq4NaRhSE"
                sx={{ textDecoration: "none" }}
                target="_blank"
              >
                <Button
                  type="button"
                  sx={{
                    borderRadius: "30px",
                    fontFamily: "Inter",
                    color: "#ffffff",
                    background: "rgba(255, 255, 255, 0.4)",
                    backdropFilter: "blur(35px)",
                    padding: "6px",
                    fontSize: "12px",
                    width: "50vw",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2px",
                  }}
                >
                  <img
                    src="/icons/play.webp"
                    alt="Play Icon"
                    style={{
                      width: "30px",
                      height: "30px",
                      objectFit: "contain",
                    }}
                  />
                  Watch how it works
                </Button>
              </Link>
            </Box>
            <Typography
              component="p"
              sx={{ fontSize: { xs: "18px" }, textAlign: "left" }}
            >
              AnsrCoach is an Platfrom that will teach you in more interactive
              way
            </Typography>
          </Box>
          {!user ? (
            <Button
              onClick={handleLogin}
              variant="contained"
              color="primary"
              sx={{
                width: 150,
                height: 50,

                mt: 4,
              }}
            >
              Login
            </Button>
          ) : (
            <Button
              onClick={handleLogout}
              variant="contained"
              color="primary"
              sx={{
                width: 150,
                height: 50,

                mt: 4,
              }}
            >
              Logout
            </Button>
          )}
        </Box>
      </Box>
      {showSignup && <Signup />}
      {showLogin && <Login />}
      <ul
        style={{
          top: "45%",
          right: "0",
          padding: "8px",
          border: "0.5px solid white",
          borderBottomLeftRadius: "25px",
          position: "absolute",
          background: "red",
        }}
      >
        <li className={styles.socialIcons}>
          <a
            href="https://www.youtube.com/@10x_learning"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </li>
        <li className={styles.socialIcons}>
          <a
            href="https://www.linkedin.com/company/10xlearning"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className={styles.socialIcons}>
          <a
            href="https://www.instagram.com/10x_learning/"
            style={{ color: "white" }}
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram />
          </a>
        </li>
        <li className={styles.socialIcons}>
          <a
            href="https://www.facebook.com/profile.php?id=100088413707049"
            style={{ color: "white" }}
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Hero;

import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Signup from "./Signup";
import Login from "./Login";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { Drawer } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import { CookiesProvider } from "react-cookie";
import Cookies from "universal-cookie";
import { login, logout } from "../redux/reducer/auth";

import { useDispatch, useSelector } from "react-redux";

const drawerWidth = 240;

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Toolbar />
      <Divider />
      <List sx={{ p: 2 }}>
        <Link href="/">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="/blogs">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Blogs" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="/course/[id]">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Courses" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="/contact">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [user, setUser] = useState("");
  useEffect(() => {
    const cookie = new Cookies();
    setUser(cookie.get("JWT"));
    console.log(cookie, user);
  }, []);
  const dispatch = useDispatch();
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState("");

  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  console.log(user);
  useEffect(() => {
    if (router.isReady) {
      setCurrentUrl(router.pathname);
      setShowSignup(router.query.action === "signup");
      setShowLogin(router.query.action === "login");
      setShowPayment(router.query.action === "payment");
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
      <AppBar
        position="static"
        sx={{ bgcolor: "transparent", boxShadow: "none", pt: 3 }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <Avatar
              alt="Example Alt"
              src="/images/10xlearning.png"
              sx={{ display: { xs: "none", md: "flex" }, width: 100, ml: -3 }}
            />

            <Avatar
              alt="Example Alt"
              src="/images/10xlearning.png"
              sx={{
                display: { xs: "flex", md: "none" },
                width: 100,
                ml: -3,
                mt: 1.5,
              }}
            />
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: -2,
                flexGrow: 1,
                display: {
                  xs: "flex",
                  sm: "none",
                  md: "none",
                  justifyContent: "flex-end",
                },
              }}
            >
              <MenuIcon />
            </IconButton>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "flex", md: "flex" },
                justifyContent: "flex-end",
                gap: 4,
                alignItems: "center",
              }}
            >
              <Link href="/">
                <Typography variant="h3" color="secondary">
                  Home
                </Typography>
              </Link>
              <Link href="/blogs">
                <Typography variant="h3" color="secondary">
                  Blogs
                </Typography>
              </Link>
              <Link href="/#courses">
                <Typography variant="h3" color="secondary">
                  Courses
                </Typography>
              </Link>
              <Link href="/contact">
                <Typography variant="h3" color="secondary">
                  Contact
                </Typography>
              </Link>
              {!user ? (
                <Button
                  onClick={handleLogin}
                  variant="contained"
                  color="primary"
                  sx={{
                    width: 90,
                    height: 40,
                    ml: 3,
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
                    width: 90,
                    height: 40,
                    ml: 3,
                  }}
                >
                  Logout
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          display: { xs: "block", sm: "none", md: "none" },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            bgColor: "#13192E",
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {showSignup && <Signup />}
      {showLogin && <Login />}
      {/* {showPayment && <Payment />} */}
    </>
  );
};

export default Header;

{
  /* <div className={styles.main}>
  <div className={styles.container}>
    <img
      className={styles.logo}
      src="/images/10xlearning.png"
      alt="10xlearning Logo"
    />

    <div className={styles.links}>
      <ul>
        <li className={currentUrl === "/" ? styles.selected : undefined}>
          <Link href="/">Home</Link>
        </li>
        <li className={currentUrl === "/blogs" ? styles.selected : undefined}>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li
          className={
            currentUrl === "/cohort/63db981b03a11e00680c002a"
              ? styles.selected
              : undefined
          }>
          <Link href="/cohort/63db981b03a11e00680c002a">Courses</Link>
        </li>
        <li className={currentUrl === "/contact" ? styles.selected : undefined}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <button type="button" className={styles.login} onClick={handleLogin}>
        Login
      </button>
    </div>
  </div>
</div>; */
}

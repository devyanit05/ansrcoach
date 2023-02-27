import styles from "../../styles/home/Demo.module.css";
import { useState } from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Demo = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [sClass, setSClass] = useState("");

    return (
      <>
        <Box
          className={styles.main}
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
            },
          }}>
          <Box className={styles.container}>
            <Box className={styles.left}>
              <Typography component="h2" sx={{ fontSize: { md: "48px" } }}>
                Book your <span> Demo</span> Session
              </Typography>

              <Typography component="p" sx={{ fontSize: { md: "24px" } }}>
                Get a free academic counselling session with our experts
              </Typography>

              <form>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  placeholder="Enter your contact number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <select
                  value={sClass}
                  onChange={(e) => setSClass(e.target.value)}>
                  <option value="" disabled>
                    Select your Class
                  </option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                </select>
                <Link href="/payment">
                  <button type="submit">Book a free demo</button>
                </Link>
              </form>
            </Box>

            <div className={styles.right}>
              <img src="/animations/planet.gif" alt="Graphic" />
            </div>
          </Box>
        </Box>

        <Box
          sx={{
            display: {
              xs: "none",
              sm: "block",
              md: "none",
            },
            mt: 10,
            p: 4,
          }}>
          <Box className={styles.container}>
            <Box className={styles.left}>
              <Typography
                component="h2"
                sx={{
                  fontSize: { sm: "30px" },
                }}>
                Book your <span> Demo</span> Session
              </Typography>
              <Typography component="p" sx={{ fontSize: { sm: "20px" } }}>
                Get a free academic counselling session with our experts
              </Typography>

              <form>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  placeholder="Enter your contact number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <select
                  value={sClass}
                  onChange={(e) => setSClass(e.target.value)}>
                  <option value="" disabled>
                    Select your Class
                  </option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                </select>
                <Link href="/payment">
                  <button type="submit">Book a free demo</button>
                </Link>
              </form>
            </Box>

            <div className={styles.right}>
              <img src="/animations/planet.gif" alt="Graphic" />
            </div>
          </Box>
        </Box>

        <Box
          sx={{
            display: {
              xs: "block",
              sm: "none",
              md: "none",
            },
            mt: 4,
            p: 4,
          }}>
          <Box>
            <Box className={styles.left}>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: "24px" },
                  textAlign: "center",
                }}>
                Book your <span> Demo</span> Session
              </Typography>
              <div>
                <img
                  src="/animations/planet.gif"
                  alt="Graphic"
                  style={{
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <Typography component="p" sx={{ fontSize: { xs: "16px" } }}>
                Get a free academic counselling session with our experts
              </Typography>

              <form>
                <input
                  style={{
                    width: "100%",
                    padding: "18px",
                    fontSize: "14px",
                  }}
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  style={{
                    width: "100%",
                    padding: "18px",
                    fontSize: "14px",
                  }}
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  placeholder="Enter your contact number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <select
                  style={{
                    width: "100%",
                    padding: "18px",
                    fontSize: "14px",
                  }}
                  value={sClass}
                  onChange={(e) => setSClass(e.target.value)}>
                  <option value="" disabled>
                    Select your Class
                  </option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                </select>
                <Link href="/payment">
                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      padding: "18px",
                    fontSize: "18px"
                    }}>
                    Book a free demo
                  </button>
                </Link>
              </form>
            </Box>
          </Box>
        </Box>
      </>
    );
};

export default Demo;

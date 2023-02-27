import Link from "next/link";
import styles from "../../styles/cohort/Price.module.css";
import { getClassSuffix } from "../../utils/misc";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box"

const Price = ({ basic = {} }) => {
  return (
    <>
      <Box
        className={styles.main}
        sx={{ display: { xs: "none", md: "block" } }}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h2 style={{ fontSize: "48px" }}>
              Class {basic?.sClass}
              {getClassSuffix(basic?.sClass)} Cohort Course
            </h2>

            <p style={{ fontSize: "29px" }}>
              AnsrCoach is an Platfrom that will teach you in more interactive
              way
            </p>
          </div>

          <div className={styles.right}>
            <div className={styles.buttonGroup}>
              <button type="button" className={styles.primary}>
                Buy Course
              </button>
              <Link href="/payment">
                <button type="button" className={styles.secondary}>
                  Book a demo
                </button>
              </Link>
            </div>

            <p>
              ₹{parseInt(basic?.price - basic?.price * (basic?.offer / 100))}{" "}
              <span>₹{basic?.price}</span>
            </p>
          </div>
        </div>
      </Box>

      <Box
        className={styles.main}
        sx={{ display: { xs: "block", md: "none" } }}>
        <div
          style={{
            padding: "30px",
            background: "#1b2136",
            backdropFilter: "blur(12px)",
            borderRadius: "10px",
            marginTop: "-80px",
          }}>
          <div className={styles.left}>
            <h2 style={{ fontSize: "24px", textAlign: "center" }}>
              Class {basic?.sClass}
              {getClassSuffix(basic?.sClass)} Cohort Course
            </h2>

            <p
              style={{
                fontSize: "16px",
                textAlign: "center",
                marginTop: "20px",
              }}>
              AnsrCoach is an Platfrom that will teach you in more interactive
              way
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",

              marginTop: "20px",
            }}>
            <p className={styles.prices} style={{ textAlign: "center" }}>
              ₹{parseInt(basic?.price - basic?.price * (basic?.offer / 100))}{" "}
              <div>
                <p>
                  <span>₹{basic?.price}</span>
                </p>
              </div>
            </p>
          </div>
          <div className={styles.right}>
            <div
              className={styles.buttonGroup}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                marginTop: "20px",
              }}>
              <button
                type="button"
                style={{
                  borderRadius: "6px",
                  width: "80%",
                  padding: "10px 20px",
                  fontSize: "18px",
                  backgroundColor: "#ff242a",
                  color: "#fff",
                }}>
                Buy Course
              </button>
              <Link href="/payment">
                <button
                  type="button"
                  style={{
                    borderRadius: "6px",
                    width: "100%",
                    padding: "10px 20px",
                    fontSize: "18px",
                    backgroundColor: "transparent",
                    border: "1.5px solid #ff242a",
                    color: "#ff242a",
                  }}>
                  Book a demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Price;

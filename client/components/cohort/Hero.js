import Link from "next/link";
import styles from "../../styles/cohort/Hero.module.css";
import { getClassSuffix } from "../../utils/misc";
import { Box } from "@mui/material";
const Hero = ({ basic = {} }) => {
    return (
      <>
        <Box
          className={styles.main}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          <div className={styles.container}>
            <div className={styles.left}>
              <div className={styles.breadcrumb}>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    COHORT CLASS {basic?.sClass}
                    {getClassSuffix(basic?.sClass)}
                  </li>
                </ul>
              </div>

              <h1 style={{ fontSize: "75px" }}>
                Class {basic?.sClass}
                {getClassSuffix(basic?.sClass)} <span>Cohort</span> Course
              </h1>

              <p style={{ fontSize: "29px" }}>
                AnsrCoach is an Platfrom that will teach you in more interactive
                way
              </p>

              <div className={styles.features}>
                <div className={styles.feature}>
                  <img
                    src="/images/online_learning.webp"
                    alt="Online Learning"
                  />

                  <h3>9 months</h3>
                  <p>Full syllabus course</p>
                </div>

                <div className={styles.feature}>
                  <img src="/images/webinar.webp" alt="Webinar" />

                  <h3>Live + Recorded</h3>
                  <p>Classes</p>
                </div>

                <div className={styles.feature}>
                  <img src="/images/light_bulb.webp" alt="Light bulb" />

                  <h3>Unlimited Doubt</h3>
                  <p>Solvings</p>
                </div>

                <div className={styles.feature}>
                  <img src="/images/tax_free.webp" alt="Free" />

                  <h3>Exclusive Free</h3>
                  <p>Coding classes</p>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <img src="/images/astronaut.png" alt="Graphic" />
            </div>
          </div>
          <img
            className={styles.animation}
            src="/animations/solar_system.gif"
            alt="Animation"
          />
        </Box>

        <Box
          className={styles.main}
          sx={{ display: { xs: "none", sm: "block", md: "none" } }}>
          <div>
            <div className={styles.left}>
              <div className={styles.breadcrumb}>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    COHORT CLASS {basic?.sClass}
                    {getClassSuffix(basic?.sClass)}
                  </li>
                </ul>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "90px"
                }}>
                <div>
                  <h1
                    style={{
                      fontSize: "40px",
                      textAlign: "left",
                    }}>
                    Class {basic?.sClass}
                    {getClassSuffix(basic?.sClass)} <span>Cohort</span> Course
                  </h1>

                  <p
                    className={styles.smText}
                    style={{
                      fontSize: "25px",
                      textAlign: "left",
                      marginBottom: "60px",
                      color: "white",
                    }}>
                    AnsrCoach is an Platfrom that will teach you in more
                    interactive way
                  </p>
                </div>
                <div>
                  <img
                    src="/images/astronaut.png"
                    alt="Graphic"
                    style={{
                      width: "100%",
                      position: "relative",
                      zIndex: "10",
                     
                    }}
                  />
                </div>
              </div>

              <div className={styles.features} style={{
                marginTop: "30px"
              }}>
                <div
                  className={styles.featureMobile}
                  style={{ display: "flex" }}>
                  <img
                    src="/images/online_learning.webp"
                    alt="Online Learning"
                    style={{
                      background: "#252a3f",
                      border: "0.5px solid #ff242a",
                      borderRadius: "30px",
                      padding: "20px",
                      width: "100px",
                      height: "100px",
                    }}
                  />

                  <div style={{ marginLeft: "20px", marginTop: "20px" }}>
                    <h3>9 months</h3>
                    <p>Full syllabus course</p>
                  </div>
                </div>

                <div
                  className={styles.featureMobile}
                  style={{ display: "flex" }}>
                  <img
                    src="/images/webinar.webp"
                    alt="Webinar"
                    style={{
                      background: "#252a3f",
                      border: "0.5px solid #ff242a",
                      borderRadius: "30px",
                      padding: "20px",
                      width: "100px",
                      height: "100px",
                    }}
                  />

                  <div style={{ marginLeft: "20px", marginTop: "20px" }}>
                    <h3>Live + Recorded</h3>

                    <p>Classes</p>
                  </div>
                </div>

                <div
                  className={styles.featureMobile}
                  style={{ display: "flex" }}>
                  <img
                    src="/images/light_bulb.webp"
                    alt="Light bulb"
                    style={{
                      background: "#252a3f",
                      border: "0.5px solid #ff242a",
                      borderRadius: "30px",
                      padding: "20px",
                      width: "100px",
                      height: "100px",
                    }}
                  />

                  <div style={{ marginLeft: "20px", marginTop: "20px" }}>
                    <h3>Unlimited Doubt</h3>

                    <p>Solvings</p>
                  </div>
                </div>

                <div
                  className={styles.featureMobile}
                  style={{ display: "flex" }}>
                  <img
                    src="/images/tax_free.webp"
                    alt="Free"
                    style={{
                      background: "#252a3f",
                      border: "0.5px solid #ff242a",
                      borderRadius: "30px",
                      padding: "20px",
                      width: "100px",
                      height: "100px",
                    }}
                  />

                  <div style={{ marginLeft: "20px", marginTop: "20px" }}>
                    <h3>Exclusive Free</h3>
                    <p>Coding classes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>

        <Box
          className={styles.main}
          sx={{ display: { xs: "block", sm: "none", md: "none" } }}>
          <div>
            <div className={styles.left}>
              <div className={styles.breadcrumb}>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    COHORT CLASS {basic?.sClass}
                    {getClassSuffix(basic?.sClass)}
                  </li>
                </ul>
              </div>

              <h1
                style={{
                  fontSize: "24px",
                  textAlign: "center",
                }}>
                Class {basic?.sClass}
                {getClassSuffix(basic?.sClass)} <span>Cohort</span> Course
              </h1>

              <img
                src="/images/astronaut.png"
                alt="Graphic"
                style={{
                  width: "60%",
                  position: "relative",
                  zIndex: "10",
                  left: "4em",
                }}
              />

              <p
                style={{
                  fontSize: "18px",
                  textAlign: "center",
                  marginBottom: "60px",
                }}>
                AnsrCoach is an Platfrom that will teach you in more interactive
                way
              </p>

              <div className={styles.features}>
                <div
                  className={styles.featureMobile}
                  style={{ display: "flex" }}>
                  <img
                    src="/images/online_learning.webp"
                    alt="Online Learning"
                    style={{
                      background: "#252a3f",
                      border: "0.5px solid #ff242a",
                      borderRadius: "30px",
                      padding: "20px",
                      width: "100px",
                      height: "100px",
                    }}
                  />

                  <div style={{ marginLeft: "20px", marginTop: "20px" }}>
                    <h3>9 months</h3>
                    <p>Full syllabus course</p>
                  </div>
                </div>

                <div
                  className={styles.featureMobile}
                  style={{ display: "flex" }}>
                  <img
                    src="/images/webinar.webp"
                    alt="Webinar"
                    style={{
                      background: "#252a3f",
                      border: "0.5px solid #ff242a",
                      borderRadius: "30px",
                      padding: "20px",
                      width: "100px",
                      height: "100px",
                    }}
                  />

                  <div style={{ marginLeft: "20px", marginTop: "20px" }}>
                    <h3>Live + Recorded</h3>

                    <p>Classes</p>
                  </div>
                </div>

                <div
                  className={styles.featureMobile}
                  style={{ display: "flex" }}>
                  <img
                    src="/images/light_bulb.webp"
                    alt="Light bulb"
                    style={{
                      background: "#252a3f",
                      border: "0.5px solid #ff242a",
                      borderRadius: "30px",
                      padding: "20px",
                      width: "100px",
                      height: "100px",
                    }}
                  />

                  <div style={{ marginLeft: "20px", marginTop: "20px" }}>
                    <h3>Unlimited Doubt</h3>

                    <p>Solvings</p>
                  </div>
                </div>

                <div
                  className={styles.featureMobile}
                  style={{ display: "flex" }}>
                  <img
                    src="/images/tax_free.webp"
                    alt="Free"
                    style={{
                      background: "#252a3f",
                      border: "0.5px solid #ff242a",
                      borderRadius: "30px",
                      padding: "20px",
                      width: "100px",
                      height: "100px",
                    }}
                  />

                  <div style={{ marginLeft: "20px", marginTop: "20px" }}>
                    <h3>Exclusive Free</h3>
                    <p>Coding classes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </>
    );
};

export default Hero;

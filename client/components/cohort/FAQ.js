import styles from "../../styles/cohort/FAQ.module.css";
import FAQCard from "./FAQCard";
import Box from "@mui/material/Box";

const FAQ = ({ faqs = [] }) => {
    return (
      <>
        <Box
          className={styles.main}
          sx={{ display: { xs: "none", md: "block" } }}>
          <div className={styles.header}>
            <h2>
              Frequently Asked Questions <span>(FAQs)</span>
            </h2>
            <svg viewBox="0 0 569 18" fill="none">
              <path d="M15 7.5L0 0.339746L0 17.6603L15 10.5V7.5ZM13.5 10.5L569 10.5V7.5L13.5 7.5V10.5Z" />
            </svg>
          </div>

          <div className={styles.container}>
            <div className={styles.left}>
              <p>
                Having any questions in your mind? We almost cleared every
                doubts here feel free to read.
              </p>

              <img src="/animations/astronaut_using_laptop.gif" alt="Graphic" />
            </div>

            <div className={styles.right}>
              {faqs.map((faq, i) => (
                <FAQCard
                  key={i}
                  q={faq.question}
                  a={faq.answer}
                  show={i == 0}
                />
              ))}
            </div>
          </div>
        </Box>

        <Box
          sx={{
            display: { xs: "none",sm: "block", md: "none" },
            mt: 10,
          }}>
          <div className={styles.header}>
            <h2 style={{ fontSize: "28px", textAlign: "center" }}>
              Frequently Asked Questions <span>(FAQs)</span>
            </h2>
          </div>

          <div>
            <div className={styles.left}>
              <p
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  fontSize: "19px",
                }}>
                Having any questions in your mind? We almost cleared every
                doubts here feel free to read.
              </p>

              <img
                src="/animations/astronaut_using_laptop.gif"
                alt="Graphic"
                style={{
                  width: "40%",
                  position: "relative",
                  zIndex: "10",
                  left: "14em",
                }}
              />
            </div>

            <div className={styles.right}>
              {faqs.map((faq, i) => (
                <FAQCard
                  key={i}
                  q={faq.question}
                  a={faq.answer}
                  show={i == 0}
                />
              ))}
            </div>
          </div>
        </Box>

        <Box
          sx={{
            display: { xs: "block",sm: "none", md: "none" },
            mt: 10,
          }}>
          <div className={styles.header}>
            <h2 style={{ fontSize: "24px", textAlign: "center" }}>
              Frequently Asked Questions <span>(FAQs)</span>
            </h2>
          </div>

          <div>
            <div className={styles.left}>
              <p
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  fontSize: "16px",
                }}>
                Having any questions in your mind? We almost cleared every
                doubts here feel free to read.
              </p>

              <img
                src="/animations/astronaut_using_laptop.gif"
                alt="Graphic"
                style={{
                  width: "50%",
                  position: "relative",
                  zIndex: "10",
                  left: "6em",
                }}
              />
            </div>

            <div className={styles.right}>
              {faqs.map((faq, i) => (
                <FAQCard
                  key={i}
                  q={faq.question}
                  a={faq.answer}
                  show={i == 0}
                />
              ))}
            </div>
          </div>
        </Box>
      </>
    );
};

export default FAQ;

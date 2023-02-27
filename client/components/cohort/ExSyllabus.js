import styles from "../../styles/cohort/ExSyllabus.module.css";
import { Box } from "@mui/material";

const ExSyllabus = ({ subjects = [], topics = [] }) => {
    return (
      <>
        <Box
          className={styles.main}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          <div className={styles.container}>
            <div className={styles.header}>
              <h2>Our Exclusive Course Curriculum</h2>
              <svg viewBox="0 0 569 18" fill="none">
                <path d="M15 7.5L0 0.339746L0 17.6603L15 10.5V7.5ZM13.5 10.5L569 10.5V7.5L13.5 7.5V10.5Z" />
              </svg>
            </div>

            <div className={styles.cards}>
              {subjects.map((subject) =>
                subject.exclusive ? (
                  <div
                    className={styles.card}
                    key={subject._id}
                    style={{
                      backgroundColor: subject.backgroundColor,
                    }}>
                    <div className={styles.left}>
                      <h3 style={{ color: subject.color }}>{subject.name}</h3>

                      <ul>
                        {topics.map((topic, i) =>
                          topic.subjectId == subject._id ? (
                            <li key={i}>{topic.name}</li>
                          ) : (
                            <></>
                          )
                        )}
                      </ul>
                    </div>
                    <div className={styles.right}>
                      <img src={subject.image} alt="Graphic" />
                    </div>
                  </div>
                ) : (
                  <>{subject.exclusive}</>
                )
              )}
            </div>
          </div>

          <img
            className={styles.animation}
            src="/animations/astronaut_on_rocket.gif"
            alt="rocket"
          />
        </Box>

        <Box
          className={styles.main}
          sx={{ display: { xs: "none", sm: "block", md: "none" } }}>
          <div className={styles.container}>
            <div className={styles.header}>
              <h2 style={{fontSize: "30px"}}>Our Exclusive Course Curriculum</h2>
              <svg viewBox="0 0 569 18" fill="none">
                <path d="M15 7.5L0 0.339746L0 17.6603L15 10.5V7.5ZM13.5 10.5L569 10.5V7.5L13.5 7.5V10.5Z" />
              </svg>
            </div>

            <div className={styles.cards} style={{marginTop: "100px"}}>
              {subjects.map((subject) =>
                subject.exclusive ? (
                  <div
                    className={styles.card}
                    key={subject._id}
                    style={{
                      backgroundColor: subject.backgroundColor,
                    }}>
                    <div className={styles.left}>
                      <h3 style={{ color: subject.color }}>{subject.name}</h3>

                      <ul>
                        {topics.map((topic, i) =>
                          topic.subjectId == subject._id ? (
                            <li key={i}>{topic.name}</li>
                          ) : (
                            <></>
                          )
                        )}
                      </ul>
                    </div>
                    <div className={styles.right}>
                      <img src={subject.image} alt="Graphic" />
                    </div>
                  </div>
                ) : (
                  <>{subject.exclusive}</>
                )
              )}
            </div>
          </div>

          <img
            className={styles.animation}
            style={
              {
                width: "50%", 
                zIndex: "10", 
                marginRight: "50px"
            }
            }
            src="/animations/astronaut_on_rocket.gif"
            alt="rocket"
          />
        </Box>

        <Box
          sx={{
            display: { xs: "block", sm: "none", md: "none" },
            marginTop: "25px",
            padding: "20px",
          }}>
          <div className={styles.container}>
            <div className={styles.header}>
              <h2 style={{ fontSize: "24px", textAlign: "center" }}>
                Our Exclusive Course Curriculum
              </h2>
            </div>

            <img
              style={{
                width: "70%",
                position: "relative",
                zIndex: "10",
                left: "3em",
                top: "-1em",
              }}
              src="/animations/astronaut_on_rocket.gif"
              alt="rocket"
            />

            <div
              style={{
                marginTop: "-30px",
                maxWidth: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}>
              {subjects.map((subject) =>
                subject.exclusive ? (
                  <div
                    className={styles.card}
                    key={subject._id}
                    style={{
                      backgroundColor: subject.backgroundColor,
                    }}>
                    <div className={styles.left}>
                      <h3
                        style={{
                          color: subject.color,
                          fontSize: "24px",
                          textAlign: "center",
                        }}>
                        {subject.name}
                      </h3>
                      <img
                        src={subject.image}
                        alt="Graphic"
                        style={{ width: "100%", objectFit: "contain" }}
                      />

                      <ul>
                        {topics.map((topic, i) =>
                          topic.subjectId == subject._id ? (
                            <li key={i}>{topic.name}</li>
                          ) : (
                            <></>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <>{subject.exclusive}</>
                )
              )}
            </div>
          </div>
        </Box>
      </>
    );
};

export default ExSyllabus;

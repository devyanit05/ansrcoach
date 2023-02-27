import styles from "../../styles/cohort/Syllabus.module.css";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box"

const Syllabus = ({ subjects = [], topics = [] }) => {
    const [boards, setBoards] = useState([]);
    const [selectedBoard, setSelectedBoard] = useState("");

    useEffect(() => {
        if (subjects.length) {
            const temp = [];

            subjects.forEach((subject) => {
                if (subject.board && !temp.includes(subject.board))
                    temp.push(subject.board);
            });

            setBoards(temp);
            if (temp.length > 0) {
                setSelectedBoard(temp[0]);
            }
        }
    }, [subjects]);

    return (
      <>
        <Box
          className={styles.main}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          <div className={styles.container}>
            <h2>Course Curriculum</h2>

            <select
              value={selectedBoard}
              onChange={(e) => setSelectedBoard(e.target.value)}>
              {boards.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>

            <div className={styles.cards}>
              {subjects.map((subject) =>
                subject?.board == selectedBoard ? (
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

                      <button type="button" style={{ color: subject.color }}>
                        view more
                      </button>
                    </div>
                    <div className={styles.right}>
                      <img src={subject.image} alt="Graphic" />
                    </div>
                  </div>
                ) : (
                  <></>
                )
              )}
            </div>
          </div>
        </Box>

        <Box
          className={styles.main}
          sx={{ display: { xs: "none", sm: "block", md: "none" } }}>
          <div className={styles.container}>
            <h2 style={{fontSize: "30px"}}>Course Curriculum</h2>

            <select
              value={selectedBoard}
              onChange={(e) => setSelectedBoard(e.target.value)}>
              {boards.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>

            <div className={styles.cards}>
              {subjects.map((subject) =>
                subject?.board == selectedBoard ? (
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

                      <button type="button" style={{ color: subject.color }}>
                        view more
                      </button>
                    </div>
                    <div className={styles.right}>
                      <img src={subject.image} alt="Graphic" />
                    </div>
                  </div>
                ) : (
                  <></>
                )
              )}
            </div>
          </div>
        </Box>

        <Box
          className={styles.main}
          sx={{ display: { xs: "block", sm: "none", md: "none" } }}>
          <div className={styles.container}>
            <h2
              style={{
                fontSize: "24px",
                textAlign: "center",
              }}>
              Course Curriculum
            </h2>

            <select
              style={{ width: "80%", marginLeft: "35px" }}
              value={selectedBoard}
              onChange={(e) => setSelectedBoard(e.target.value)}>
              {boards.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>

            <div>
              {subjects.map((subject) =>
                subject?.board == selectedBoard ? (
                  <div
                    className={styles.card}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: subject.backgroundColor,
                      gap: "30px",
                      marginTop: "30px",
                    }}
                    key={subject._id}>
                    <div className={styles.left}>
                      <h3
                        style={{
                          color: subject.color,
                          fontSize: "24px",
                          textAlign: "center",
                        }}>
                        {subject.name}
                      </h3>

                      <div style={{ width: "100%", objectFit: "contain" }}>
                        <img
                          src={subject.image}
                          alt="Graphic"
                          style={{
                            width: "60%",
                            position: "relative",
                            zIndex: "10",
                            left: "3em",
                            top: "-1em",
                          }}
                        />
                      </div>
                      <ul style={{ fontSize: "17px" }}>
                        {topics.map((topic, i) =>
                          topic.subjectId == subject._id ? (
                            <li key={i}>{topic.name}</li>
                          ) : (
                            <></>
                          )
                        )}
                      </ul>

                      <button type="button" style={{ color: subject.color }}>
                        view more
                      </button>
                    </div>
                  </div>
                ) : (
                  <></>
                )
              )}
            </div>
          </div>
        </Box>
      </>
    );
};

export default Syllabus;

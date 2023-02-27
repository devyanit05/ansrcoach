import styles from "../../styles/home/Testinomial.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from "@mui/material/Box";

const Testinomial = ({ testinomials = [] }) => {
  const responsive = {
    any: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  const ButtonGroup = ({ next, previous }) => {
    return (
      <div className={styles.carouselButtons}>
        <button onClick={() => previous()}>
          <svg viewBox="0 0 50 50">
            <g>
              <polygon points="37.561,47.293 15.267,25 37.561,2.707 36.146,1.293 12.439,25 36.146,48.707  " />
            </g>
          </svg>
        </button>
        <button onClick={() => next()}>
          <svg viewBox="0 0 50 50">
            <g>
              <polygon points="13.854,48.707 37.561,25 13.854,1.293 12.439,2.707 34.732,25 12.439,47.293  " />
            </g>
          </svg>
        </button>
      </div>
    );
  };

  return (
    <>
      <Box
        className={styles.main}
        sx={{ display: { xs: "none", sm: "none", md: "block" } }}
      >
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p>Testinomials</p>
            <h2>What are our customers saying!</h2>
            <img src="/animations/astronaut_on_rocket.gif"></img>
          </div>

          <Carousel
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            deviceType="any"
            customButtonGroup={<ButtonGroup />}
            arrows={false}
          >
            {testinomials.map((t, i) => (
              <div key={i} className={styles.right}>
                <img
                  src="/images/inverted.png"
                  alt="quotes"
                  style={{
                    width: "25px",
                    position: "relative",
                    top: "50px",
                    left: "40px",
                  }}
                ></img>
                <p>{t.testinomial}</p>
                <h4>{t.name}</h4>
                <h3>{t.highlight}</h3>
                <img
                  src={t.image}
                  className={styles.testinomialImage}
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "45px",
                    position: "relative",
                    top: "3em",
                    left: "22em",
                  }}
                ></img>
              </div>
            ))}
          </Carousel>
        </div>
      </Box>

      <Box
        sx={{
          display: { xs: "none", sm: "block", md: "none" },
          padding: "none",
          marginTop: "20px",
        }}
      >
        <div className={styles.container}>
          <div
            className={styles.left}
            style={{ height: "18vh", padding: "20px" }}
          >
            <div>
              <p style={{ fontSize: "20px" }}>Testinomials</p>
              <h2
                style={{
                  fontSize: "29px",
                }}
              >
                What our customers are saying!
              </h2>
            </div>
            <div style={{ width: "70%", left: "14em", position: "relative" }}>
              <img src="/animations/astronaut_on_rocket.gif"></img>
            </div>
          </div>

          <Carousel
            className={styles.smSlide}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            deviceType="any"
            customButtonGroup={<ButtonGroup />}
            arrows={false}
          >
            {testinomials.map((t, i) => (
              <div key={i} className={styles.right} style={{ height: "50vh" }}>
                <img
                  src="/images/inverted.png"
                  alt="quotes"
                  style={{
                    width: "15px",
                    position: "relative",
                    top: "50px",
                    left: "40px",
                  }}
                ></img>
                <p style={{ fontSize: "24px" }}>{t.testinomial}</p>
                <h4>{t.name}</h4>
                <h3>{t.highlight}</h3>
                <img
                  src={t.image}
                  className={styles.testinomialImage}
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "45px",
                    position: "relative",
                    top: "3em",
                    left: "22em",
                  }}
                ></img>
              </div>
            ))}
          </Carousel>
        </div>
      </Box>

      <Box
        sx={{
          display: { xs: "block", sm: "none", md: "none" },
          padding: "none",
          marginTop: "20px",
        }}
      >
        <div className={styles.container}>
          <div className={styles.left}>
            <div>
              <p>Testinomials</p>
              <h2>What our customers are saying!</h2>
            </div>
            <div
              style={{
                zIndex: "10",
                marginRight: "20px",
              }}
            >
              <img src="/animations/astronaut_on_rocket.gif"></img>
            </div>
          </div>

          <Carousel
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            deviceType="any"
            customButtonGroup={<ButtonGroup />}
            arrows={false}
          >
            {testinomials.map((t, i) => (
              <div key={i} className={styles.right}>
                <img
                  src="/images/inverted.png"
                  alt="quotes"
                  style={{
                    width: "15px",
                    position: "relative",
                    top: "50px",
                    left: "40px",
                  }}
                ></img>
                <p>{t.testinomial}</p>
                <h4>{t.name}</h4>
                <h3>{t.highlight}</h3>
                <img
                  src={t.image}
                  className={styles.testinomialImage}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "45px",
                    position: "relative",
                    top: "3em",
                    left: "10.5em",
                  }}
                ></img>
              </div>
            ))}
          </Carousel>
        </div>
      </Box>
    </>
  );
};

export default Testinomial;

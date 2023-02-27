import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import styles from "../styles/Contact.module.css";
import {ContactApi} from "../services/api";
import React, {useState} from "react"

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {
  const [name , setName] = useState("")
  const [email , setemail] = useState("")
  const [text , settext] = useState("")

  const [open, setOpen] = React.useState(false);

 

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    setOpen(true);
 
    let   messages =  {
        Name : name  ,
        Email : email ,
        Text  : text
   } 
   await ContactApi(
      messages
    );
};


  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.main}>
          <div>
            <h3>
              Get in <span style={{ color: "#FF242A" }}>Touch</span>
            </h3>
            <p>We are here for you! how can we help?</p>
            <div className={styles.formSection}>
              <input placeholder="Enter your name"
               value={name}
               onChange={(e) => setName(e.target.value)}></input>
              <input placeholder="Enter your email address"
               value={email}
               onChange={(e) => setemail(e.target.value)}></input>
              <input
                placeholder="Go ahead we are listening..."
                              style={{ height: "21vh" }} value={text}
                              onChange={(e) => settext(e.target.value)}
                              ></input>
                          <p style={{
                              marginTop: "-1em",
                              color: "#898989", 
                            
                          }}>max upto 250 words</p>
            </div>
            <Button variant="outlined" onClick={handleClick}>
            Submit
           </Button>
            
          </div>
          <div className={styles.imageSection}>
            <img src="/animations/star.png" className={styles.animation}></img>
            <div className={styles.infoSection}>
              <p>
                <img src="/images/location.png" />
                415627,bxbjjzxzj,Kanpur
              </p>
              <p>
                <img src="/images/message.png" />
                letuslearn@ansrcoach.com
              </p>
              <p>
                <img src="/images/phone.png" />
                +91-6283698964
              </p>
            </div>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          <h3>Your message has been sent successfully!</h3>
        </Alert>
      </Snackbar>
      <Footer />
    </div>
  );
}

export default Contact

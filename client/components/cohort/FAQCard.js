import styles from "../../styles/cohort/FAQCard.module.css";
import { useState } from "react";
import { Box, Typography } from "@mui/material";

const FAQCard = ({ q = "", a = "", show = false }) => {
    const [expanded, setExpanded] = useState(show);

    return (
        <>
            <Box className={styles.main} >
                <div className={styles.container}>
                    <div className={styles.header}>
                        <Typography component="h3" sx={{fontSize: {xs: "20px", md: "28px"}}}>{q}</Typography>
                        <div
                            className={styles.expand_button}
                            onClick={() => {
                                setExpanded(!expanded);
                            }}
                        >
                            {expanded ? (
                                <svg viewBox="0 0 26 7" fill="none">
                                    <rect width="26" height="7" rx="3.5" />
                                </svg>
                            ) : (
                                <svg viewBox="0 0 26 26" fill="none">
                                    <rect
                                        y="9"
                                        width="26"
                                        height="7"
                                        rx="3.5"
                                    />
                                    <rect
                                        x="9"
                                        y="26"
                                        width="26"
                                        height="7"
                                        rx="3.5"
                                        transform="rotate(-90 9 26)"
                                    />
                                </svg>
                            )}
                        </div>
                    </div>

                    <Typography sx={{
                        fontSize: {xs: "18px", md: "28px"}
                    }} className={expanded ? styles.show : styles.hide}>{a}</Typography>
                </div>
            </Box>
        </>
    );
};

export default FAQCard;

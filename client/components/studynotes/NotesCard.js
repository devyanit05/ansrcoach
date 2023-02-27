import styles from "../../styles/studynotes/NotesCard.module.css";

const NotesCard = ({
    color,
    backgroundColor,
    title,
    description,
    icon1,
}) => {
    return (
        <>
            <div className={styles.main} style={{ backgroundColor }}>
             
                <img className={styles.icon1} src={icon1} alt="Icon" />
                <div className={styles.container}>
                    <h4 style={{color: color}}>{title}</h4>
                    <ul>{description.map((item) => {
                        return (
                          
                            <li key={item}>{item}</li>
                       
                        );
                    })}</ul>
            
                </div>
            </div>
        </>
    );
};

export default NotesCard;

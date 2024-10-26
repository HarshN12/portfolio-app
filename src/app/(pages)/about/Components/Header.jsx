import styles from './Header.module.css'; 

const clg_img = '/assets/clg_img.jpeg';
const profile_pic = '/assets/professer_pic.jpg';

function Header() {
    return (
        <div className={styles.header} style={{backgroundImage: `url(${clg_img})`}}>
            <div className={styles.intro}>
                <div className={styles.pimg}>
                    <img className={styles.profile} src={profile_pic} width="200px" alt="Profile"/>
                </div>
                <div className={styles.sir_name}>
                    <h1>Dr. Yogesh Madhukarrao Nimdeo</h1>
                    <h2>Assistant Professor{/*<br/>HOD of Chemical Engineering Department<br/>At IIT Jammu*/}</h2>
                </div>
            </div>
        </div>
    );
}

export default Header;

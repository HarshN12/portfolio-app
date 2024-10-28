import styles from './Header.module.css'


const clg_img = '/assets/clg_img.jpeg';

function Header({ backgroundImage = clg_img , title = 'title', height = '35dvh'}) {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        height: height,
    };

    if (height !== '35dvh') {
        backgroundStyle.height += ' !important';
    }

    return (
        <div className={styles['head']}>
            <div className={styles['head-background']} style={backgroundStyle}></div>
            <h1>{title}</h1>
        </div>
    );

}

export default Header;

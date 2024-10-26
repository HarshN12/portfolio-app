import React from 'react';
import default_img from '../../../assets/unknownman.png';
import styles from './InfoCard.module.css'

function InfoCard({ profileimg = default_img, name = 'unknown', ResearchArea = 'this is default card' ,department = 'department' }) {
    return (
        <div className={styles["container"]}>
            <div className={styles["card"]}>
                <img src={profileimg} style={{ height: '100%' }} alt="Profile" />

                <div className={styles["card-body"]}>
                    <div className={styles["card-text"]}>
                        <h3>{name}</h3>
                        <p>
                            <br/>
                            {department}
                            <br/>

                            <b>RESEARCH AREA :</b>
                            <br/>
                            {ResearchArea}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoCard;

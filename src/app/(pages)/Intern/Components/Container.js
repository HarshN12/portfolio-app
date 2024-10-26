import React from 'react';
import styles from './Container.module.css'; 

function Container() {
  return (
    <div className={styles['container']}>
        <h2>INTERN</h2>
        <div className={styles['description']}>
            <ul>
                <li><b>Name: Abhay Savdekar</b> <br></br>
                    <b>Institute</b> : University Institute of Chemical Technology, KBC North Maharashtra University<br></br>
                    <b>Research Area</b> : Worked on Design and Development of Fuel Cell <br></br>
                </li>
            </ul>
            <ul>
                <li><b>Name: Renuka Gohil</b><br></br>
                    <b>Institute</b> : University Institute of Chemical Technology, KBC North Maharashtra University
                    <br></br>
                    <b>Research Area</b> : Worked on Optimization and Formulation of Stable Oil in Water Pickering
                    Emulsion for Food Grade Application. <br></br>
                </li>
            </ul>
            <ul>
                <li><b>Name: Awab</b><br></br>
                    <b>Institute</b> : Andhra University <br></br>
                    <b>Research Area</b> : Worked on Design and Development of Fuel Cell <br></br>
                </li>
            </ul>
            <ul>
                <li><b>Name: Afra</b><br></br>
                    <b>Institute</b> : Andhra University <br></br>
                    <b>Research Area</b> : Worked on Optimization and Formulation of Stable Oil in Water Pickering
                    Emulsion for Drug Delivery Application <br></br>
                </li>
            </ul>
            <ul>
                <li><b>Name: Saurabh Talwekar</b><br></br>
                    <b>Institute</b> : University Institute of Chemical Technology, KBC North Maharashtra University <br></br>
                    <b>Research Area</b> :Worked on Synthesis of New Generation Fertilizer Microsphere. <br></br>
                </li>
            </ul>
            <br></br>
        </div>
  </div>
  );
}

export default Container;

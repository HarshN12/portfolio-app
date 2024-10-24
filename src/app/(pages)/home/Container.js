import styles from './Container.module.css'; 

function Container() {
  return (
    <div className={styles['ctr-1']}>
      <h2 className={styles['quote']}>‘‘Like a master chef in the kitchen of molecules, chemical engineers concoct recipes for
        progress, blending elements with precision to create a world of infinite possibilities.’’</h2>
      <div className={styles['Research']}>
        <h2>Message</h2>
        <h4>The Department of Chemical Engineering was established in 2018 with the intake of the first undergraduate batch.
          Since then the department has grown to the first batch graduating in 2021. In 2019 the first two faculty joined the
          department as a Visiting Professor and Assistant Professor and the department started functioning. An amalgams blend of
          experience and energy the department has grown from humble beginnings to sore new heights.</h4>
        <h2>Researches Interest :</h2>
        <ul>
          <li>Non-continuum energy and mass diffusion studies.</li>
          <li>Physical behavior and dynamics of glass, gel, and sol forming colloidal suspensions.</li>
          <li>Development of optical techniques for engineering and bio-medical applications.</li>
          <li>Applications of optical sensing techniques for transport phenomena studies.</li>
          <li>Design, optimization, and intensification of separation techniques.</li>
        </ul>
        <h2>Honors and Achievements :</h2>
        <ul>
          <li>2023: Member of Canadian Society for Chemical Engineering (Membership ID: 38995)</li>
          <li>2023: Received CRG-SERB Project in Chemical Engineering domain</li>
          <li>2022: Life time membership of IIChE (Membership ID: M-73270).</li>
          <li>2020: Permanent pay scale awarded from MHRD Govt. of India for the post of Assistant Professor Grade
            -I, Chemical Engineering Department, IIT Jammu, J & K, India.</li>
          <li>2018: Overseas Travel Grant awarded from SERB, Govt. of India.</li>
          <li>2016: Institute Postdoc Fellowship awarded from IIT Bombay, Mumbai, India.</li>
          <li>2016: National Postdoc Fellowship awarded from SERB, Govt. of India.</li>
          <li>2015: Selected within 25 Indian students to attend fully sponsored Indo-Canadian program of
            IC-IMPACTS 2015 Summer Institute in Optical Sensing at Toronto University, Canada</li>
          <li>2014-2015: Two cash awards for Journal Publications, from DRPG, IIT Kanpur, India</li>
          <li>2014: Best poster presentation award on Research Scholar Day of Chem. Engg. Dept. at IIT Kanpur,
            India</li>
          <li>2012: ‘Young Scientist Research Scholar’ award in SERC School and Sixth National Symposium on
            Rheology of Complex Fluids (CompFlu-2012), at IIT Guwahati, Assam, India.</li>
          <li>2010: Fellowship awarded from MHRD as well as Department of Biotechnology, Govt. of India, for Ph.D.
            in Chemical Engineering at IIT Kanpur and ICT Mumbai, India (Availed of IIT-Kanpur only).</li>
          <li>2010: Qualified IELTS in June-2010 with an overall band score of 6.5/10.</li>
          <li>2009: Permanent pay scale awarded from University Grant Commission for the post of Assistant
            Professor at Gharda Institute of Technology, Lavel, Chiplun, MS, India.</li>
          <li>2007: GATE Scholarship, from MHRD, Govt. of India, during M. Chem. Engg.</li>
          <li>2007: Qualified GATE 2007 with 92 percentile.</li>
          <li>2007: Medal awarded for the first position in an undergraduate program at COET Akola, MS, India.
          </li>
          <li>2006: Elected as the general secretary of the Department of Chemical Engineering at COET Akola,
            India.</li>
          <li>2006: Second prize in an oral presentation at National Symposium on Polymer Technology, Gwalior,
            India</li>
          <li>2006: Third prize in National level Quiz Competition at Gwalior, India.</li>
        </ul>
      </div>
    </div>
  );
};

export default Container;

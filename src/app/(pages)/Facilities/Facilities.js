import React from 'react';
import header_bkimg from '../../assets/facilities.jpg'
import Header from '../../components/Header'
import LabEq from './Components/LabEq';

function Facilities() {
    return (
        <>
        <Header title='Facilities' backgroundImage={header_bkimg} />
        <br></br>
        <LabEq />
        </>
    );
}

export default Facilities
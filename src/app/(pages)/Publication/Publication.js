import React from "react";
import Container from "./Components/Container";
import header_bkimg from '../../assets/publication.jpg';
import Header from '../../components/Header';
// import styles from "./Publication.module.css";

function Publication() {
    return(
        <>
        <Header title='Publication' backgroundImage={header_bkimg} />
        <br></br>
        <Container/>
        </>
    )
}
export default Publication;
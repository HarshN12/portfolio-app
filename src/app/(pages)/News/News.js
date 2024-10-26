import React from "react";
import BlogsSection from "./Components/BlogsSection";
import ScrollContainer from "./Components/ScrollContainer";
import Header from "../../components/Header";

function News(){
    return(
        <>
        <Header title="News"/>
        <ScrollContainer />
        <BlogsSection/>
        </>
    )
}

export default News;
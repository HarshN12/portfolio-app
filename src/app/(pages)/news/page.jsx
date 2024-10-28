import React from "react";
import BlogsSection from "./BlogsSection";
import ScrollContainer from "./ScrollContainer";
import Header from "@/components/Header";

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
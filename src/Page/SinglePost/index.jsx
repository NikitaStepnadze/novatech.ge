import React from "react";
import BannerInnerSection from "../../Components/Banner/Inner";
import BlogPostSection from "../../Components/Blog/SinglePost";

function SinglePostPage(){
    return(
        <>
            <BannerInnerSection title="რატომ სჭირდება ბიზნესს ვებსაიტი?" currentPage="სტატია" />
            <BlogPostSection />

        </>
    );
}

export default SinglePostPage;
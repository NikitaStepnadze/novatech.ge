import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import BlogPostSection from "../../Components/Blog/SinglePost";

function SinglePostPage(){
    return(
        <>
            <HeadTitle title="სტატია - NOVATECH - ვებსაიტების დამზადება" />
            <BannerInnerSection title="როგორ განვავითაროთ ბიზნესი ონლაინ" currentPage="სტატია" />
            <BlogPostSection />

        </>
    );
}

export default SinglePostPage;
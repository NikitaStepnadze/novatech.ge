import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import BlogSection from "../../Components/Blog/blog";

function BlogPage(){
    return(
        <>
            <HeadTitle title="ბლოგი - NOVATECH - ვებსაიტების დამზადება" />
            <BannerInnerSection title="ჩვენი ბლოგი" currentPage="ბლოგი" />
            <BlogSection />            
        </>
    );
}

export default BlogPage;
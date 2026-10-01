import React from "react";
import BannerInnerSection from "../../Components/Banner/Inner";
import BlogSection from "../../Components/Blog/blog";

function BlogPage(){
    return(
        <>
            <BannerInnerSection title="ჩვენი ბლოგი" currentPage="ბლოგი" />
            <BlogSection />            
        </>
    );
}

export default BlogPage;
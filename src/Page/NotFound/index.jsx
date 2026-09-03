import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import NotFoundSection from "../../Components/NotFound/notfound";

function NotFoundPage(){
    return(
        <>
            <HeadTitle title="შეცდომა 404 - NOVATECH - ვებსაიტების დამზადება" />
            <NotFoundSection />
        </>
    );
}

export default NotFoundPage;
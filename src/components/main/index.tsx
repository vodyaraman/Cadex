import React from "react";
import ImportantSection from "./ImportantSection";
import MainSection from "./MainSection";
import LessImportantSection from "./LessImportantSection";


const MainBody: React.FC = () => {
    return (
        <>
            <MainSection />
            <ImportantSection />
            <LessImportantSection />
        </>
    );
};

export default MainBody;
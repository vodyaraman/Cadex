import React, {type ReactNode} from "react";
import Footer from "./Footer";
import Header from "./Header";

interface PageLayoutProps {
    children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default PageLayout;

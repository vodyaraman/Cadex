import React, { type ReactNode } from "react";
import { Footer, Header } from "../components/common";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../styles/index.css"

interface PageLayoutProps {
    children: ReactNode;
}

// Создаем тему для использования в приложении
const theme = createTheme({
    palette: {
        primary: {
            main: '#fff', // Основной цвет темы
        },
        secondary: {
            main: '#dc004e', // Вспомогательный цвет
        },
    },
});

const BodyLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <main>
                <Header />
                {children}
                <Footer />
            </main>
        </ThemeProvider>
    );
};

export default BodyLayout;

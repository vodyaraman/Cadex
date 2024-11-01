import React, { useState } from "react";
import CTAForm from "./CTAForm";
import CTAFormAfterResponse from "./CTAFormAfterResponse";
import LoadingScreen from "../common/LoadingScreen";

const PageLayout: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [responseReceived, setResponseReceived] = useState(false);
    const [responseData, setResponseData] = useState<string>("");

    const handleFormSubmit = async (data: { name: string; email: string; message: string }) => {
        setIsLoading(true);
        try {
            const response = await fetch('https://functions.yandexcloud.net/d4ek3s602gt27bgftts5', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: data.name }),
            });
            const result = await response.json();
            setResponseData(result.message);
            setResponseReceived(true);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <LoadingScreen />;
    }

    if (responseReceived) {
        return <CTAFormAfterResponse message={responseData} />;
    }

    return <CTAForm onSubmit={handleFormSubmit} />;
};

export default PageLayout;

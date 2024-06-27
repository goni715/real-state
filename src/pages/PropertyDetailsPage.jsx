import Header from "../components/Header.jsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import PropertyDetails from "../components/PropertyDetails.jsx";

const PropertyDetailsPage = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
    }, [pathname]);
    return (
        <>
            <div className="max-w-[1440px] mx-auto bg-white">
                <Header/>
                <div className="min-h-[1800px]">
                    <PropertyDetails/>
                </div>
            </div>
        </>
    );
};

export default PropertyDetailsPage;
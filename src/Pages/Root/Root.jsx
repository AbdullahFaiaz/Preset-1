import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import { createContext } from "react";

export const InfoContext = createContext("")

const Root = () => {
    return (
        <div>
            <InfoContext.Provider value="context">
                <Header></Header>
                <Outlet></Outlet>
            </InfoContext.Provider>
        </div>
    );
};

export default Root;
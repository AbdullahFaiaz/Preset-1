import { useContext } from "react";
import { InfoContext } from "../Root/Root";



const Page1 = () => {
    const take = useContext(InfoContext)
    return (
        <div>
            Page-1 {take}
        </div>
    );
};

export default Page1;
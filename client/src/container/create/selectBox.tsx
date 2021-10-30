import Teamboard from "./teamboard";
import { useState } from "react";
import SelectComponent from "../../component/create/selectComponent"

interface ChangeValue {
    target: {
        value: string;
    };
}

const SelectBox = () => {
    const [selectContent, setSelectContent] = useState("todo")
    
    const getSelectValue = (e: ChangeValue) => {
        const tmp = e.target.value
        console.log(tmp)
        setSelectContent(tmp)
    }
    return (
        <>
            <Teamboard category={selectContent}></Teamboard>
            <SelectComponent select={getSelectValue}></SelectComponent>
        </>
    );
};
export default SelectBox;

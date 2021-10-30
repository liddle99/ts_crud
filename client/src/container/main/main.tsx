import { useEffect, useState } from "react";
import Axios from "axios";
import { Content, IProps } from "../../interface/Content";
import MainComponent from "../../component/main/main";
import CategoryButton from "../../component/main/categoryButton";
import ContentView from "../../component/main/contentView";

const Main = () => {
    const [readContent, setReadContent] = useState<Content[]>([]);
    const [viewContent, setViewContent] = useState<Content[]>([]);
    useEffect(() => {
        Axios.get("http://localhost:5000/api/read").then((response: IProps) => {
            const tmp: Content[] = readContent.concat(response.data);
            setReadContent(tmp);
            setViewContent(tmp);
        });
    }, []);

    const handleCategory = (e: any) => {
        const { value } = e.target;
        setViewContent(
            readContent.filter((element) => element.category === value)
        );
        console.log(readContent);
    };

    return (
        <div>
            <MainComponent />
            <CategoryButton handleClick={handleCategory} />
            <ContentView value={viewContent} />
        </div>
    );
};

export default Main;

import { useEffect, useState } from "react";
import Axios from "axios";
import { Content, IProps } from "../../interface/Content";
import MainComponent from "../../component/main/main";
import CategoryButton from "../../component/main/categoryButton";
import ContentView from "../../component/main/contentView";

const Main = () => {
    const [readContent, setReadContent] = useState<Content[]>([]);
    const [viewContent, setViewContent] = useState<Content[]>([]);
    const token: string | null = localStorage.getItem("accessToken");

    useEffect(() => {
        const test = async () => {
            if (token === null) {
                return await false;
            }
            Axios.get("http://localhost:5000/api/read", {
                headers: {
                    token: token,
                },
            }).then((response: IProps) => {
                const tmp: Content[] = readContent.concat(response.data);
                setReadContent(tmp);
                setViewContent(tmp);
            });
        };
        test();
    }, [token]);

    const handleCategory = (value: string) => {
        setViewContent(
            readContent.filter((element) => element.category === value)
        );
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

import "./dashboard.css"
import { useState } from "react";
import Accordian from "./Accordiaon";

const Dashboard = () => {
    const [activeElemId,setActiveElemId] = useState();
    const [isActive, setisActive] = useState(false);

    const accordionInfo = [{title:"accordian one",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deleniti minima nostrum quidemaxime sapiente magni sint voluptas voluptatum excepturi dolorum fugit eaque, rerum accusantium,porro at quod ipsa asperiores!"},{title:"accordian two",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deleniti minima nostrum quidemaxime sapiente magni sint voluptas voluptatum excepturi dolorum fugit eaque, rerum accusantium,porro at quod ipsa asperiores!"}];

    function handleChange(id){
        if(id !== activeElemId){
            setisActive(true);
        }else{
            setisActive((current) => !current);
        }
        setActiveElemId(id);
    }
    return (
        <>
            <h2>dashboard</h2>
            {accordionInfo.map(({title,content},index) => <Accordian changeActiveElem={handleChange} activeElem={activeElemId} isActive={isActive} id={index} key={index} title={title} content={content}/>)}
        </>
    )
}

export default Dashboard
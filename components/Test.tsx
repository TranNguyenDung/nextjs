import {FC} from "react";
import {useSelector} from "react-redux";
import {AppState} from "../redux/store";

interface IProps {  }

const Test:FC<IProps> = ({}) =>{
    const meni = useSelector((state: AppState)=>state.me);
    return <div>{meni}</div>
};

export default Test;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlgorithm } from "../store/actions/sampleAction";

const DropDown = (props) => {
    const dispatch = useDispatch();

    const clickHandler = (element) => {
        dispatch(setAlgorithm(element));
    }

    const tray = props.list.map((element, i) => {
        return <option>{element}</option>
    })
    return (
        <select onChange={(e) => clickHandler(e.target.value)} value={props.value} className="dropDown" >
            {tray}
        </select>
    );
}

export default DropDown;
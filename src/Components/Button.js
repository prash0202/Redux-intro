import React from "react";
import IncDec from "../Reducers/IncDec";
import {Plus, Minus} from '../Actions/action';
import {useSelector, useDispatch} from 'react-redux';

let Button = ()=>{

let myState = useSelector((state)=>state.IncDec);
let dispatch = useDispatch();
    return(
        <>
    <h1>Hello</h1>
     <button onClick={()=>{dispatch(Plus(3))}}>+</button><h2>{myState}</h2><button onClick={()=>{dispatch(Minus(2))}}>-</button>
        </>
    )
}

export default Button;
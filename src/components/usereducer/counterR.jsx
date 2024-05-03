import React, { useReducer } from "react";


function reducer(state,action){
    if(action.type==="INC"){
    return {count:state.count+1}
}
if (action.type==="DEC"){
    return {count:state.count-1}
}
if(action.type==="RES"){
    return {count:state.count=0}
}

}
function CounterR(){
    var[state,dispatch]=useReducer(reducer,{count:0})
    return(<div>
        {<div className="border border-2 border-warning m-2 p-2">
            <h1>counterR:{state.count}</h1>
            <button style={{backgroundColor:"green"}}onClick={()=>{dispatch({type:"INC"})}}>INCEREMENT COUNT</button>
            &nbsp;&nbsp;&nbsp;
            <button   style={{backgroundColor:"green"}} onClick={()=>{dispatch({type:"DEC"})}}>DECREMENT COUNT</button>
            &nbsp;&nbsp;&nbsp;
            <button  style={{backgroundColor:"red"}} onClick={()=>{dispatch({type:"RES"})}}>RESET</button>
            
            </div>
        }
    </div>

    )
}
export default CounterR
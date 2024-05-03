
import { useReducer } from "react";

function  reducer(state,action){
    var newtodo=document.getElementById("d2").value
    if(action.type==="ADD"){
        
        return {todos:[...state.todos,newtodo]}
    }

    
}
function TodolistR(){

    var[state,dispatch]=useReducer(reducer,{todos:["lakshman","ramachandrapuram","konnaseema","andhrapradesh"]})
    return(<div>
        {                   
            <div>
                <h1>TodolistR</h1>
                <input type="text" id="d2" />
                <button onClick={()=>{dispatch({type:"ADD"})}}>ADD TO LIST</button>
                <ul>
                    {state.todos.map((s)=>{return <li>{s}</li>})}
                </ul>
            </div>
        }
    </div>

    )
}
export default TodolistR
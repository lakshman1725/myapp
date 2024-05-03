import React, { useState } from "react";
import Todolist from "./todolist";
import CounterR from "./usereducer/counterR";


function Counter(){
    
    var[count,setCount]=useState(0)
    function inc(){
        setCount((oldcount)=>{ 
             return oldcount+1
        })
    }
    function dec(){
        setCount((oldcount)=>{
            return oldcount-1
        })
    }
    function res(){
        setCount((oldcount)=>{
            return oldcount=0

        })
    }
    function incten(){
        setCount((oldcount)=>{
            return oldcount+10
        })
    }
    return (<div className="border border-2 border-danger m-2 p-2">
            <h1>
                counter:{count}

            </h1>
            <button onClick={()=>{inc()}}>INCREMENT</button>
            <button onClick={()=>{dec()}}>DECREMENT</button>
            <button onClick={()=>{res()}}>RESET</button>
            <button onClick={()=>{incten()}}>INC10</button>
            
            
            
        </div>
        
    )
    
}

export default Counter
import React, { useEffect, useState } from "react";
import TodolistR from "./usereducer/TodolistR";


function Todolist(){
    var[todos,setTodos]=useState(["lakshman","jaguu","dinuu","surii"])
    function butn(){
        var list=document.getElementById("d1").value
        setTodos([...todos,list])
       
    }
    function abc(i){
        
        

    }
    return (<div  className="border border-2 border-info m-2 p-2">
        <h1 style={{color:"purple"}}>TODOLIST</h1>
        <input type="text"  id="d1"/>
        <button onClick={()=>{butn()}} style={{backgroundColor:"green"}}>ADD</button>
        <h1>{todos.map((s,i)=>{return<li>{s}<button onClick={()=>{abc(i)}} style={{backgroundColor:"red"}}>delete</button></li>})}</h1>
        
    </div>

    )
}
export default Todolist;
import React from 'react'
import { useContext } from 'react';
import {myContext} from "../App";
function Thirdcom() {
    const value = useContext(myContext)
    const colors= ['white','green','red','blue','cyan'];
    function changeColor(color) {
value.setColor(color)
    }
    const modalStyle = {
        backgroundColor:value.color
    }
  return (
<div>
{
    value.active ? <div className={"card"} style={modalStyle}>
            <div className={"card-header"}><h1>active</h1></div>
            <div className={"card-body"}><h1>modal</h1></div>
    </div>:
<h1>text</h1>
}
<hr/>
<br/>
    {colors.map((item,index)=><button className={"btn btn-dark"} onClick={()=>changeColor(item)}
                                      key={index}>{item}</button>)}
</div>
    )
}

export default Thirdcom
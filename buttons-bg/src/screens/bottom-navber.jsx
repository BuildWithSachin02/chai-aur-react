import React from "react";
import { useState } from "react";

export default function BottomHeader() {
  const [bgColor, setbgColor] = useState("white");
  const [textColor, setTextColor] = useState("black")
  return (
    <>
      <div
        style={{backgroundColor:bgColor,
            height:"100vh",
        }}
       className="container-fluid">
        <div className="container mx-auto pt-5  position-relative">
          <h1 style={{color:textColor}} >BottomHeader</h1>
          <div
            className="mt-5 btn-group w-100 d-flex gap-3 position-absolute border ps-5 pe-5 pt-5 pb-5  border-danger"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button onClick={()=>{
                setbgColor("red");
                setTextColor("white");
            }} type="button" className="btn btn-danger">
              Red
            </button>
            <button onClick={()=>setbgColor("blue")}
             type="button" className="btn btn-primary">
              blue
            </button>
            <button onClick={()=>setbgColor("gray")}
             type="button" className="btn btn-secondary">
              gray
            </button>
            <button onClick={()=>{
                setbgColor("black")
                setTextColor("white")
            }}
             type="button" className="btn btn-dark">
              black
            </button>
            <button onClick={()=>{
                setbgColor("yellow");
                setTextColor("black")
            }}
             type="button" className="btn btn-warning">
              Yellow
            </button>
            <button onClick={()=>setbgColor("green")}
             type="button" className="btn btn-success">
              Green
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

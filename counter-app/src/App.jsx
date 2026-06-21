import {useState} from "react";
//when i want to update in my ui but i cant do bcz i dont use usestate
//reason i make function when button will click after click button
//make a logic and i write in h1 tag the named of varible but still not 
//not changeing on ui bez usestate is a hook the only his job to do updation work
export default function App(){
 let [counter,setCounter] = useState(0)//the variable default value is counter = 5
 let [hide,setHide] = useState(false); 
 const increase = ()=>{
     if(counter < 20){
      //this is interview qustions what will output without run
      //when presh button will be count is count = 1 ok now 
      //when press 2 last value is count = 1, after click it will 1+1=2(second press)
      //that same thing will be showing 
      counter = counter + 1;//1
      counter = counter + 1;//2
      counter = counter + 1;//3
      counter = counter + 1;//4 final output will be see.
     setCounter(counter)
     console.log(counter)
     }else{
      alert("20 is last number")
     }
  }
  const decrease = ()=>{
    if(counter > 0){ //5 > 0
      counter = counter - 1;
    setCounter(counter);
    console.log(counter);
    }else{
      alert("zero is end of number")
    }
    
  }
  return(
    <>
      <div className="container">
      <h1 className="mt-5">Counter-App</h1>
      <h2 style={{visibility:hide ?"hidden": ""}} className="mt-3 mb-3">{counter}</h2>
      <button onClick={increase}>++</button>
      <button className="ms-2" onClick={decrease}>--</button>
    <button className="ms-3" onClick={()=>{
      setHide(!hide)// ! this very usefull when is before click hide value = false bcz counter will be display and after hide button click and hide = true so counter will be hide and after all !(not sign works is true to false and false to true)
    }}>hide</button>
      </div>
    </>
  )
}
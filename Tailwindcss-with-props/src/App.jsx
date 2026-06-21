import React from "react"
import Card from "./components/card"
export default function App(){
  const dev = {
    username:"sachindev",
    email:"yadavsachin",
    des:"hello my name is yadav sachin i want to learn DSA and core languages.",
    age:21
  }
  const NewDev = ["hello world", 9054387845, "fullstack devloper"];
  return(
    <>
      <Card title="AI Automation" dev={dev}/>
      <Card username="sachin dev"  newdev={NewDev}/>
    </>
  )
}
import Favourite from "./favourites"
import React from "react"
import Laura from "./laura"
import Tools from "./api/Tools"
import Todo from "./todo"

export default function Home() {
  return (
    <div>
      <h1> wow! my first react project </h1>
      <h2>my love react</h2>
      <ul>
        <li>it is reusable</li>
        <li>it is Easy to use</li>
        <li>it is Easy to learn and the community is wide</li>
      </ul>

      <Favourite name='vic'/>

      <Laura FavPlayer='Declan Rice' name='laura'/>

      {/*create a component called tools,
      the tools should return
      my name is yourname
      my skillsets involves
      -Html
      -Css
      -Bootstrap
      -any other you have
      
      All data (name)*/}

      <Tools name='Godswill' 
       skill1='Html' 
       skill2='css' 
       skill3='Bootstrap' 
       skill4='Copy and Paste'
      />

      <h1>My Todo's for today</h1>
      <Todo todo='learn usestate '/>
      <Todo todo='learn conditional rendering '/>
      <Todo todo='Learn List '/>

    </div>

  )
}

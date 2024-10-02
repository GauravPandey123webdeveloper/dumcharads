import React from 'react'
import style from './Home.module.css'
import Button from './Button'
export default function Home() {
    const handleSubbmit=()=>{
       alert("clicked")
    }
  return (
    <div className={style.home}>

      <div className={style.card}>
        <form>
       
        
        <Button name={"Register"} handler={handleSubbmit} defaultStyle={{"color":"white"}}/>
        </form>
      </div>
    </div>
  )
}

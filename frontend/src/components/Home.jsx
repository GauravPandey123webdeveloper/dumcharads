import React from 'react'
import style from './Home.module.css'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/game'); 
    }

    return (
        <div className={style.home}>
            <div className={style.card}>
                <form>
                    <Button name={"Register"} handler={handleSubmit} defaultStyle={{"color":"red"}}/>
                </form>
            </div>
        </div>
    )
}

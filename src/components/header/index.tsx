import React from "react";
import './index.css'

export default function Header() {
    const userName = 'kangzai'
    const backHome = () => {
        console.log('111')
    }
    return(
        <div className='header' >
            <div className="userInfo" onClick={backHome}>
                {userName} π­
            </div>

            <div className="menu">
                <span>ιδΎΏεε</span>
                <span>ιδΎΏεε</span>
                <span>ιδΎΏεε</span>
            </div>
        </div>
    )
}
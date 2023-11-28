import React from "react"
import { useState } from 'react'
import './MapSelector.css'
import teamOneLogo from '../assets/teamOneLogo.png'
import teamTwoLogo from '../assets/teamTwoLogo.png'
import valorantLogo from '../assets/valorantLogo.png'

function MapSelector(){
    const teamOne = "FURIA"
    const teamTwo = "LOUD"

    const [classe, setClasse] = useState('MapSelect')

    const changeState = () => {
        (classe == 'MapSelect') ? setClasse('MapSelectOn') : setClasse('MapSelect')
    }

    let MapSelection = 0

    return (
        <div className="MapBox">
            <div className={classe}>
                <div className="">
                    <p>{teamOne}</p>
                    <p>VETO MAP</p>
                </div>
                <div className="MapImage">
                    <img id="teamImage" src={teamOneLogo}></img>
                </div>
            </div>
            <div className="{classe}">
                <div className="">
                    <p>{teamTwo}</p>
                    <p>VETO MAP</p>
                </div>
                <div className="MapImage">
                    <img id="teamImage" src={teamTwoLogo}></img>
                </div>
            </div>
            <div className={classe}>
                <div className="">
                    <p>{teamOne}</p>
                    <p>SELECT MAP</p>
                </div>
                <div className="MapImage">
                    <img id="teamImage" src={teamOneLogo}></img>
                </div>
            </div>
            <div className={classe}>
                <div className="">
                    <p>{teamTwo}</p>
                    <p>SELECT MAP</p>
                </div>
                <div className="MapImage">
                    <img id="teamImage" src={teamTwoLogo}></img>
                </div>
            </div>
            <div className={classe}>
                <div className="">
                    <p>{teamOne}</p>
                    <p>VETO MAP</p>
                </div>
                <div className="MapImage">
                    <img id="teamImage" src={teamOneLogo}></img>
                </div>
            </div>
            <div className={classe}>
                <div className="">
                    <p>{teamTwo}</p>
                    <p>VETO MAP</p>
                </div>
                <div className="MapImage">
                    <img id="teamImage" src={teamTwoLogo}></img>
                </div>
            </div>
            <div className={classe}>
                <div className="">
                    <p>DECIDER</p>
                    <p>MAP</p>
                </div>
                <div className="MapImage">
                    <img id="teamImage" src={valorantLogo}></img>
                </div>
            </div>
            <div className="mapButtons">
                <button onClick={changeState}></button>
            </div>
        </div>
    )
}

export default MapSelector
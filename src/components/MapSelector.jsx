import React from "react"
import { useState } from 'react'
import './MapSelector.css'

function MapSelector(){
    const teamOne = "ViperCore"
    const teamTwo = "OsCaraVelho"

    return (
        <div className="MapBox">
            <div className="MapSelect">
                <div className="">
                    <p>{teamOne}</p>
                    <p>VETO MAP</p>
                </div>
                <div className="MapImage">
                </div>
            </div>
            <div className="MapSelect">
                <div className="">
                    <p>{teamTwo}</p>
                    <p>VETO MAP</p>
                </div>
                <div className="MapImage">
                </div>
            </div>
            <div className="MapSelect">
                <div className="">
                    <p>{teamOne}</p>
                    <p>SELECT MAP</p>
                </div>
                <div className="MapImage">
                </div>
            </div>
            <div className="MapSelect">
                <div className="">
                    <p>{teamTwo}</p>
                    <p>SELECT MAP</p>
                </div>
                <div className="MapImage">
                </div>
            </div>
            <div className="MapSelect">
                <div className="">
                    <p>{teamOne}</p>
                    <p>VETO MAP</p>
                </div>
                <div className="MapImage">
                </div>
            </div>
            <div className="MapSelect">
                <div className="">
                    <p>{teamTwo}</p>
                    <p>VETO MAP</p>
                </div>
                <div className="MapImage">
                </div>
            </div>
            <div className="MapSelect">
                <div className="">
                    <p>DECIDER</p>
                    <p>MAP</p>
                </div>
                <div className="MapImage">
                </div>
            </div>
        </div>
    )
}

export default MapSelector
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Card(props) {

    return (
        <div className="card">
            <img className="card--img" src={props.item.imageUrl} alt="" />
            <div className="card--details">
                <div className="location--details">
                    <img src="./src/assets/location.png" alt="" />
                    <p className="location">{props.item.location} </p>
                    <a href={props.item.googleMapsUrl} className="googleMaps" >View on Google Maps</a>
                </div>
                <div className="description--title">
                    <h1>{props.item.title}</h1>
                    <p className="dates">
                        {props.item.startDate} - {props.item.endDate}
                    </p>
                    <p className="description--details">
                        {props.item.description}
                    </p>
                </div>
            </div>
            
        </div>

    )
}
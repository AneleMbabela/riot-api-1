import React from "react";
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <h2>Hi,</h2>
            <h2>Am a Self-Taught Developer</h2>
            <h4>Welcome to Riot API landing Page</h4>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic
            </p>
            <Link to="/about">
                <button className="btn"> Read more...</button>

            </Link>

        </header>
    )
}
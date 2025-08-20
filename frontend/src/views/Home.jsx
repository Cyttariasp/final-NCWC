import { Link } from "react-router-dom";
import React from 'react';
import Card from "../components/recipeCard";

const Home = () => {
    return (
        <div>
            <button className="btn btn-danger">React + Bootstrap</button>
            <Card />
        </div>
    );
}


export default Home;
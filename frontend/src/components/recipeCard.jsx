import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Card() {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://i.postimg.cc/c43d6p05/Chat-GPT-Image-Aug-20-2025-12-07-45-PM.png" className="card-img-top" alt="..." />
            <div className="card-body pb-0">
                <h5 className="card-title d-flex justify-content-center">Recipe Title</h5>
            </div>
            <div className="card-body py-0">
                <p className="fw-bold mb-0">Difficulty:</p><p>☆☆☆☆☆</p>
                <p className="fw-bold mb-0">Prep Time:</p><p>1hrs y 15mins</p>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary d-flex justify-content-center mb-2">Start cooking!</button>
            </div>
        </div>
    );
}

export default Card;

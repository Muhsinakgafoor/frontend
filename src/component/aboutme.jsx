import React, { useState } from 'react';
import './aboutme.css';
import muhsinaImage from './muhsina.jpg.jpeg'; 
import {useNavigate} from 'react-router-dom';
import axios from "axios";

function Aboutme() {
    return (
        <div className="container">
            <div className="profile-section">
                <img src={muhsinaImage} alt="Muhsina Profile Picture" /> 
            </div>
            
        </div>
    );
}

export default Aboutme;

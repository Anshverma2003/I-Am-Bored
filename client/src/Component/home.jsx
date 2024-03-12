import React, { useState } from 'react';
import axios from "axios";
import './main.css';

const Home = () => {
    const [type, setType] = useState("");
    const [participants, setParticipants] = useState("");
    const [error, setError] = useState(null);
    const [data, setData] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/getData', {
                type,
                participants
            });
            const arr = response.data;
            const result = arr[Math.floor(Math.random()*arr.length)]
            console.log(result);

            setData(result);
        }
        catch(err){
            setError(err.message);
        }
    }

    return (
        <div className="container">
            <h1>Let's find something for you to do ✌️</h1>
            <form onSubmit={handleSubmit} className="form">
                <select name="type" onChange={(e) => setType(e.target.value)} className="form-select">
                    <option value="" data-display="Select">Random type</option>
                    <option value="education">Education</option>
                    <option value="charity">Charity</option>
                    <option value="recreational">Recreational</option>
                    <option value="relaxation">Relaxation</option>
                    <option value="busywork">Busywork</option>
                    <option value="social">Social</option>
                    <option value="diy">DIY</option>
                    <option value="music">Music</option>
                </select>
                <select name="participants" onChange={(e) => setParticipants(e.target.value)} className="form-select">
                    <option value="">Any number of people</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <button type="submit" className="form-submit">Go</button>
            </form>
            <section className="cards">
                {data && (
                    <article className="card-item">
                        <h2 className="card-activity">{data.activity}</h2>
                        <div className="card-info">
                            <span className="card-type">{data.type}</span>
                            <span className="card-participants">Participants: <span className="card-number">{data.participants}</span></span>
                        </div>
                    </article>
                )}
                {error && <div id="tag-error" className="tag-error">{error}</div>}
            </section>
        </div>
    );
};

export default Home;

import React, { useState } from 'react';
import './main.css';

const Home = () => {

    function handleSubmit(e){
        e.preventDefault();
    }


    return (
        <div className="container">
            <h1>Let's find something for you to do ✌️</h1>
            <form onSubmit={handleSubmit} className="form">
                <select name="type" className="form-select">
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
                <select name="participants" className="form-select">
                    <option value="">Any number of people</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <button type="submit" className="form-submit">Go</button>
            </form>
            <section className="cards">
                <article className="card-item">
                    <h2 className="card-activity">{}</h2>
                    <div className="card-info">
                        <span className="card-type">{}</span>
                        <span className="card-participants">Participants: <span className="card-number">{}</span></span>
                    </div>
                </article>
                <div id="tag-error" className="tag-error">{}</div>
            </section>
        </div>
    );
};

export default Home;

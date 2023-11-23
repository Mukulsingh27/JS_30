import React from "react";

const Card = ({ authorName, title, excerpt }) => {
    return (
        <div className="example-1 card">
            <div className="wrapper">
                <div className="date">
                    <span className="day">12</span>
                    <span className="month">Aug</span>
                    <span className="year">2016</span>
                </div>
                <div className="data">
                    <div className="content">
                        <span className="author">{authorName}</span>
                        <h1 className="title">
                            <a href="#">{title}</a>
                        </h1>
                        <p className="text">{excerpt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

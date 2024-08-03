import React from "react";
import "./Portfolio.scss";

import portfolio from "./../../../../data/portfolio.js";
import Port from "./port/Port.jsx";

function Portfolio() {
    return (
        <>
            <div className="portfolio">
                <div className="container">
                    <div className="title">
                        <h2>portfolio</h2>
                    </div>

                    <div className="content">
                        {portfolio.map((port) => {
                            return <Port portfolio={port} key={port.id} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;

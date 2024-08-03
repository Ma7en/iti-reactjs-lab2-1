import React from "react";

function Port({ portfolio }) {
    const { name } = portfolio;

    return (
        <>
            <div className="port">
                <div className="info">
                    <h3>{name}</h3>
                </div>
            </div>
        </>
    );
}

export default Port;

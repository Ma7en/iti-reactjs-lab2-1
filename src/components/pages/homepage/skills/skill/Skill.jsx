import React from "react";

function Skill({ skills }) {
    const { name, percentage } = skills;

    return (
        <>
            <div className="skill">
                <p>{name}</p>
                <div className="progress">
                    <div
                        className="progress-bar"
                        style={{
                            width: `${percentage}%`,
                            opacity:
                                percentage === 100 ? "1" : `0.${percentage}`,
                        }}
                    ></div>
                </div>
            </div>
        </>
    );
}

export default Skill;

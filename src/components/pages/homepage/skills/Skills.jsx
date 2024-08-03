import React from "react";
import "./Skills.scss";

import list_item from "./../../../../data/list_item.js";
import skills from "./../../../../data/skills.js";

import ListItem from "./listitem/ListItem.jsx";
import Skill from "./skill/Skill.jsx";

export default function Skills() {
    // const [html, setHtml] = useState("100");
    // const [css, setCss] = useState("90");
    // const [js, setJs] = useState("80");
    // const [python, setPyhton] = useState("70");
    // const [react, setReact] = useState("60");
    // const [scss, setScss] = useState("50");

    return (
        <>
            <div className="skills">
                <div className="container">
                    <div className="title">
                        <h2>Skills</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Est nobis voluptates iusto eius numquam
                            ratione consectetur dolor ducimus? A optio eum qui
                            laudantium beatae, esse inventore nobis, odit
                            temporibus molestias fugiat eveniet doloremque odio
                            dolorum totam officiis, tenetur nihil? Quidem?
                        </p>
                    </div>

                    <div className="content">
                        <div className="list">
                            <ul>
                                {list_item.map((item, index) => {
                                    return (
                                        <ListItem items={item} key={index} />
                                    );
                                })}
                            </ul>
                        </div>

                        <div className="skill-list">
                            {skills.map((skill) => {
                                return <Skill skills={skill} key={skill.id} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

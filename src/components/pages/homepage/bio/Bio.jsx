import React from "react";
import "./Bio.scss";
import file from "./../../../../assets/file/file.pdf";

export default function Bio() {
    return (
        <>
            <div className="bio">
                <div className="container">
                    <div className="content">
                        <div className="title">
                            <h2>About Me</h2>
                        </div>

                        <div className="down">
                            <p>
                                My name is Katie, and I'm a passionate web
                                developer and graphic designer. I've been
                                working in the tech industry for over 10 years,
                                focusing primarily on front-end development. I
                                love creating engaging and user-friendly
                                interfaces that make a difference in people's
                                lives.
                            </p>

                            <div className="">
                                <a href={file} download>
                                    download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

import React from "react";

function ListItem({ items }) {
    const { name } = items;

    return (
        <>
            <li>
                <a href={`${name}`} className="active">
                    {name}
                </a>
            </li>
        </>
    );
}

export default ListItem;

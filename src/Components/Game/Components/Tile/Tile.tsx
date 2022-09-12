import React from "react";
import "./Tile.css";

type TileProps = {
    number: number;
    id: number;
    onClick: any;
};
const Tile = ({ number, onClick, id }: TileProps) => {
    return (
        <div className="tile" onClick={onClick} id={id.toString()}>
            {number}
        </div>
    );
};

export default Tile;

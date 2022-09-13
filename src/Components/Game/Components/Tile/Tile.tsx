import React from "react";
import "./Tile.css";

type TileProps = {
    number: number;
    id: number;
    onClick: any;
    className: string;
};
const Tile = ({ number, onClick, id, className }: TileProps) => {
    return (
        <div
            className={`tile ${className}`}
            onClick={onClick}
            id={id.toString()}
        >
            {number}
        </div>
    );
};

export default Tile;

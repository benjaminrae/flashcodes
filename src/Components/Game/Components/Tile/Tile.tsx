import React from "react";
import "./Tile.css";

type TileProps = {
    number: number;
    onClick: () => void;
};
const Tile = ({ number, onClick }: TileProps) => {
    return <div>{number}</div>;
};

export default Tile;

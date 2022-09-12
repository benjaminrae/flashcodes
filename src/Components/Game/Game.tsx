import React, { useState } from "react";
import Button from "../Button/Button";
import "./Game.css";

const Game = () => {
    const [teams, setTeams] = useState(2);
    const [gameStage, setGameStage] = useState({
        isTeamSelect: true,
        isTileSelect: false,
        isCardFront: false,
        isCardBack: false,
        isWrapUp: false,
        isGameOver: false,
    });
    const [teamScores, setTeamScores] = useState({});
    return (
        <div className="game">
            {gameStage.isTeamSelect && (
                <div className="game__team-select">
                    <form className="team-select__form">
                        <label htmlFor="teams">How many teams are there?</label>
                        <select
                            name="teams"
                            className="form__select"
                            onChange={(event) => {
                                setTeams(+event.target.value);
                            }}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <Button
                            text="Start Game"
                            onClick={() => {
                                setGameStage((prev) => ({
                                    ...prev,
                                    isTeamSelect: false,
                                    isTileSelect: true,
                                }));
                            }}
                        />
                    </form>
                </div>
            )}
            {gameStage.isTileSelect && (
                <>
                    <></>
                </>
            )}
        </div>
    );
};

export default Game;

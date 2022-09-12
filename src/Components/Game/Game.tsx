import { doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import Button from "../Button/Button";
import "./Game.css";
import { db } from "../../services/firebase/firebase";
import GameScoreBoard from "./Components/GameScoreBoard/GameScoreBoard";

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
    const [teamScores, setTeamScores] = useState({
        team1: 0,
        team2: 0,
        team3: 0,
        team4: 0,
    });
    const [currentSet, setCurrentSet] = useState<any>();

    const { id } = useParams();
    const navigate = useNavigate();
    if (!id) {
        //should navigate to a 404 or an error
        navigate("/");
    }

    useEffect(() => {
        getAndSetGameData();
    }, []);

    const getAndSetGameData = async () => {
        const docRef = doc(db, "sets", `${id}`);
        try {
            const docSnap = await getDoc(docRef);
            setCurrentSet(docSnap.data());
        } catch (error) {
            // should show some error/error page
            navigate("/");
        }
    };

    return (
        <div className="game">
            {gameStage.isTeamSelect && (
                <div className="game__team-select">
                    {/* add game title and game cover image here} */}
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
                <div className="game__tiles">
                    <GameScoreBoard teams={teams} teamScores={teamScores} />
                    <div className="tile__container">
                        {currentSet.cards.map((card: any, index: number) => {
                            return <div key={index}>{index + 1}</div>;
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Game;

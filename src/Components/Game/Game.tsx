import { doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import Button from "../Button/Button";
import "./Game.css";
import { db } from "../../services/firebase/firebase";
import GameScoreBoard from "./Components/GameScoreBoard/GameScoreBoard";
import Tile from "./Components/Tile/Tile";
import Buttons from "../Button/Button";

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
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>();
    const [currentTeam, setCurrentTeam] = useState("team1");

    const { id } = useParams();
    const navigate = useNavigate();

    type ObjectKey = keyof typeof teamScores;

    if (!id) {
        //should navigate to a 404 or an error
        navigate("/");
    }

    useEffect(() => {
        getAndSetGameData();
    }, []);

    const checkGameOver = () => {
        if (currentSet.cards.every((card: any) => card.isAnswered)) {
            console.log("gameover");
            const gameOver = {
                isTeamSelect: false,
                isTileSelect: false,
                isCardFront: false,
                isCardBack: false,
                isWrapUp: false,
                isGameOver: true,
            };
            setGameStage(gameOver);
        }
    };

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

    const onTileClick = (event: any) => {
        const { target } = event;
        console.log(target.id);
        setCurrentQuestionIndex(target.id);
        setGameStage((prev) => ({
            ...prev,
            isTileSelect: false,
            isCardFront: true,
        }));
    };

    const onCheckClick = () => {
        setGameStage((prev) => ({
            ...prev,
            isCardFront: false,
            isCardBack: true,
        }));
    };

    const onCorrectClick = () => {
        markQuestionAnswered();
        const currentTeamKey = currentTeam as ObjectKey;
        setTeamScores((prev) => ({
            ...prev,
            [currentTeamKey]: prev[currentTeamKey] + 10,
        }));
        setGameStage((prev) => ({
            ...prev,
            isCardBack: false,
            isTileSelect: true,
        }));
        changeTeams();
        checkGameOver();
    };

    const onIncorrectClick = () => {
        markQuestionAnswered();
        setGameStage((prev) => ({
            ...prev,
            isCardBack: false,
            isTileSelect: true,
        }));
        changeTeams();
        checkGameOver();
    };

    const onSeeQuestionClick = () => {
        setGameStage((prev) => ({
            ...prev,
            isCardBack: false,
            isCardFront: true,
        }));
    };

    const changeTeams = () => {
        switch (currentTeam) {
            case "team1":
                setCurrentTeam("team2");
                break;
            case "team2":
                if (teams > 2) {
                    setCurrentTeam("team3");
                } else {
                    setCurrentTeam("team1");
                }
                break;
            case "team3":
                if (teams > 3) {
                    setCurrentTeam("team4");
                } else {
                    setCurrentTeam("team1");
                }
                break;
            default:
                setCurrentTeam("team1");
                break;
        }
    };

    const markQuestionAnswered = () => {
        if (!currentQuestionIndex) {
            return;
        }
        currentSet.cards[currentQuestionIndex].isAnswered = true;
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
                            return (
                                <Tile
                                    key={index}
                                    id={index}
                                    number={index + 1}
                                    onClick={
                                        currentSet.cards[index].isAnswered
                                            ? () => {}
                                            : onTileClick
                                    }
                                    className={
                                        currentSet.cards[index].isAnswered
                                            ? "tile--answered"
                                            : ""
                                    }
                                />
                            );
                        })}
                    </div>
                </div>
            )}
            {gameStage.isCardFront && (
                <div className="game__card-front">
                    <GameScoreBoard teams={teams} teamScores={teamScores} />
                    {currentQuestionIndex && (
                        <div className="card-front__container">
                            <div className="card-front__question">
                                {currentSet.cards[currentQuestionIndex].title}
                            </div>
                            <img
                                className="card-front__image"
                                src={require(`../../resources/images/${currentQuestionIndex}.png`)}
                                alt=""
                            />
                            <Button text="Check" onClick={onCheckClick} />
                        </div>
                    )}
                </div>
            )}
            {gameStage.isCardBack && (
                <div className="game__card-back">
                    <GameScoreBoard teams={teams} teamScores={teamScores} />
                    {currentQuestionIndex && (
                        <div className="card-back__container">
                            <div className="card-back__question">
                                {currentSet.cards[currentQuestionIndex].title}
                            </div>
                            <div className="card-back__answer">
                                {currentSet.cards[currentQuestionIndex].answer}
                            </div>
                            <div className="card-back__buttons">
                                <Button
                                    text="Correct"
                                    onClick={onCorrectClick}
                                />
                                <Button
                                    text="Incorrect"
                                    onClick={onIncorrectClick}
                                />
                                <Button
                                    text="See Question"
                                    onClick={onSeeQuestionClick}
                                />
                            </div>
                        </div>
                    )}
                </div>
            )}
            {gameStage.isGameOver && (
                <div className="game__game-over">
                    <GameScoreBoard teams={teams} teamScores={teamScores} />

                    <div className="game-over__container">
                        <div className="game-over__title">Game Over!</div>
                        <Button
                            text="Find another game"
                            onClick={() => {
                                navigate("/");
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Game;

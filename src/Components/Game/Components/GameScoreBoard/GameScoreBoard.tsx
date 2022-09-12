import "./GameScoreBoard.css";

type GameScoreBoardProps = {
    teams: number;
    teamScores: any;
};
const GameScoreBoard = ({ teams, teamScores }: GameScoreBoardProps) => {
    return (
        <div className="game-score-board">
            {[...Array(teams)].map((team, index) => {
                return (
                    <div>
                        Team {index + 1}: {teamScores[`team${index + 1}`]}
                    </div>
                );
            })}
        </div>
    );
};

export default GameScoreBoard;

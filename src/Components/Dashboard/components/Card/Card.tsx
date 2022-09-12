import "./Card.css";

type CardProps = {
    index: number;
    coverImageUrl: string;
    title: string;
    author: string;
};
const Card = ({ index, coverImageUrl, title, author }: CardProps) => {
    return (
        <div className="card" key={index}>
            <div className="card__container">
                <img src={coverImageUrl} alt="" className="card__cover-image" />
                <h3 className="card__title">{title}</h3>
                <div className="card__bottom">
                    <div className="card__author">{author}</div>
                    <div className="card__likes">💟0</div>
                </div>
            </div>
        </div>
    );
};
export default Card;

import "./Card.css";

type CardProps = {
    index: number;
    coverImageUrl: string;
    title: string;
};
const Card = ({ index, coverImageUrl, title }: CardProps) => {
    return (
        <div className="card" key={index}>
            <img src={coverImageUrl} alt="" className="card__cover-image" />
            <h3 className="card__title">{title}</h3>
        </div>
    );
};
export default Card;

import "./NewSet.css";
import { useEffect, useState } from "react";

const NewCard = () => {
    return (
        <div className="new-card">
            <div className="form__group">
                <label htmlFor="new-card-title">Title</label>
                <input
                    className="new-card__title"
                    name="new-card-title"
                ></input>
                <label htmlFor="new-card-front">Front</label>
                <textarea
                    className="new-card__front"
                    name="new-card-front"
                ></textarea>
                <label htmlFor="new-card-back">Back</label>
                <textarea
                    className="new-card__back"
                    name="new-card-back"
                ></textarea>
            </div>
        </div>
    );
};

const NewSet = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [coverImageURL, setCoverImageURL] = useState("");
    const [languages, setLanguages] = useState("");
    const [numberOfCards, setNumberOfCards] = useState(1);
    const [cards, setCards] = useState([]);
    useEffect(() => {
        setCards([...Array(numberOfCards)]);
    }, [numberOfCards]);

    const cardInputs = () => {
        const cards = [];
        for (let i = 0; i < numberOfCards; i++) {
            cards.push(` <div className="new-card">
            <div className="form__group">
                <label htmlFor="new-card-title">Title</label>
                <input
                    className="new-card__title"
                    name="new-card-title"
                ></input>
                <label htmlFor="new-card-front">Front</label>
                <input
                    className="new-card__front"
                    name="new-card-front"
                ></input>
                <label htmlFor="new-card-back">Back</label>
                <input className="new-card__back" name="new-card-back"></input>
            </div>
        </div>`);
        }
        return cards;
    };

    return (
        <div className="new-set">
            <div className="new-set__container">
                <h2 className="new-set__title">
                    Create a new set of Flashcodes
                </h2>
                <form className="new-set__form">
                    <div className="form__group">
                        <label htmlFor="title">Title</label>
                        <input
                            name="title"
                            onChange={(event) => {
                                setTitle(event.target.value);
                            }}
                        ></input>
                    </div>
                    <div className="form__group">
                        <label htmlFor="description">Description</label>
                        <input
                            name="description"
                            onChange={(event) => {
                                setDescription(event.target.value);
                            }}
                        ></input>
                    </div>
                    <div className="form__group">
                        <label htmlFor="cover-image-url">Cover image URL</label>
                        <input
                            name="cover-image-url"
                            onChange={(event) => {
                                setCoverImageURL(event.target.value);
                            }}
                        ></input>
                    </div>
                    <div className="form__group">
                        <label htmlFor="languages">Languages</label>
                        <input
                            name="languages"
                            onChange={(event) => {
                                setLanguages(event.target.value);
                            }}
                        ></input>
                    </div>
                    <div className="form__divider"></div>
                    {cards.map((card, index) => {
                        return (
                            <div className="form__group" key={index}>
                                <div>{index + 1}</div>
                                <NewCard key={index} />
                                <div className="form__divider"></div>
                            </div>
                        );
                    })}
                    <div className="form__buttons">
                        <button
                            onClick={(event) => {
                                event.preventDefault();
                                setNumberOfCards(numberOfCards + 1);
                            }}
                        >
                            Add Card
                        </button>
                        <button>Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewSet;

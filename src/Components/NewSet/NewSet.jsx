import "./NewSet.css";
import { useState } from "react";

const NewSet = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [coverImageURL, setCoverImageURL] = useState("");
    const [languages, setLanguages] = useState("");

    return (
        <div class="new-set">
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
                </form>
            </div>
        </div>
    );
};

export default NewSet;

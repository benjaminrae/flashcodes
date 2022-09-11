import "./NewSet.css";
import { useState } from "react";

const NewSet = () => {
    return (
        <div class="new-set">
            <h2 className="new-set__title">Create a new set of Flashcodes</h2>
            <form className="new-set__form">
                <div className="form__group">
                    <label>Title</label>
                    <input></input>
                </div>
                <div className="form__group">
                    <label>Description</label>
                    <input></input>
                </div>
                <div className="form__group">
                    <label>Cover image URL</label>
                    <input></input>
                </div>
                <div className="form__group">
                    <label></label>
                    <input></input>
                </div>
            </form>
        </div>
    );
};

export default NewSet;

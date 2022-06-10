import React, { useEffect } from "react";
import {db} from "../firebase/firebase-config";
import {set, ref} from "firebase/database";


import $ from "jquery";
import "../styles/NewCard.css";

function NewCard(props) {
    const { setIsHomePage } = props;

    useEffect(() => {
        setIsHomePage(false);
        /***
         * Changing NewCard nav bg
         */
        $(".navbar").addClass("nav-blue-bg");
        window.scrollTo(0, 0);
    }, []);

    function submitData() {

        
    }

    return (
        <section id="new-card">
            <div className="new-card-wrapper">
                <div className="new-card-header">
                    <h2>New Card</h2>
                </div>
                <form className="form">
                    <div className="text-center mb-4">
                        <h1 className="h3 mb-3 font-weight-normal">
                            Add New Card
                        </h1>
                    </div>

                    <div className="form-label-group">
                        <input
                            type="text"
                            id="card-name"
                            className="form-control"
                            placeholder="Card Name"
                            required
                            autoFocus
                        />
                        <label htmlFor="card-name">Card Name</label>
                    </div>

                    <div className="form-label-group">
                        <input
                            type="text"
                            id="card-link"
                            className="form-control"
                            placeholder="Card Link"
                            required
                        />
                        <label htmlFor="card-link">Card Link</label>
                    </div>

                    <div className="form-label-group">
                        <input
                            type="text"
                            id="image-link"
                            className="form-control"
                            placeholder="Image Link"
                            required
                        />
                        <label htmlFor="image-link">Image Link</label>
                    </div>

                    <div className="form-label-group">
                        <input
                            type="datetime-local"
                            id="date"
                            className="form-control"
                            placeholder="Date-Time"
                            required
                        />
                        <label htmlFor="date">Date-Time</label>
                    </div>

                    <div className="form-label-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <label className="input-group-text" id="">
                                    Card Type
                                </label>
                            </div>
                            <input
                                type="radio"
                                className=""
                                id="base"
                                name="card-type"
                                required
                            />
                            <label htmlFor="base" className="radio-text">
                                Base
                            </label>
                            <input
                                type="radio"
                                className=""
                                id="bilingual"
                                name="card-type"
                            />
                            <label htmlFor="bilingual" className="radio-text">
                                Bilingual
                            </label>
                            <input
                                type="radio"
                                className=""
                                id="pro"
                                name="card-type"
                            />
                            <label htmlFor="pro" className="radio-text">
                                Pro
                            </label>
                        </div>
                    </div>

                    <div className="form-label-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <label className="input-group-text" id="">
                                    Priority
                                </label>
                            </div>
                            <input
                                type="radio"
                                className=""
                                id="low"
                                name="priority"
                                required
                            />
                            <label htmlFor="low" className="radio-text">
                                Low
                            </label>
                            <input
                                type="radio"
                                className=""
                                id="high"
                                name="priority"
                            />
                            <label htmlFor="high" className="radio-text">
                                High
                            </label>
                        </div>
                    </div>

                    <div className="form-label-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <label className="input-group-text" id="">
                                    Language
                                </label>
                            </div>
                            <input
                                type="checkbox"
                                className=""
                                id="en"
                                required
                            />
                            <label htmlFor="base" className="checkbox-text">
                                En
                            </label>
                            <input type="checkbox" className="" id="ur" />
                            <label
                                htmlFor="bilingual"
                                className="checkbox-text"
                            >
                                Ur
                            </label>
                            <input type="checkbox" className="" id="te" />
                            <label htmlFor="pro" className="checkbox-text">
                                Te
                            </label>
                        </div>
                    </div>

                    <div className="btn-wrapper">
                        <button className="btn btn-primary" onClick={submitData}>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default NewCard;

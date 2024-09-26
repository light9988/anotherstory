import React, { useState, useId, useContext } from "react";
import Button from "./Button";
import { ShopContext } from '../Context/ShopContext';
import "./Modal.css";

function Modal({ dialogRef }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [confirmEmailError, setConfirmEmailError] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [post, setPost] = useState('');
    const [addressError, setAddressError] = useState('');
    const [cityError, setCityError] = useState('');
    const [stateError, setStateError] = useState('');
    const [postError, setPostError] = useState('');
    const id = useId();
    const [submitMessage, setSubmitMessage] = useState('');
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "name") {
            setName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "confirmEmail") {
            setConfirmEmail(value);
        } else if (name === "address") {
            setAddress(value);
        } else if (name === "city") {
            setCity(value);
        } else if (name === "state") {
            setState(value);
        } else if (name === "post") {
            setPost(value);
        }
    };

    const validateNameInput = () => {
        if (!name) {
            setNameError("This field is required.");
            return false;
        } else {
            setNameError("");
            return true;
        }
    };

    const validateEmailInput = () => {
        if (!email) {
            setEmailError("This field is required.");
            return false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError("Please enter a valid email address including a @.");
            return false;
        } else {
            setEmailError("");
            return true;
        }
    };

    const validateConfirmEmailInput = () => {
        if (!confirmEmail) {
            setConfirmEmailError("This field is required.");
            return false;
        } else if (confirmEmail !== email) {
            setConfirmEmailError("This field must match the provided email address.");
            return false;
        } else {
            setConfirmEmailError("");
            return true;
        }
    };

    const validateAddressInput = () => {
        if (!address) {
            setAddressError("This field is required.");
            return false;
        } else {
            setAddressError("");
            return true;
        }
    };

    const validateCityInput = () => {
        if (!city) {
            setCityError("This field is required.");
            return false;
        } else {
            setCityError("");
            return true;
        }
    };

    const validateStateInput = () => {
        if (!state) {
            setStateError("This field is required.");
            return false;
        } else {
            setStateError("");
            return true;
        }
    };

    const validatePostInput = () => {
        if (!post) {
            setPostError("This field is required.");
            return false;
        } else {
            setPostError("");
            return true;
        }
    };
   
    const { cartItems, deleteFromCart } = useContext(ShopContext); 
    
    const handleClearCart = () => {
        Object.keys(cartItems).forEach(itemId => {
            if (cartItems[itemId] > 0) {
                deleteFromCart(itemId); 
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isNameValid = validateNameInput();
        const isEmailValid = validateEmailInput();
        const isConfirmEmailValid = validateConfirmEmailInput();
        const isAddressValid = validateAddressInput();
        const isCItyValid = validateCityInput();
        const isStateValid = validateStateInput();
        const isPostValid = validatePostInput();
        if (isNameValid && isEmailValid && isConfirmEmailValid && isAddressValid && isCItyValid && isStateValid && isPostValid) {
            console.log("Form submitted:", { name: name, email: email, confirmEmail: confirmEmail, address: address, city: city, state: state, post:post});
            setSubmitMessage(`Hi ${name}, You have placed the order successfully!`);
            setIsSubmitDisabled(true);
            handleClearCart();
        }
    };

    const handleClose = () => {
        dialogRef.current.close();
        setName('');
        setEmail('');
        setConfirmEmail('');
        setNameError('');
        setEmailError('');
        setConfirmEmailError('');
        setAddress('');
        setCity('');
        setState('');
        setPost('');
        setAddressError('');
        setCityError('');
        setStateError('');
        setPostError('');
    };

    return (
        <>
            <dialog ref={dialogRef} className="modal">
                <h3 className="modal-title">Check Out</h3>
                <form className="form" onSubmit={handleSubmit}>
                    <p className="required-field">* Required field </p>
                    <div className="register-name">
                        <label htmlFor={`${id}-name`}>Name *</label>
                        <input
                            name="name"
                            className="register-name__input"
                            id={`${id}-name`}
                            type="text"
                            value={name}
                            onChange={handleInputChange}
                            onBlur={validateNameInput}
                        />
                        {nameError && <div className="register-name__error">{nameError}</div>}
                    </div>
                    <div className="register-email">
                        <label htmlFor={`${id}-email`}>Email *</label>
                        <input
                            name="email"
                            className="register-email__input"
                            id={`${id}-email`}
                            type="text"
                            value={email}
                            onChange={handleInputChange}
                            onBlur={validateEmailInput}
                        />
                        {emailError && <div className="register-email__error">{emailError}</div>}
                    </div>
                    <div className="register-confirm">
                        <label htmlFor={`${id}-confirmEmail`}>Confirm Email *</label>
                        <input
                            name="confirmEmail"
                            className="register-confirm__input"
                            id={`${id}-confirmEmail`}
                            type="text"
                            value={confirmEmail}
                            onChange={handleInputChange}
                            onBlur={validateConfirmEmailInput}
                        />
                        {confirmEmailError && (<div className="register-confirm__error">{confirmEmailError}</div>)}
                    </div>
                    <div className="register-address">
                        <label htmlFor={`${id}-address`}>Address *</label>
                        <input
                            name="address"
                            className="register-address__input"
                            id={`${id}-address`}
                            type="text"
                            value={address}
                            onChange={handleInputChange}
                            onBlur={validateAddressInput}
                        />
                        {addressError && <div className="register-address__error">{addressError}</div>}
                    </div>
                    <div className="register-city">
                        <label htmlFor={`${id}-city`}>City *</label>
                        <input
                            name="city"
                            className="register-city__input"
                            id={`${id}-city`}
                            type="text"
                            value={city}
                            onChange={handleInputChange}
                            onBlur={validateCityInput}
                        />
                        {cityError && <div className="register-city__error">{cityError}</div>}
                    </div>
                    <div className="register-state">
                        <label htmlFor={`${id}-state`}>State/Province *</label>
                        <input
                            name="state"
                            className="register-state__input"
                            id={`${id}-state`}
                            type="text"
                            value={state}
                            onChange={handleInputChange}
                            onBlur={validateStateInput}
                        />
                        {stateError && <div className="register-state__error">{stateError}</div>}
                    </div>
                    <div className="register-post">
                        <label htmlFor={`${id}-name`}>Post Code *</label>
                        <input
                            name="post"
                            className="register-post__input"
                            id={`${id}-post`}
                            type="text"
                            value={post}
                            onChange={handleInputChange}
                            onBlur={validatePostInput}
                        />
                        {postError && <div className="register-post__error">{postError}</div>}
                    </div>
                    <div className="register-checkbox">
                        <label htmlFor={`${id}-subscribe`} >Do you want to subscribe?</label>
                        <input name="subscribe" className="register-checkbox__input" id={`${id}-subscribe`} type="checkbox" defaultChecked />
                    </div>

                    <div className="button-group">
                        <Button
                            className="button--link"
                            type="submit"
                            visual="link"
                            id="submit-Button"
                            onSubmit={handleSubmit}
                            disabled={isSubmitDisabled}
                        >
                            Place Order
                        </Button>
                        <Button
                            className="button--link"
                            type="button"
                            visual="link"
                            onClick={handleClose}
                        >
                            Close
                        </Button>
                    </div>
                    {setSubmitMessage && <div className="submit-message">{submitMessage}</div>}
                </form>
            </dialog>
        </>

    );
}

export default Modal;
import React from "react";
import { FormStyle } from "./ContactFormStyle";
import useInputs from "../../../customHooks/useInputs";

const isNotEmpty = value => value.trim() !== "";
const isEmail = value => value.includes('@');

const ContactForm = () => {
  // Form validation with custom hooks
  const {
    value: nameValue, isValid: nameIsValid, hasError: nameHasError, valueChangeHandler: nameChangeHandler, valueBlurHandler: nameBlurHandler, reset: nameReset
  } = useInputs(isNotEmpty);
  const {
    value: emailValue, isValid: emailIsValid, hasError: emailHasError, valueChangeHandler: emailChangeHandler, valueBlurHandler: emailBlurHandler, reset: emailReset,
  } = useInputs(isEmail);
  const {
    value: connectValue, isValid: connectIsValid, hasError: connectHasError, valueChangeHandler: connectChangeHandler, valueBlurHandler: connectBlurHandler, reset: connectReset,
  } = useInputs(isNotEmpty);
  const {
    value: messageValue, isValid: messageIsValid, hasError: messageHasError, valueChangeHandler: messageChangeHandler, valueBlurHandler: messageBlurHandler, reset: messageReset,
  } = useInputs(isNotEmpty);

  // Form state jsx style classes
  const nameClasses = nameHasError ? "client-contact-detail invalid" : "client-contact-detail";
  const emailClasses = emailHasError ? "client-contact-detail invalid" : "client-contact-detail";
  const connectClasses = connectHasError ? "client-contact-detail invalid" : "client-contact-detail";
  const messageClasses = messageHasError ? "message-detail invalid" : "message-detail";

  // Form validation logic
  let formIsValid = false;
  if (nameIsValid && emailIsValid && connectIsValid && messageIsValid) {
    formIsValid = true;
  };

  const server = process.env.REACT_APP_URL;
  const formSubmithandler = async (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    const response = await fetch(`${server}/send`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        mails: {
          nameValue,
          emailValue,
          connectValue,
          messageValue
        }
      }),
    }).then((res) => res.json())
      .then((resData) => {
        if (resData.status === "success") {
          alert("Message Sent");
          nameReset();
          emailReset();
          connectReset();
          messageReset();
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <FormStyle>
      <form className="contact-form" onSubmit={formSubmithandler}>
        <div className={nameClasses}>
          <label htmlFor="name">Name:</label>
          <input id="name" name="name" placeholder="Enter your name" 
            datatype="text"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={nameValue}
            />
            {nameHasError && <p className="error-msg">Please enter a name</p>}
        </div>
        <div className={emailClasses}>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" placeholder="Enter your email" 
            datatype="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={emailValue}
            />
            {emailHasError && <p className="error-msg">Please enter a valid email</p>}
        </div>
        <div className={connectClasses}>
          <label htmlFor="connect">Contact:</label>
          <input id="connect" name="connect" placeholder="Enter social link or contact to reach you" 
            datatype="text"
            onChange={connectChangeHandler}
            onBlur={connectBlurHandler}
            value={connectValue}
            />
            {connectHasError && <p className="error-msg">Please enter a valid connection</p>}
        </div>
        <div className={messageClasses}>
          <label htmlFor="message">Message:</label>
          <textarea maxLength={500} 
          id="message"
          name="message"
          placeholder="Message or project details here..." 
          datatype="text"
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
          value={messageValue}
          ></textarea>
          {messageHasError && <p className="error-msg-textarea">Please enter a message</p>}
        </div>
        <button disabled={!formIsValid} type="submit" className="submit-btn">Send</button>
      </form>
    </FormStyle>
  );
};


export default ContactForm
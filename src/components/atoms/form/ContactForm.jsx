import React, {useRef} from "react";
import { FormStyle } from "./ContactFormStyle";
import emailjs from '@emailjs/browser';
import useInputs from "../../../customHooks/useInputs";
import Swal from "sweetalert2";

const isNotEmpty = value => value.trim() !== "";
const isEmail = value => value.includes('@');

const ContactForm = () => {
  const form = useRef();
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

    // const response = await fetch(`${server}/send`, {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //     'Access-Control-Allow-Origin': '*'
    //   },
    //   body: JSON.stringify({
    //     mails: {
    //       nameValue,
    //       emailValue,
    //       connectValue,
    //       messageValue
    //     }
    //   }),
    // }).then((res) => res.json())
    //   .then((resData) => {
    //     if (resData.status === "success") {
    //       alert("Message Sent");
    //       nameReset();
    //       emailReset();
    //       connectReset();
    //       messageReset();
    //     } else if (resData.status === "fail") {
    //       // alert("Message failed to send");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
    //   console.log(nameValue, emailValue, connectValue, messageValue);
    

      // Email JS
      emailjs.sendForm('service_hcmid5t', 'template_ayracqa', form.current, 'XuRB2YQSYddaQC7bw')
      .then((result) => {
          // console.log(result.text);
          Swal.fire({
            title: "Message sent successfully!",
            text: "Our contact person will respond to your message shortly. Thanks!",
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#8e5c1d',
            timer: 3000,
            position: 'center'
          })
      }, (error) => {
          // console.log(error.text);
          Swal.fire({
            title: "Error sending message",
            text: "Try again later. You can reach us via direct phone call or through our social media channels. Thanks!",
            icon: 'error',
            timer: 3000,
            position: 'center'

          })
      }
      );
      nameReset();
          emailReset();
          connectReset();
          messageReset();

  };

  return (
    <FormStyle>
      <form className="contact-form" ref={form} onSubmit={formSubmithandler}>
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
        <button value="Send" disabled={!formIsValid} type="submit" className="submit-btn">Send</button>
      </form>
    </FormStyle>
  );
};


export default ContactForm
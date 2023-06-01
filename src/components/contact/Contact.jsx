
import React, { useState } from "react";
import { ContactStyle } from "./ContactStyle";
import contactData from "../../projects.json";

const Contact = () => {
    const [userInput, setUserInput] = useState("");
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Contact Input:", userInput);
    }

    const handleUserInput = (e) => {
        const {name, value} = e.target;
        setUserInput(e.target.value);
    }

  return (
    <ContactStyle>
      <div className="contact-container" id="contact">
        <div className="section-title">
        <h3 className="section-title">Contact</h3>
        <p className="section-description">
          Interested in connecting or collaborating on projects? Feel free to
          send me a message, and I'll respond promptly. If you have an exciting
          idea that you'd like to bring to life, don't hesitate to reach out.
          Let's work together to make it happen! Thank you for considering me as
          your potential partner.
        </p>
        </div>
        <div className="contact-outter">
          <div className="contact-details">
            <div className="details">
              <h3>Location:</h3>
              <p>Federal Capital Territory - Abuja</p>
            </div>
            <div className="details">
              <h3>Email:</h3>
              <p>nazanajemba@gmail.com</p>
            </div>
            <div className="details">
              <h3>Call or Whatsapp:</h3>
              <p>+234 81672 65619</p>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.84997815848!2d7.293976111023852!3d9.024223146857969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1685570324771!5m2!1sen!2sng"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div>
            <form className="contact-form" onSubmit={handleFormSubmit}>
              {contactData.contact.map((data) => {
                return (
                    <div className="client-contact-detail" key={data.id}>
                      <label htmlFor="name">{data.label}:</label>
                      <input id={data.id} name={data.name} placeholder={data.placeHolder} 
                        required={data.required} 
                        datatype={data.dataType}
                        value={userInput.name}
                        onChange={handleUserInput}
                        />
                    </div>
                );
              })}
                <div className="message-detail">
                  <label htmlFor="message">Message:</label>
                  <textarea maxLength={500} 
                  id="message"
                  name="message"
                  placeholder="Message or project details here..." 
                  required
                //   value={userInput}
                  onChange={handleUserInput}
                  datatype="text"
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </ContactStyle>
  );
};

export default Contact;



// import React, { useState } from "react";
// import { ContactStyle } from "./ContactStyle";
// import contactData from "../../projects.json";

// const Contact = () => {
//     const [userInput, setUserInput] = useState("");
//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         console.log("Contact Input:", userInput);
//     }

//     const handleUserInput = (e) => {
//         setUserInput({...userInput, [e.target.name]: e.target.value});
//     }

//   return (
//     <ContactStyle>
//       <div className="contact-container" id="contact">
//         <div className="section-title">
//         <h3 className="section-title">Contact</h3>
//         <p className="section-description">
//           Interested in connecting or collaborating on projects? Feel free to
//           send me a message, and I'll respond promptly. If you have an exciting
//           idea that you'd like to bring to life, don't hesitate to reach out.
//           Let's work together to make it happen! Thank you for considering me as
//           your potential partner.
//         </p>
//         </div>
//         <div className="contact-outter">
//           <div className="contact-details">
//             <div className="details">
//               <h3>Location:</h3>
//               <p>Federal Capital Territory - Abuja</p>
//             </div>
//             <div className="details">
//               <h3>Email:</h3>
//               <p>nazanajemba@gmail.com</p>
//             </div>
//             <div className="details">
//               <h3>Call or Whatsapp:</h3>
//               <p>+234 81672 65619</p>
//             </div>
//             <div>
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.84997815848!2d7.293976111023852!3d9.024223146857969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1685570324771!5m2!1sen!2sng"
//                 style={{ border: "0" }}
//                 allowfullscreen=""
//                 loading="lazy"
//               ></iframe>
//             </div>
//           </div>
//           <div>
//             <form className="contact-form" onSubmit={handleFormSubmit}>
//               {contactData.contact.map((data) => {
//                 return (
//                   <div key={data.id}>
//                     <div className="client-contact-detail">
//                       <label htmlFor="name">{data.label}:</label>
//                       <input id={data.id} name={data.name} placeholder={data.placeHolder} 
//                         required={data.required} 
//                         type={data.dataType}
//                         value={data.name}
//                         onChange={handleUserInput}
//                         />
//                     </div>
//                   </div>
//                 );
//               })}
//                 <div className="message-detail">
//                   <label>Message:</label>
//                   <textarea maxLength={500} placeholder="Message or project details here..." required></textarea>
//                 </div>
//                 <button type="submit" className="submit-btn">Send</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </ContactStyle>
//   );
// };

// export default Contact;



// MAIN BACKUP
// import React, { useState } from "react";
// import { ContactStyle } from "./ContactStyle";
// import contactData from "../../projects.json";

// const Contact = () => {
//     const [userInput, setUserInput] = useState("");

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         console.log("Contact Input:", setUserInput);
//     }

//     const handleUserInput = (e) => {
//         setUserInput(e.target.value);
//     }

//   return (
//     <ContactStyle>
//       <div className="contact-container" id="contact">
//         <div className="section-title">
//         <h3 className="section-title">Contact</h3>
//         <p className="section-description">
//           Interested in connecting or collaborating on projects? Feel free to
//           send me a message, and I'll respond promptly. If you have an exciting
//           idea that you'd like to bring to life, don't hesitate to reach out.
//           Let's work together to make it happen! Thank you for considering me as
//           your potential partner.
//         </p>
//         </div>
//         <div className="contact-outter">
//           <div className="contact-details">
//             <div className="details">
//               <h3>Location:</h3>
//               <p>Federal Capital Territory - Abuja</p>
//             </div>
//             <div className="details">
//               <h3>Email:</h3>
//               <p>nazanajemba@gmail.com</p>
//             </div>
//             <div className="details">
//               <h3>Call or Whatsapp:</h3>
//               <p>+234 81672 65619</p>
//             </div>
//             <div>
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.84997815848!2d7.293976111023852!3d9.024223146857969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1685570324771!5m2!1sen!2sng"
//                 style={{ border: "0" }}
//                 allowfullscreen=""
//                 loading="lazy"
//               ></iframe>
//             </div>
//           </div>
//           <div>
//             <form className="contact-form" onSubmit={handleFormSubmit}>
//               {contactData.contact.map((data) => {
//                 return (
//                   <div key={data.id}>
//                     <div className="client-contact-detail">
//                       <label>{data.label}:</label>
//                       <input placeholder={data.placeHolder} 
//                         required={data.required} 
//                         type={data.dataType}
//                         value={userInput}
//                         onChange={handleUserInput}
//                         />
//                     </div>
//                   </div>
//                 );
//               })}
//                 <div className="message-detail">
//                   <label>Message:</label>
//                   <textarea maxLength={500} placeholder="Message or project details here..." required></textarea>
//                 </div>
//                 <button type="submit" className="submit-btn">Send</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </ContactStyle>
//   );
// };

// export default Contact;

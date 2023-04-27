import { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { RiSendPlaneLine } from "react-icons/ri";

import "./Contact.css";

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const form = useRef(null);

  const onSubmit = (data) => {
    emailjs.sendForm(
      "service_skgie5y",
      "template_y07lom7",
      form.current,
      "txXHsZ8I-3t8ykKrj"
    );
    reset();
  };

  return (
    <div className="App">
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div className="doubleInput">
          <div className="inputInDouble">
            <label htmlFor="fullname">Name</label>
            <input
              required
              placeholder="Jean Dupont"
              {...register("fullname")}
            />
          </div>
          <div className="inputInDouble">
            <label htmlFor="email">Email</label>
            <input
              required
              placeholder="jean.dupond@mail.com"
              type="email"
              {...register("email")}
            />
          </div>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            required
            className="message"
            placeholder="Hello ! ..."
            {...register("message")}
          />
        </div>
        <button type="submit" className="contactCTA" duration={300}>
          Send
          <RiSendPlaneLine className="arrowIconSend" size="28" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

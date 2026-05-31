import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { RiSendPlaneLine } from "react-icons/ri";
import { HiCheckCircle } from "react-icons/hi";

import "./Contact.css";

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const form = useRef(null);
  const [sent, setSent] = useState(false);

  const onSubmit = () => {
    emailjs.sendForm(
      "service_skgie5y",
      "template_y07lom7",
      form.current,
      "txXHsZ8I-3t8ykKrj"
    );
    reset();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)} className="contactForm">
      <div className="field">
        <label htmlFor="fullname">Name</label>
        <input
          id="fullname"
          required
          placeholder="Jean Dupond"
          {...register("fullname")}
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          required
          placeholder="jean.dupond@mail.com"
          type="email"
          {...register("email")}
        />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          required
          className="message"
          placeholder="Hi Charles! I'd love your help with…"
          {...register("message")}
        />
      </div>
      <button type="submit" className="contactCTA">
        {sent ? (
          <>
            Message sent <HiCheckCircle size="22" />
          </>
        ) : (
          <>
            Send message <RiSendPlaneLine className="arrowIconSend" size="22" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;

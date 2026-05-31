import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { RiSendPlaneLine } from "react-icons/ri";
import { HiCheckCircle, HiX } from "react-icons/hi";
import PanelShell from "../PanelShell";
import { networks } from "../../assets/Data";
import { useBrief } from "../../context/BriefContext";

const ContactPanel = ({ onBack }) => {
  const { brief, dispatch, count, composeMessage } = useBrief();
  const form = useRef(null);
  const [sent, setSent] = useState(false);

  const chips = [
    ...(brief.goal ? [{ type: "goal", value: brief.goal }] : []),
    ...brief.services.map((value) => ({ type: "service", value })),
    ...brief.projects.map((value) => ({ type: "project", value })),
  ];

  const submit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_skgie5y",
      "template_y07lom7",
      form.current,
      "txXHsZ8I-3t8ykKrj"
    );
    setSent(true);
    form.current.reset();
    dispatch({ type: "reset" });
    setTimeout(() => setSent(false), 4500);
  };

  return (
    <PanelShell tag="05" kicker="Start" title="Your brief is ready" onBack={onBack}>
      <div className="contactPanel">
        <div className="briefReview">
          <span className="briefReviewLabel">Composed from your exploration</span>
          {count > 0 ? (
            <div className="dockChips">
              {chips.map((c, i) => (
                <button
                  key={i}
                  className={`dockChip dockChip-${c.type}`}
                  onClick={() => dispatch({ type: c.type, value: c.value })}
                  data-cursor="hover"
                  data-cursor-label="Remove"
                >
                  {c.value} <HiX />
                </button>
              ))}
            </div>
          ) : (
            <p className="briefEmpty">
              Tip: pick a goal on the home hub, then explore <strong>Work</strong> and{" "}
              <strong>Services</strong> — your message writes itself.
            </p>
          )}
          <div className="networks">
            {networks.map((n) => (
              <a
                key={n.name}
                href={n.link}
                target="_blank"
                rel="noreferrer"
                className="networkBtn"
                style={{ "--net-color": n.color }}
                aria-label={n.name}
                data-cursor="hover"
              >
                {n.icon}
              </a>
            ))}
          </div>
        </div>

        <form ref={form} onSubmit={submit} className="contactForm glass">
          <div className="doubleField">
            <div className="field">
              <label htmlFor="fullname">Name</label>
              <input id="fullname" name="fullname" required placeholder="Jean Dupond" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jean.dupond@mail.com"
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="message">Your message (pre-written from your brief)</label>
            <textarea
              id="message"
              name="message"
              className="message"
              required
              key={count + brief.goal}
              defaultValue={composeMessage()}
            />
          </div>
          <button type="submit" className="contactCTA" data-cursor="link" data-cursor-label="Send">
            {sent ? (
              <>
                Message sent <HiCheckCircle size="22" />
              </>
            ) : (
              <>
                Send my brief <RiSendPlaneLine className="arrowIconSend" size="20" />
              </>
            )}
          </button>
        </form>
      </div>
    </PanelShell>
  );
};

export default ContactPanel;

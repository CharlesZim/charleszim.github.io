import { createContext, useContext, useEffect, useReducer } from "react";

const BriefContext = createContext(null);
const STORAGE_KEY = "cz_living_brief_v1";

const initial = { goal: null, services: [], projects: [] };

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...initial, ...JSON.parse(raw) };
  } catch (e) {
    /* ignore */
  }
  return initial;
}

function toggle(list, value) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function reducer(state, action) {
  switch (action.type) {
    case "goal":
      return { ...state, goal: state.goal === action.value ? null : action.value };
    case "service":
      return { ...state, services: toggle(state.services, action.value) };
    case "project":
      return { ...state, projects: toggle(state.projects, action.value) };
    case "reset":
      return { ...initial };
    default:
      return state;
  }
}

export function BriefProvider({ children }) {
  const [brief, dispatch] = useReducer(reducer, undefined, load);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(brief));
    } catch (e) {
      /* ignore */
    }
  }, [brief]);

  const count = (brief.goal ? 1 : 0) + brief.services.length + brief.projects.length;

  const composeMessage = () => {
    const lines = ["Hi Charles,", ""];
    if (brief.goal) lines.push(`I'd like to build ${brief.goal.toLowerCase()}.`);
    if (brief.services.length)
      lines.push(`I'm especially interested in: ${brief.services.join(", ")}.`);
    if (brief.projects.length)
      lines.push(`Work of yours that resonated: ${brief.projects.join(", ")}.`);
    lines.push("", "A bit more about the idea / timeline / budget:", "");
    return lines.join("\n");
  };

  return (
    <BriefContext.Provider value={{ brief, dispatch, count, composeMessage }}>
      {children}
    </BriefContext.Provider>
  );
}

export const useBrief = () => useContext(BriefContext);

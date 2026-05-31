export const NODES = [
  { key: "about", n: "01", label: "About", hint: "Who you'll work with" },
  { key: "work", n: "02", label: "Work", hint: "Apps & sites shipped" },
  { key: "skills", n: "03", label: "Stack", hint: "The full toolkit" },
  { key: "expertise", n: "04", label: "Services", hint: "How I can help" },
  { key: "contact", n: "05", label: "Start", hint: "Build your brief" },
];

// Position on the orbital ring, expressed as percentages of the ring box.
export const ringPos = (i, total) => {
  const a = ((-90 + (360 / total) * i) * Math.PI) / 180;
  return { x: 50 + Math.cos(a) * 38, y: 50 + Math.sin(a) * 38 };
};

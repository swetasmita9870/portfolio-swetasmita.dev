import React from "react";
import { PopupButton } from "react-calendly";

const CalendlyButton = () => {
  return (
    <div className="App">
      <PopupButton
        url="https://calendly.com/swetasmita987/30min"
        rootElement={document.getElementById("body")}
        text="Schedule a Call!"
        styles={{ fontSize: "18px", padding: "8px 40px", background: "var(--l_base)", borderRadius: "6px" }}
      />
    </div>
  );
};

export default CalendlyButton;
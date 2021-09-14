import clipboard from "../images/clipboard.svg";
import { useState } from "react";

function Password({ value }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="password__container">
      <span className="result">{value}</span>
      {value.trim() !== "" ? (
        <img
          src={clipboard}
          alt="clipboard"
          onClick={() => {
            navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
        ></img>
      ) : null}
      {copied ? <div className="copied-popup">Copied!</div> : null}
    </div>
  );
}

export default Password;

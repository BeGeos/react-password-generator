import { useState } from "react";

function Trivia() {
  // Trivia popup state visible/not visible
  const [show, setShow] = useState(false);

  return (
    <span className="trivia">
      Do you want to know more about{" "}
      <span
        className="info"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        passwords
      </span>
      ?
      {show && (
        <div className="trivia__popup">
          <h4>How secure is a secure password?</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa
            aut ab blanditiis eligendi dolor facilis aspernatur, nemo doloremque
            illo!
          </p>
        </div>
      )}
    </span>
  );
}

export default Trivia;

/*
Password Trivia Info - https://www.scientificamerican.com/article/the-mathematics-of-hacking-passwords/
*/

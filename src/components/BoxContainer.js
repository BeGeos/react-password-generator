import { useState } from "react";
import Password from "./Password";
import Form from "./Form";
import Trivia from "./Trivia";

// Generator random character
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

function getRandomSymbol() {
  let symbols = ".:;,-_()[]<>?!{}#*@";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// function testRandom(target, func) {
//   let counter = 0;
//   let rounds = 1000;
//   // Test for end members randomness
//   for (let i = 0; i < rounds; i++) {
//     let result = func();
//     if (result === target) {
//       counter += 1;
//     }
//   }
//   return Math.round((counter / rounds) * 100);
// }

// let test = testRandom("}", getRandomSymbol);

// Function mapper
const functionMapper = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbols: getRandomSymbol,
};

// Generate Random Password
function getRandomPassword(range, len) {
  let result = "";
  for (let i = 0; i < len; i++) {
    let index = Math.floor(Math.random() * range.length);
    let func = functionMapper[range[index]];
    let char = func();
    result += char;
  }

  return result;
}

function filterOptions(options) {
  // Takes an object and returns an array
  let active = [];
  for (let i of Object.keys(options)) {
    if (options[i]) {
      active.push(i);
    }
  }
  return active;
}

function BoxContainer() {
  // States for form inputs
  const [options, setOptions] = useState({
    lower: true,
    upper: false,
    number: false,
    symbols: false,
  });

  const [length, setLength] = useState(24);
  const [password, setPassword] = useState("");

  function handleOptionsChange(target) {
    setOptions({ ...options, [target]: !options[target] });
  }

  function handleLengthChange(length) {
    if (length >= 4 || length <= 36) {
      setLength(+length);
    }
    return;
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    let active = filterOptions(options);
    if (active.length === 0 || length < 4 || length > 36) {
      return;
    }

    let password = getRandomPassword(active, length);
    setPassword(password);
  }

  return (
    <div className="box__container">
      <h3>Password Generator</h3>
      <Password value={password} />
      <Trivia />
      <Form
        options={options}
        handleOptionsChange={handleOptionsChange}
        length={length}
        handleLengthChange={handleLengthChange}
        handleSubmitForm={handleSubmitForm}
      />
    </div>
  );
}

export default BoxContainer;

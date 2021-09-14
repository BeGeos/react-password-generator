function Form({
  options,
  length,
  handleOptionsChange,
  handleLengthChange,
  handleSubmitForm,
}) {
  return (
    <div>
      <form onSubmit={(e) => handleSubmitForm(e)}>
        <div className="form__input">
          <label htmlFor="length">Password Length</label>
          <input
            type="number"
            name="length"
            id="length"
            min="4"
            max="36"
            value={length}
            style={{ minHeight: 24, paddingLeft: 5 }}
            onChange={(e) => {
              handleLengthChange(e.target.value);
            }}
          ></input>
        </div>
        <div className="form__input">
          <label htmlFor="lower">Add Lowercase letters</label>
          <input
            type="checkbox"
            name="lower"
            id="lower"
            checked={options.lower}
            onChange={(e) => {
              handleOptionsChange(e.target.name);
            }}
          ></input>
        </div>

        <div className="form__input">
          <label htmlFor="upper">Add Uppercase letters</label>
          <input
            type="checkbox"
            name="upper"
            id="upper"
            checked={options.upper}
            onChange={(e) => {
              handleOptionsChange(e.target.name);
            }}
          ></input>
        </div>

        <div className="form__input">
          <label htmlFor="number">Add Numbers</label>
          <input
            type="checkbox"
            name="number"
            id="number"
            checked={options.numbers}
            onChange={(e) => {
              handleOptionsChange(e.target.name);
            }}
          ></input>
        </div>

        <div className="form__input">
          <label htmlFor="symbols">Add Symbols</label>
          <input
            type="checkbox"
            name="symbols"
            id="symbols"
            checked={options.symbols}
            onChange={(e) => {
              handleOptionsChange(e.target.name);
            }}
          ></input>
        </div>
        <button className="btn">Generate Password</button>
      </form>
    </div>
  );
}

export default Form;

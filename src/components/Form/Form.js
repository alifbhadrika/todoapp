import React from "react";

function Form(props) {
  return (
    <>
      <input
        type="text"
        placeholder="Mau ngapain?"
        value={props.text}
        onChange={props.textHandler}
      ></input>
      <button type="submit" onClick={props.submitHandler}>
        Add todo ke-{props.count}
      </button>
    </>
  );
}

export default Form;

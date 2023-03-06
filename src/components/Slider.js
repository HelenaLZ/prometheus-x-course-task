import React, { useState, useEffect } from "react";

export default function Slider(props) {
  const [value, setValue] = useState(Number(props.value));
  const price = Number(props.price);
  

  if (value < 0) {
    setValue(0);
  }

  if (value > 42) {
    setValue(42);
  }

  useEffect(function DisabledDangerButton() {
    if (value <= 0) {
      document.getElementsByClassName(
        "btn-outline-danger"
      )[0].disabled = true;
    } else {
        document.getElementsByClassName(
            "btn-outline-danger"
          )[0].disabled = false;
    }
  });

  useEffect(function DisabledSuccessButton() {
    if (value >= 42) {
      document.getElementsByClassName(
        "btn-outline-success"
      )[0].disabled = true;
    } else {document.getElementsByClassName(
        "btn-outline-success"
      )[0].disabled = false;}
  });

  return (
    <div className={props.className}>
      
      <div className="d-flex justify-content-between mt-2">
        <button
          onClick={() => setValue(value - 1)}
          type="button"
          className="btn-outline-danger"
        >
          -
        </button>
        <span className="count">{value}</span>
        <button
          onClick={() => setValue(value + 1)}
          type="button"
          className="btn-outline-success"
        >
          +
        </button>
      </div>

      <div className="total-price">Total price: $ {(price*value).toFixed(2)}</div>
    </div>
    

  );
}

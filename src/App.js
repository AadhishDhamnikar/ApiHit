import React from "react";

export default function App(props) {
  console.log("Props", props);
  return (
    <div className="App">
      <button
        onClick={() => {
          props.hitIt();
        }}
      >
        Hit Api
      </button>
      <button
        onClick={() => {
          props.counterAction();
        }}
      >
        counter
      </button>
      <button
        onClick={() => {
          props.counterSubAction();
        }}
      >
        subtract
      </button>
      <button
        onClick={() => {
          props.copyHitIt();
        }}
      >
        Practice Api hit
      </button>
      <div>{props.counter}</div>
      <div>
        {props.data.map((item, index) => {
          return <div key={index}>{item.title}</div>;
        })}
      </div>
      <div>
        {props.dataCopy.map((item1, index1) => {
          return <div key={index1}>{item1.title}</div>;
        })}
      </div>
    </div>
  );
}

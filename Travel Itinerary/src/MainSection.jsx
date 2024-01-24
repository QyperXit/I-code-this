import React from "react";
import CheckIn from "./cardComponnents/CheckIn";
import CodeConfirmation from "./cardComponnents/CodeConfirmation";
import Priority from "./cardComponnents/Priority";
import Upgrade from "./cardComponnents/Upgrade";
import data from "./data";

const MainSection = (props) => {
  const firstItem = data[0];

  // Map confirmation code only if the first item exists and has a confirmation code
  const confirmationCode =
    firstItem && props.flight === firstItem.flight && firstItem.confirmation ? (
      <CodeConfirmation
        confirmation={firstItem.confirmation}
        button={firstItem.button}
      />
    ) : null;

  const secondItem = data[1];

  // Map priority component only if the second item exists and has a priority
  const process =
    secondItem && props.flight === secondItem.flight && secondItem.priority ? (
      <Priority priority={secondItem.priority} button={secondItem.button} />
    ) : null;

  let thirdItem = data[2];
  const checkPass =
    thirdItem.flight && props.flight === thirdItem.flight && thirdItem.pass ? (
      <CheckIn pass={thirdItem.pass} />
    ) : null;

  let forthItem = data[3];

  const bags =
    forthItem.flight && props.flight === forthItem.flight && forthItem.bags ? (
      <Upgrade bags={forthItem.bags} button={forthItem.button} />
    ) : null;

  return (
    <div className="card">
      <i className="fa-solid fa-circle-check tick"></i>
      <h2 className="event">{props.flight}</h2>
      {confirmationCode}
      {process}
      {checkPass}
      {bags}
      {/* <Priority /> */}
      {/* <div className="booking-summary">{props.button}</div> */}
      {/* <CheckIn /> */}
      {/* <Upgrade /> */}
    </div>
  );
};

export default MainSection;

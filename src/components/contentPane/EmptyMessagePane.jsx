import React from "react";
import { Message } from "semantic-ui-react";

const EmptyMessagePane = (props) => {
  return (
    <>
      <Message success>
        <Message.Header>No works in the date '{props.workDate}'</Message.Header>
      </Message>
    </>
  );
};

export default EmptyMessagePane;

import React from "react";

interface IProps {
  text: string;
}

function LowercaseConverter({ text }: IProps) {
  return <div>{text.toLowerCase()}</div>;
}

export default LowercaseConverter;

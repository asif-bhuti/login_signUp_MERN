import React from "react";

import styled from "styled-components";
import * as v from "./variables";

export const StyledInputField = styled.input`
  display: block;
  width: 100%;
  background-color: ${v.primaryBGcolor};
  height: 40px;
  border-radius: 5px;
  border: 1px solid ${v.secondaryBGcolor};
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    box-shadow: ${v.neuMorphicInner};
    transition: ease-in 0.3s;
  }
`;

export const InputField = ({ className, type, name, onChange, value }) => {
  return (
    <StyledInputField
      className={className}
      type={type}
      name={name}
      onChange={onChange}
      value={value}
    ></StyledInputField>
  );
};

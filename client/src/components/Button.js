import React from "react";
import styled from "styled-components";
import * as v from "./variables";

const StyledButton = styled.button`
  background: transparent;
  white-space: nowrap;
  padding: 4px 30px;
  margin: 5px 10px;
  color: ${v.primaryTextColor};
  font-size: 18px;
  font-weight: 600;
  outline: none;
  border: 2px solid ${v.primaryTextColor};
  border-radius: 100px;
  cursor: pointer;
  &.primary {
    background-color: ${v.primaryTextColor};
    color: ${v.primaryBGcolor};
    border: 2px solid ${v.primaryTextColor};
    &:hover {
      background-color: transparent;
      color: ${v.primaryTextColor};
    }
  }
  &:hover {
    transition: all 0.3s ease-out;
    background: ${v.primaryTextColor};
    color: ${v.primaryBGcolor};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Button = ({ children, className, type, name, value, onClick }) => {
  return (
    <StyledButton
      className={className}
      type={type}
      name={name}
      value={value}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

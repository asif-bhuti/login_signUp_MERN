import React from "react";
import styled from "styled-components";
import * as v from "./variables";

const StyledText = styled.p`
  font-family: Poppins;
  font-size: 1rem;
  font-weight: 400;
  color: ${v.secondaryTextColor};
  margin: 1px 0 0 0;
  &.title {
    font-family: Nunito;
    font-size: 1.2rem;
    font-weight: 600;
    color: ${v.primaryTextColor};
  }
  &.small {
    font-size: 0.9rem;
  }
`;

export const Text = ({ children, className }) => {
  return <StyledText className={className}>{children}</StyledText>;
};

import React from "react";
import styled from "styled-components";
import * as v from "./variables";

const StyledCard = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 10px;
  background: #eee;
  border-radius: 10px;
  box-shadow: ${v.neuMorphicOuter};
`;

export const Card = ({ className, children }) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};

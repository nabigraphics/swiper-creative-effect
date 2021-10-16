import React, { FC } from "react";
import styled from "@emotion/styled";

const Item: FC<{ color: string }> = ({ color, children }) => {
  return (
    <StyledWrapper color={color}>
      <div>{children}</div>
    </StyledWrapper>
  );
};

export default Item;

const StyledWrapper = styled.div<{ color: string }>`
  position: relative;
  overflow: hidden;

  width: 100%;
  padding-bottom: 100%;
  border-radius: 100%;

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${({ color }) => color};
    color: #242424;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
  }
`;

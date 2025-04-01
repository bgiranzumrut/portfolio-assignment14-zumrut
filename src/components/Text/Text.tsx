// src/components/Text/Text.tsx
import React from "react";
import styled from "styled-components";
import type { TextProps } from "./Text.types";

const StyledText = styled.p<{ $color?: string; $disabled?: boolean }>`
  font-size: 1rem;
  color: ${({ $color, $disabled }) => ($disabled ? "#999" : $color || "#333")};
  opacity: ${({ $disabled }) => ($disabled ? "0.6" : "1")};
  user-select: ${({ $disabled }) => ($disabled ? "none" : "auto")};

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const Text: React.FC<TextProps> = ({ children, color, disabled }) => {
  return (
    <StyledText $color={color} $disabled={disabled}>
      {children}
    </StyledText>
  );
};

export default Text;

import { Link as LinkS } from "react-scroll";
import styled from "styled-components";
import { PalleteColors } from "../../theme";

export const Button = styled(LinkS)`
  border-radius: 50px;
  background: ${({ color }) => (color ? color : PalleteColors.primary)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? PalleteColors.dark : "#fff")};
`;

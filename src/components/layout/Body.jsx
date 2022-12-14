import PropTypes from "prop-types";
import Header from "./Header";
import SubHeader from "./SubHeader";
import { FlexBox } from "../../styles";
import styled from "styled-components";
import { Input } from "../atoms";

const StyledBody = styled(FlexBox)`
  min-height: 100vh;
  width: 100%;
`;
const Childrens = styled.div`
  flex-grow: 1;
`;

function Body({ children }) {
  return (
    <StyledBody>
      <Header />
      {children}
    </StyledBody>
  );
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Body;

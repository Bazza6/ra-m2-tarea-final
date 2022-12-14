import React from "react";
import styled from "styled-components";
import { dimensions, FlexBox } from "../../styles";

const SubHeaderStyled = styled(FlexBox)`
  border: solid red 1px;
  padding: ${({ padding }) => padding || dimensions.padding};
  height: 5rem;
  background-color: lightblue;
`;

// function SubHeader({ ...props }) {
//   return <SubHeaderStyled {...props}>Subheader</SubHeaderStyled>;
// }
const SubHeader = ({ children }) => {
  return (
    <SubHeaderStyled
      direction="row"
      justify="flex-start"
      align="center"
      paddingLeft={dimensions.padding}
    >
      {children}
    </SubHeaderStyled>
  );
};
export default styled(SubHeader)``;

// import React from "react";
// import styled from "styled-components";
// import { FlexBox } from "../../style/FlexBox";
// import { Input } from "../atoms/input";
// import { dimension } from "../../style/dimension";

// const SubHeaderStyle = styled(FlexBox)`
//   background-color: #d7ecfa;
//   height: 5rem;
// `;

// export const SubHeader = () => {
//   return (
//     <SubHeaderStyle
//       direction="row"
//       justify="flex-start"
//       align="center"
//       paddingLeft={dimension.padding}
//     >
//       <Input />
//       <Input />
//     </SubHeaderStyle>
//   );
// };

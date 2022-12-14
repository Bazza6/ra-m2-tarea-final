import styled from "styled-components";
import { colors, textDimensions } from "../../styles";

const StyledHeading = styled.h1`
  color: ${({ color }) => color || colors.font.headings};
  font-size: ${({ fontSize }) => fontSize || textDimensions.font.h1};
`;

const Title = ({ level = 1, ...rest }) => {
  return (
    <StyledHeading
      as={`h${level}`}
      //fontSize={`${textDimensions.font.h{level}}`}
      fontSize={textDimensions.font[`h${level}`]}
      {...rest}
    />
  );
};

export default styled(Title)``;

// /* export const TitleH1 = styled.h1`
//   color: ${({ color }) => color || colors.font.headings};
//   font-size: ${({ fontSize }) => fontSize || dimensions.font.h1};
// `
//  */
// // All headings use the same styled-component "Heading" function
// const StyledHeading = styled.h1`
//   //font-size: ${({ h }) => dimensions.font.h}; // <- dynamic font size
//   // font-weight: 300;
//   // margin: 0;
// `;

// export const Title = ({ h = 1, text = "hhh" }) => {
//   return (
//     <StyledHeading as={`h${h}`} h={h}>
//       {text}
//     </StyledHeading>
//   );
// };

// export default styled(Title)``

// export const TitleH1 = styled.h1`
//   color: ${({ color }) => color || colors.font.headings};
//   font-size: ${({ fontSize }) => fontSize || dimensions.font.h1};
// `
// export const TitleH2 = styled.h1`
//   color: ${({ color }) => color || colors.font.headings};
//   font-size: ${({ fontSize }) => fontSize || dimensions.font.h2};
// `
// export const TitleH3 = styled.h1`
//   color: ${({ color }) => color || colors.font.headings};
//   font-size: ${({ fontSize }) => fontSize || dimensions.font.h3};
// `
// export const TitleH4 = styled.h1`
//   color: ${({ color }) => color || colors.font.headings};
//   font-size: ${({ fontSize }) => fontSize || dimensions.font.h4};
// `
// export const TitleH5 = styled.h1`
//   color: ${({ color }) => color || colors.font.headings};
//   font-size: ${({ fontSize }) => fontSize || dimensions.font.h5};
// `
// export const TitleH6 = styled.h1`
//   color: ${({ color }) => color || colors.font.headings};
//   font-size: ${({ fontSize }) => fontSize || dimensions.font.h6};
// `

import styled from "styled-components";

const grid = styled.div`
display: grid;
grid-template-columns: ${({ column }) => column || 'auto auto auto'};
grid-template-rows: ${({ row }) => row || ''};
grid-gap: ${({ gap }) => gap || '1rem'};
`

export default grid;
import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 1.5rem;
  width: 90%;
`;
export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
   width: 23px;
   height: 23px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: ${props => props.checked ? '#B4B5B7' : '#CADDF1'};
   transition: all 150ms;
`;
export const Text = styled.label`
    color: ${props => props.defaultChecked ? '#B4B5B7' : '#CADDF1'};
    text-decoration: ${props => props.defaultChecked ? 'line-through' : ''};
    font-weight: 300;
`;

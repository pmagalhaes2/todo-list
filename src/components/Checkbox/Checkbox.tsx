import { useState } from "react";
import { CheckboxContainer, StyledCheckbox, Text } from "./styles";

export const Checkbox = (props: any) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };
  return (
    <CheckboxContainer>
      <StyledCheckbox checked={checked} onChange={handleChecked} />
      <Text defaultChecked={checked}>{props.text}</Text>
    </CheckboxContainer>
  );
};

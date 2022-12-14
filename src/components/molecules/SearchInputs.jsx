import React from "react";
import { FlexBox } from "../../styles";
import { Button, Label, Input } from "../atoms";

export const SearchInputs = ({
  id1,
  id2,
  placeholder1,
  placeholder2,
  type1,
  type2,
  textButton,
}) => {
  return (
    <FlexBox direction="row">
      <Label htmlFor={id1}>{id1}</Label>
      <Input placeholder={placeholder1} id={id1} type={type1} />
      <Label htmlFor={id2}>{id2}</Label>
      <Input placeholder={placeholder2} id={id2} type={type2} />
      <Button>{textButton}</Button>
    </FlexBox>
  );
};

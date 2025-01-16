import { Typography as MUITypography } from "@mui/material";
import { type TypographyProps } from "@mui/material/Typography/Typography";
import React from "react";

interface Props extends TypographyProps {
  className?: string;
  color?: string;
}; 

const Typography = ({ children, className, color = "text.primary", ...rest }: Props): React.ReactElement => {
  return (
    <MUITypography {...rest} classes={{ root: className }} color={color}>
      {children}
    </MUITypography>
  );
}

export default Typography;
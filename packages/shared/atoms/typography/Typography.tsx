import React from "react";
import { Typography as MUITypography } from "@mui/material";
import { type TypographyProps  } from "@mui/material/Typography/Typography";

interface Props extends TypographyProps {
  className?: string;
}; 

const Typography = ({ children, className, ...rest }: Props): React.ReactElement => {
  return (
    <MUITypography {...rest} classes={{ root: className }}>
      {children}
    </MUITypography>
  );
}

export default Typography;
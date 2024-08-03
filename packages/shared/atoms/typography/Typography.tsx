import React from "react";
import { Typography as MUITypography } from "@mui/material";
import { type TypographyProps  } from "@mui/material/Typography/Typography";

type Props = TypographyProps; 

const Typography = ({ children, ...rest }: Props): React.ReactElement => {
  return (
    <MUITypography {...rest}>
      {children}
    </MUITypography>
  );
}

export default Typography;
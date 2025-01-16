import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { TextField, TextFieldClasses, TextFieldVariants } from "@mui/material";
import { useState } from "react";

type PasswordFieldProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  variant?: TextFieldVariants;
  helperText?: string;
  error?: boolean; 
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  classes?: Partial<TextFieldClasses>;
};

const PasswordField = ({
  value,
  setValue,
  variant = "filled",
  label,
  helperText = "",
  error = false,
  onBlur,
  classes = {}
}: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <TextField
      label={label}
      value={value}
      variant={variant}
      onChange={(e) => setValue(e?.target?.value)}
      helperText={helperText}
      error={error}
      classes={classes}
      onBlur={onBlur}
      type={showPassword ? 'text': 'password'}
      InputProps={{
        endAdornment: showPassword ? (
          <VisibilityIcon onClick={() => setShowPassword(false)} />
        ) : (
          <VisibilityOffIcon onClick={() => setShowPassword(true)} />
        ),
      }}
    />
  );
};

export default PasswordField;

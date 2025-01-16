import { TextField } from "@mui/material";
import { useState } from "react";

const ClientLogin = () => {
  const [domain, setDomain] = useState<string>("");

  return (
    <div>
      <TextField
        label="Organisation Domain"
        value={domain}
        variant="filled"
        onChange={(e) => setDomain(e?.target?.value)}
      />

      <TextField
        label="Password"
        value={domain}
        variant="filled"
        onChange={(e) => setDomain(e?.target?.value)}
      />
    </div>
  );
};

export default ClientLogin;

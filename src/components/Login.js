import * as React from "react";
import { AppProvider, SignInPage } from "@toolpad/core";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { useContext } from "react";
import { InputContext } from "../context/InputPrivider";

// preview-start
const providers = [{ id: "credentials", name: "Email and Password" }];
// preview-end

export default function CredentialsSignInPage() {
  const [login, setLogIn] = useContext(InputContext);
  const signIn = () => {
    setLogIn(!login);
  };
  const theme = useTheme();
  return (
    // preview-start
    <Box
      sx={{
        borderRadius: 1,
        bgcolor: "lightblue",
      }}
    >
      <AppProvider theme={theme}>
        <SignInPage signIn={signIn} providers={providers} />
      </AppProvider>
    </Box>
    // preview-end
  );
}

import * as React from "react";
import { AppProvider, SignInPage } from "@toolpad/core";
import { useTheme } from "@mui/material/styles";

// preview-start
const providers = [{ id: "credentials", name: "Email and Password" }];
// preview-end

const signIn = () => {
  console.log("object");
};

export default function CredentialsSignInPage() {
  const theme = useTheme();
  return (
    // preview-start
    <AppProvider theme={theme}>
      <SignInPage signIn={signIn} providers={providers} />
    </AppProvider>
    // preview-end
  );
}

import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { v4 as uuidV4 } from "uuid";
const Login = ({ setId }) => {
  function createId() {
    setId(uuidV4());
  }
  return (
    <Box sx={{ width: "600px" }}>
      <TextField
        id="outlined-basic"
        label="Enter Your Id"
        variant="outlined"
        fullWidth
      />
      <Box sx={{ display: "flex", gap: 4, mt: 2 }}>
        <Button variant="contained">Login</Button>
        <Button variant="outlined" onClick={createId}>
          Create New Id
        </Button>
      </Box>
    </Box>
  );
};

export default Login;

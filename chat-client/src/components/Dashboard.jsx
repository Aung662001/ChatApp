import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddContact from "./AddContact";
import Conversation from "./Conversation";

const CONS_KEY = "Conversation";
const CONTACTS = "Contacts";
const ADD_CONV = "Add Conversation";
const ADD_CONT = "Add Contact";
function Dashboard({ id }) {
  const [nav1, setNav1] = React.useState(true);
  const [openContact, setOpenContact] = React.useState(false);
  const [openConversation, setOpenConversation] = React.useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", bgcolor: "black" }}>
      <AppBar component="nav">
        <Toolbar>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <button
              style={{
                color: "#fff",
                backgroundColor: "#1976D2",
                border: nav1 ? "1px solid black" : "none",
              }}
              onClick={() => setNav1(true)}
            >
              Conversations
            </button>
            <button
              style={{
                color: "#fff",
                backgroundColor: "#1976D2",
              }}
              onClick={() => {
                setNav1(false);
              }}
            >
              Contacts
            </button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          p: 3,
          color: "white",
          width: "400px",
          height: "80vh",
        }}
      >
        {nav1 ? <Conversation /> : "Contacts"}
      </Box>
      {nav1 ? (
        <Button
          variant="contained"
          onClick={() => {
            setOpenContact(true);
          }}
        >
          Add Conversation
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={() => {
            setOpenContact(true);
          }}
        >
          Add Contacts
        </Button>
      )}
      <AddContact open={openContact} setOpen={setOpenContact} />
    </div>
  );
}

export default Dashboard;

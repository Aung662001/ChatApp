const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
require("express-ws")(app);

const clients = [];
app.ws("/connect", (wss, res) => {
  wss.on("message", (input) => {
    const { uid, msg } = JSON.parse(input);
    if (!clients.find((client) => client.uid == uid)) {
      wss.uid = uid;
      clients.push(wss);
    }
    clients.map((client) => client.send(`${uid}:${msg}`));
  });
});

app.listen(8000, () => {
  console.log("Server is running at port : 8000");
});

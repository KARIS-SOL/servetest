const express = require("express");

const app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", (rep, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 배포 서버실행 ");
});

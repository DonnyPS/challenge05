const router = require("express").Router();

//app.use(express.static("public"));
router.get("/", (req, res) => {
  res.render("login", {
    title: "Login Masuk",
  });
});

router.get("/main", (req, res) => {
  res.render("main", {
    title: "Main",
  });
});

router.get("/game", (req, res) => {
  res.render("game", {
    title: "game",
  });
});

router.post("/main", (req, res) => {
  const loginReq = req.body;
  if (loginReq.username !== userData.username) {
    res.status(400).send({
      message: "Username is not registered",
    });
  } else if (loginReq.password !== userData.password) {
    res.status(400).send({ message: "Password is incorrect" });
  }
  res.status(200).send({
    message: "Login Successful",
    data: userData,
  });
});

module.exports = router;

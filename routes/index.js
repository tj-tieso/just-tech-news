const router = require("express").Router();

const apiRoutes = require("./api");

// prefix apiRoutes
router.use("/api", apiRoutes);

// if a request not an endpoint that does not exist
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;

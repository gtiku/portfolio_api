const router = require("express").Router();
const projectsController = require("../controllers/projectsController");

router
  .route("/")
  .get(projectsController.getAllProjects)
  .post(projectsController.postProject);

router
  .route("/:id")
  .get(projectsController.getSingleProject)
  .put(projectsController.updateProject)
  .delete(projectsController.deleteProject);

module.exports = router;

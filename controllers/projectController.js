const projectModel = require("../models/projectModel");

async function getAllProjects(req, res) {
  try {
    const projects = await projectModel.getAllProjects();
    if (projects.length > 0) {
      res.status(200).json(projects);
    } else {
      res.status(404).json({ code: 404, message: "No se encontraron proyectos" });
    }
  } catch (error) {
    res.status(500).json({ code: 500, message: error.message });
  }
}

async function createProject(req, res) {
  try {
    const newProject = await projectModel.createProject(req.body);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ code: 500, message: error.message });
  }
}

module.exports = {
  getAllProjects,
  createProject
};

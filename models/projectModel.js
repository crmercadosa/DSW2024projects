const { v4: uuidv4 } = require("uuid");
const db = require("../firebase/fireBaseConfig");

async function getAllProjects() {
  const projectsRef = db.collection('projects');
  const snapshot = await projectsRef.get();

  if (snapshot.empty) {
    return [];
  }

  const projects = [];
  snapshot.forEach(doc => {
    projects.push({ id: doc.id, ...doc.data() });
  });

  return projects;
}

async function createProject(data) {
  const newProject = {
    name: data.name,
    description: data.description,
    startDate: data.startDate,
    endDate: data.endDate,
    status: data.status,
    budget: data.budget
  };
  
  const projectRef = await db.collection('projects').add(newProject);
  return { id: projectRef.id, ...newProject };
}

module.exports = {
  getAllProjects,
  createProject
}

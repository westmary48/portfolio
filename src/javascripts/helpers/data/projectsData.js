import Axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  Axios.get(`${firebaseUrl}/projects.json`)
    .then((results) => {
      const projectResults = results.data;
      const projects = [];
      Object.keys(projectResults).forEach((projectId) => {
        projectResults[projectId].id = projectId;
        projects.push(projectResults[projectId]);
      });
      resolve(projects);
    })
    .catch(err => reject(err));
});

export default { getProjects };

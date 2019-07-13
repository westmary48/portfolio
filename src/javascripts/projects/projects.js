import projectData from '../helpers/data/projectsData';

import util from '../helpers/util';


const createProjectCards = () => {
  projectData.getProjects()
    .then((projects) => {
      let domString = '';
      for (let i = 0; i < projects.length; i += 1) {
        if (projects[i].available === true) {
          domString += '<div class = "projectsPage col">';
          domString += `<h5 class = "projectTitle"><strong>${projects[i].title}</strong></h5> `;
          domString += `<h5 class = "description">DESCRIPTION: ${projects[i].description}<h5>`;
          domString += `<h5 class = "technologiesUsed">TECHNOLOGIES USED: ${projects[i].technologiesUsed}<h5>`;
          domString += `<a class="links" href="${projects[i].url}" target="_blank">${projects[i].title}</a><br>`;
          domString += `<a class="links" href="${projects[i].githubUrl}" target="_blank">GitHub</a>`;
          domString += '</div>';
        }
      }
      util.printToDom('projectsPage', domString);
    }).catch(err => console.error('projects not showing up', err));
};

export default { createProjectCards };

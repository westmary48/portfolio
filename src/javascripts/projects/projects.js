import projectData from '../helpers/data/projectsData';

import util from '../helpers/util';


const createProjectCards = () => {
  let domString = '';
  projectData.getProjects()
    .then((projects) => {
      projects.forEach((project) => {
        domString += '<div class = "projectsPage">';
        domString += `<h3>${project.title}</h3> `;
        domString += `<img>${project.screenshot}</img> `;
        domString += `<h3>${project.description}<h3>`;
        domString += `<h3>${project.technologiesUsed}<h3>`;
        domString += `<h3>${project.available}<h3>`;
        domString += `<a href>${project.url}</a>`;
        domString += `<a href>${project.githubUrl}</a>`;
        domString += '</div>';
      });
      util.printToDom('projectsPage', domString);
    });
};

export default { createProjectCards };

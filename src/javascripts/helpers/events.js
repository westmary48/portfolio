import projects from '../projects/projects';

const addEvents = () => {
  document.getElementById('navToBio').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('technologiesPage').classList.add('hideStuff');
    document.getElementById('projectsPage').classList.add('hideStuff');
    document.getElementById('bioPage').classList.remove('hideStuff');
  });
  document.getElementById('navToProjects').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('technologiesPage').classList.add('hideStuff');
    document.getElementById('projectsPage').classList.remove('hideStuff');
    document.getElementById('bioPage').classList.add('hideStuff');
  });
  document.getElementById('navToTechnologies').addEventListener('click', (e) => {
    projects.createProjectCards();
    e.preventDefault();
    document.getElementById('bioPage').classList.add('hideStuff');
    document.getElementById('projectsPage').classList.add('hideStuff');
    document.getElementById('technologiesPage').classList.remove('hideStuff');
  });
};

export default { addEvents };

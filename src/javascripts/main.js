import 'bootstrap';

import events from './helpers/events';
import './styles/main.scss';
import projects from './projects/projects';

const init = () => {
  events.addEvents();
  projects.createProjectCards();
};

init();

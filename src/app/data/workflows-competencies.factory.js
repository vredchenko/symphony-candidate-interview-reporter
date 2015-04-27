'use strict';
//ngInject
function WorkflowsCompetenciesFactory() {
  return {
    data: {
      name: 'Workflows and Tools',
      description: '',
      drilldown: [
        {
          name: 'Processes',
          description: 'Scrum, Kanban, Waterfall, Team work/size, Work with QA'
        },
        {
          name: 'Management tools',
          description: 'Experience with things like: Jira, Pivotal, Redmine, BaseCamp, Mantis, etc'
        },
        {
          name: 'Business communication',
          description: ''
        },
        {
          name: 'Continuous Integration',
          description: 'Experience with Bamboo, Jenkins or similar'
        },
        {
          name: 'Version control',
          description: 'Experience with Git, SVN, Mercurial'
        },
        {
          name: 'TDD',
          description: 'Understanding TDD, BDD, etc'
        },
        {
          name: 'Task runners and workflow automation',
          description: 'Experience with grunt, gulp or equivalent'
        }
      ]
    }
  };
}

export default WorkflowsCompetenciesFactory;
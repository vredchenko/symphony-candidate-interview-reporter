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
          description: 'Eperience with Scrum, Kanban, Waterfall, Team work/size, working with QAs and BAs'
        },
        {
          name: 'Management tools',
          description: 'Experience with project management and bug-tacking software',
          items: [
            'Jira',
            'Pivotal',
            'Redmine',
            'BaseCamp',
            'Mantis'
          ]
        },
        {
          name: 'Business communication',
          description: 'Experience in verbal and written technical communication'
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
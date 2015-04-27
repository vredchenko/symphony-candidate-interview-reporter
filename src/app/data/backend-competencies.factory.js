'use strict';
//ngInject
function BackendCompetenciesFactory() {
  return {
    data: {
      name: 'Backend Web Development',
      description: 'Ipsum',
      drilldown: [
        {
          name: 'Java',
          description: ''
        },
        {
          name: 'Ruby',
          description: ''
        },
        {
          name: '.NET',
          description: ''
        },
        {
          name: 'Python',
          description: ''
        },
        {
          name: 'SQL',
          description: ''
        },
        {
          name: 'NoSQL',
          description: ''
        },
        {
          name: 'In-memory storage',
          description: 'e.g. Reddis, Memcached'
        },
        {
          name: 'PHP',
          description: '',
          drilldown: [
            {
              name: 'Drupal',
              description: ''
            },
            {
              name: 'Wordpress',
              description: ''
            },
            {
              name: 'Symphony2',
              description: ''
            },
            {
              name: 'Zend',
              description: ''
            },
            {
              name: 'CodeIgniter',
              description: ''
            }
          ]
        }
      ]
    }
  };
}

export default BackendCompetenciesFactory;
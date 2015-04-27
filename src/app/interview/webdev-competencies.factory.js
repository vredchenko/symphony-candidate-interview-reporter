'use strict';
//ngInject
function CompetenciesFactory() {
  return {
    webDev: [
      {
        name: 'HTML/CSS',
        description: 'This section focuses on understanding of markup and styling strategies for a range of web devices',
        drilldown: [
          {
            name: 'Web Semantics',
            description: 'Lean HTML, microformats'
          },
          {
            name: 'Responsive/Adaptive',
            description: '',
            drilldown: [
              {
                name: 'Mobile browser experience',
                description: ''
              },
              {
                name: 'Media Queries',
                description: ''
              }
            ]
          },
          {
            name: 'Cross Browser Compatibility',
            description: ''
          },

        ]
      },
      {
        name: 'JavaScript',
        description: 'Ipsum',
        drilldown: [
          {
            name: 'Language Core',
            description: 'foo bar'
          },
          {
            name: 'NodeJS',
            description: 'bar foo'
          }
        ]
      },
      {
        name: 'Backend Web Development',
        description: 'Ipsum',
        drilldown: []
      },
      {
        name: 'Systems/DevOps/Architecture',
        description: 'Ipsum',
        drilldown: []
      },
      {
        name: 'Workflows and Tools',
        description: 'Ipsum',
        drilldown: []
      }
      
    ]
  };
}
export default CompetenciesFactory;
'use strict';
//ngInject
function HTMLCSSCompetenciesFactory() {
  return {
    data: {
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
        {
          name: 'Grid Layouts',
          description: '',
          drilldown: [
            {
              name: 'Bootstrap 2/3',
              description: ''
            },
            {
              name: 'Foundation',
              description: ''
            }
          ]
        },
        {
          name: 'CSS meta-languages',
          description: '',
          drilldown: [
            {
              name: 'LESS',
              description: ''
            },
            {
              name: 'SASS',
              description: ''
            }
          ]
        }

      ]
    }
  };
}

export default HTMLCSSCompetenciesFactory;
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
          description: 'Lean HTML, microformats, aria, accessibility and web standards'
        },
        {
          name: 'Responsive/Adaptive',
          description: 'Experience with developing adaptive web layouts for desktop and mobile'
        },
        {
          name: 'Cross Browser Compatibility',
          description: 'Experiene in creating cross-browser web applications'
        },
        {
          name: 'Grid Layouts',
          description: 'Knowledge of grid layout systems, e.g. Bootstrap or Foundation'
        },
        {
          name: 'CSS meta-languages',
          description: 'Experience with various CSS meta-languages and pre-proccessors',
          items: [
            'LESS',
            'SASS',
            'Compass',
            'Stylus'
          ]
        }

      ]
    }
  };
}

export default HTMLCSSCompetenciesFactory;
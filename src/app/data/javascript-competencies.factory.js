'use strict';
//ngInject
function JavascriptCompetenciesFactory() {
  return {
    data: {
      name: 'Javascript',
      description: '',
      drilldown: [
        {
          name: 'Language Core',
          description: '',
          drilldown: [
            {
              name: 'Data Types',
              description: ''
            },
            {
              name: 'Functions and Scope',
              description: ''
            },
            {
              name: 'Prototypes/Inheritance',
              description: ''
            },
            {
              name: 'Asynchronous/Promises',
              description: ''
            },
            {
              name: 'Harmony (ES6)',
              description: ''
            }
          ]
        },
        {
          name: 'Frameworks and Libraries',
          description: '',
          drilldown: [
            {
              name: 'AngularJS',
              description: ''
            },
            {
              name: 'React / Flux',
              description: ''
            },
            {
              name: 'Backbone',
              description: ''
            },
            {
              name: 'ExtJS',
              description: ''
            },
            {
              name: 'KnockoutJS',
              description: ''
            },
            {
              name: 'MeteorJS',
              description: ''
            },
            {
              name: 'JQuery',
              description: ''
            },
            {
              name: 'Modernizr',
              description: ''
            }
          ]
        },
        {
          name: 'NodeJS',
          description: '',
          drilldown: [
            {
              name: 'Streams',
              description: ''
            },
            {
              name: 'EventEmitter',
              description: ''
            },
            {
              name: 'Express or similar',
              description: ''
            },
            {
              name: 'Message Queues',
              description: ''
            }
          ]
        },
        {
          name: 'Transport Mechanisms',
          description: '',
          drilldown: [
            {
              name: 'HTTP',
              description: ''
            },
            {
              name: 'WebSockets',
              description: ''
            },
            {
              name: 'CORS',
              description: ''
            },
            {
              name: 'JSON / XML',
              description: ''
            }
          ]
        },
        {
          name: 'Visualisation',
          description: '',
          drilldown: [
            {
              name: 'Canvas',
              description: ''
            },
            {
              name: 'SVG',
              description: ''
            },
            {
              name: 'WebGL',
              description: ''
            },
            {
              name: 'ThreeJS',
              description: ''
            },
            {
              name: 'Raphael',
              description: ''
            },
            {
              name: 'D3.js',
              description: 'http://d3js.org/'
            }

          ]
        },
      ]
    }  
  };
}

export default JavascriptCompetenciesFactory;
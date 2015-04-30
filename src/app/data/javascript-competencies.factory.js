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
          items: [
            'Data Types',
            'Functions and Scope',
            'Prototypes/Inheritance',
            'Asynchronous/Promises',
            'Harmony (ES6)'
          ]
        },
        {
          name: 'Frameworks and Libraries',
          description: 'Experience with various JS f/e frameworks and tools',
          items: [
            'AngularJS',
            'React / Flux',
            'Backbone',
            'ExtJS',
            'KnockoutJS',
            'MeteorJS',
            'JQuery',
            'Underscore/Lodash',
            'Modernizr'
          ]
        },
        {
          name: 'NodeJS',
          description: 'Experience with NodeJS',
          items: [
            'Streams',
            'EventEmitter',
            'Express',
            'Connect',
            'Koa.js',
            'Message Queues'
          ]
        },
        {
          name: 'Transport Mechanisms',
          description: 'Understading of the transport layer between the b/e and f/e. Good questions to ask are about TCP/HTTP, WebSockets, CORS, XML and JSON'
        },
        {
          name: 'Visualisation',
          description: 'Experience with creating visualisations in the browser',
          items: [
            'Canvas',
            'SVG',
            'WebGL',
            'ThreeJS',
            'Raphael',
            'D3.js'
          ]
        },
      ]
    }  
  };
}

export default JavascriptCompetenciesFactory;
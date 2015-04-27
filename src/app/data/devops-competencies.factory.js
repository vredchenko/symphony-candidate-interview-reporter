'use strict';
//ngInject
function DevOpsCompetenciesFactory() {
  return {
    data: {
      name: 'Systems/DevOps/Architecture',
      description: 'Ipsum',
      drilldown: [
        {
          name: 'Clouds and Clusters',
          description: 'AWS, DigitalOcean'
        },
        {
          name: 'Web Servers',
          description: 'Configuring Apache and Nginx, ect'
        },
        {
          name: 'Proxies',
          description: 'e.g. HAProxy or equivalent'
        },
        {
          name: 'UNIX Shell',
          description: ''
        },
        {
          name: 'Virtualization',
          description: 'Vargant, Docker, etc'
        }
      ]
    }
  };
}

export default DevOpsCompetenciesFactory;
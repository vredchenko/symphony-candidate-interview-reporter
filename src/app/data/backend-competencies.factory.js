'use strict';
//ngInject
function BackendCompetenciesFactory() {
  return {
    data: {
      name: 'Backend Web Development',
      description: 'Ipsum',
      drilldown: [
        {
          name: 'Languages',
          description: 'Knowledge of various server-side languages',
          items: [
            'PHP',
            'Ruby',
            'Java',
            'Python',
            '.NET'
          ]
        },
        {
          name: 'SQL Databases',
          description: 'Understanding of relational databases, SQL, normalization. Indexes, different types of joins, etc'
        },
        {
          name: 'NoSQL Databases',
          description: 'Experience with NoSQL databases',
          items: [
            'MongoDB',
            'CouchDB',
            'RethinkDB',
            'Neo4j'
          ]
        },
        {
          name: 'In-memory storage',
          description: 'Improving server response times and performance through holding some or all of the dataset in server Memory',
          items: [
            'Memcached',
            'Reddis'
          ]
        },
        {
          name: 'Systems and Frameworks',
          description: 'Experience with various CMSs and frameworks',
          items: [
            'Django',
            'Drupal',
            'Wordpress',
            'Flask',
            'Symphony2',
            'Zend',
            'CodeIgniter'
          ]
        }
      ]
    }
  };
}

export default BackendCompetenciesFactory;
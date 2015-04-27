'use strict';

/**
 * @ToDo This data should eventually live within a back-end with an admin UI,
 * but hard-coding it within factories will suffice for now.
 */
import HTMLCSSCompetenciesFactory     from './data/markup-styling-competencies.factory';
import JavascriptCompetenciesFactory  from './data/javascript-competencies.factory';
import BackendCompetenciesFactory     from './data/backend-competencies.factory';
import DevOpsCompetenciesFactory      from './data/devops-competencies.factory';
import WorkflowsCompetenciesFactory   from './data/workflows-competencies.factory';
import CompetenciesFactory            from './data/webdev-competencies.factory';



import NavbarCtrl from './components/navbar/navbar.controller';
import LandingCtrl from './landing/landing.controller';
import InterviewCtrl from './interview/interview.controller';
import ReportCtrl from './report/report.controller';
import MainCtrl from './main/main.controller';

import CompetencyRating from './components/feedback-controls/competency-rating.directive';
import AdditionalNotes from './components/feedback-controls/additional-notes.directive';

angular.module('interviewReport', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'mgcrea.ngStrap'])
  
  .factory('HTMLCSSCompetenciesFactory',    HTMLCSSCompetenciesFactory)
  .factory('JavascriptCompetenciesFactory', JavascriptCompetenciesFactory)
  .factory('BackendCompetenciesFactory',    BackendCompetenciesFactory)
  .factory('DevOpsCompetenciesFactory',     DevOpsCompetenciesFactory)
  .factory('WorkflowsCompetenciesFactory',  WorkflowsCompetenciesFactory)
  .factory('CompetenciesFactory',           CompetenciesFactory)

  .controller('LandingCtrl', LandingCtrl)
  .controller('InterviewCtrl', InterviewCtrl)
  .controller('ReportCtrl', ReportCtrl)
  .controller('NavbarCtrl', NavbarCtrl)
  .controller('MainCtrl', MainCtrl)
  .directive('competencyRating', CompetencyRating)
  .directive('additionalNotes', AdditionalNotes)
  
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: 'app/landing/landing.html',
        controller: 'LandingCtrl'
      })
      .state('interview', {
        url: '/interview',
        templateUrl: 'app/interview/interview.html',
        controller: 'InterviewCtrl'
      })
      .state('report', {
        url: '/report',
        templateUrl: 'app/report/report.html',
        controller: 'ReportCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;

'use strict';

class InterviewCtrl {
  constructor ($scope, CompetenciesFactory) {

    $scope.a = 0;
    $scope.b = 0;
    $scope.c = '';
    $scope.d = {
      positive: 0, 
      negative: 0
    };


    $scope.competencies = CompetenciesFactory.webDev;
  }
}

InterviewCtrl.$inject = ['$scope', 'CompetenciesFactory'];

export default InterviewCtrl;

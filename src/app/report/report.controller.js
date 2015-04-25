'use strict';

class ReportCtrl {
  constructor ($scope) {
    $scope.competencies = [
      {
        'foo': 'bar'
      }
    ];
    
  }
}

ReportCtrl.$inject = ['$scope'];

export default ReportCtrl;

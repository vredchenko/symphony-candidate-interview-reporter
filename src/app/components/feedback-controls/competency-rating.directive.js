'use strict';
//ngInject
function CompetencyRating($http) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/components/feedback-controls/competency-rating.html',
    scope: {
      ratedBySelf: '=',
      ratedByPeer: '='
    },
    link: () => {
      console.log( 'link function' );
    }
  };
}
export default CompetencyRating;
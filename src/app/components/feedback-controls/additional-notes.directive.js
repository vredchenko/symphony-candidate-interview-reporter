'use strict';
//ngInject
function AdditionalNotes() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/components/feedback-controls/additional-notes.html',
    scope: {
      notes: '=',
      score: '='
    },
    link: (scope) => {
      scope.$watch( 'notes', (newValue, oldValue) => {
        if ( newValue !== oldValue && newValue) {
          console.log( 'additional notes widget link func: ', newValue );  
        }
      });
    }
  };
}
export default AdditionalNotes;
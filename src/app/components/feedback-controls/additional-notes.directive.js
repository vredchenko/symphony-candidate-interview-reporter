'use strict';
//ngInject
function AdditionalNotes() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/components/feedback-controls/additional-notes.html',
    scope: {
      notes: '='
    }
  };
}
export default AdditionalNotes;
'use strict';
//ngInject
function CompetenciesFactory(HTMLCSSCompetenciesFactory, JavascriptCompetenciesFactory, BackendCompetenciesFactory, DevOpsCompetenciesFactory, WorkflowsCompetenciesFactory) {
  return {
    webDev: [
      HTMLCSSCompetenciesFactory.data,
      JavascriptCompetenciesFactory.data,
      BackendCompetenciesFactory.data,
      DevOpsCompetenciesFactory.data,
      WorkflowsCompetenciesFactory.data
    ]
  };
}
export default CompetenciesFactory;
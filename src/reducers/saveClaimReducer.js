import * as types from "../actions/actionTypes";

const claims = {
  
  isSaving: false,
  hasSaved: false,
  summaryData: null,
  data: []
 };

export default function saveClaimReducer(
  state = claims,
  action
) {
  switch (action.type) {
    case `${types.CLAIM_SAVE}`: {
      // on success
      return Object.assign({}, state, {
        data: action.payload.Claims,
        claimId: action.payload.ClaimId,
        isSaving: false,
        hasSaved: true
      });
    }
    
    default:
      return state;
  }
}

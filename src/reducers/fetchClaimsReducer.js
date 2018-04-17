import * as types from "../actions/actionTypes";

const prj = {

  claimsFetching: false,
  hasClaimsFetched: false,
  hasFetchRejected: false,
  data: []
};

export default function fetchClaimsReducer(state = prj, action) {
  switch (action.type) {
    case `${types.FETCH_CLAIMS}_PENDING`: // before firing AJAX call
      return Object.assign({}, state, {
        claimsFetching: true,
        hasClaimsFetched: false
      });

    case `${types.FETCH_CLAIMS}_FULFILLED`:
      {
        // on success
        return Object.assign({}, state, {
          data: action.payload,
          claimsFetching: false,
          hasClaimsFetched: true
        });
      }
    case `${types.FETCH_CLAIMS}_REJECTED`: // show error message
      return Object.assign({}, state, {
        errmsg: action.payload.error,
        claimsFetching: false,
        hasClaimsFetched: false,
        hasFetchRejected: true
      });

    default:
      return state;
  }
}

import * as types from "../actions/actionTypes";

const claims = {
    isSaving: false,
    hasSaved: false,
    claimsFetching: false,
    hasClaimsFetched: false,
    hasFetchFailed: false,
    data: [],
    claim_id: ''
};

export function saveClaimReducer(
    state = claims,
    action
) {
    switch (action.type) {
        case `${types.CLAIM_SAVE}_PENDING`: // before firing AJAX call
            return Object.assign({}, state, { isSaving: true, hasSaved: false });

        case `${types.CLAIM_SAVE}_FULFILLED`: {
            // on success

            return Object.assign({}, state, {
                claim_id: action.payload.data.claim_id,
                isSaving: false,
                hasSaved: true
            });
        }

        case `${types.CLAIM_SAVE}_REJECTED`: // show error message
            return Object.assign({}, state, {
                errmsg: action.payload.error,
                isSaving: false,
                hasSaved: false
            });

        default:
            return state;
    }
}

export function fetchAllClaims(state = claims, action) {
    switch (action.type) {
        case 
    }
}

import * as types from "../actions/actionTypes";

const claims = {
    isSaving: false,
    hasSaved: false,
    claimsFetching: false,
    claimsFetched: false,
    claimsFetchFailed: false,
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

export function fetchAllClaimsReducer(state = claims, action) {
    switch (action.type) {
        case `${types.FETCH_ALL_CLAIMS}_PENDING`: // before firing AJAX call
            return Object.assign({}, state, { claimsFetching: true, claimsFetched: false, claimsFetchFailed: false });

        case `${types.FETCH_ALL_CLAIMS}_FULFILLED`: {
            // on success

            return Object.assign({}, state, {
                data: action.payload.data,
                claimsFetching: false,
                claimsFetched: true,
                claimsFetchFailed: false
            });
        }

        case `${types.FETCH_ALL_CLAIMS}_REJECTED`: // show error message
            return Object.assign({}, state, {
                message: action.payload.error,
                claimsFetching: false,
                claimsFetched: false,
                claimsFetchFailed: true
            });

        default:
            return state;
    }
}

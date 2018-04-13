import * as types from "./actionTypes";
import FetchClaimsApi from "../api/fetchClaimsApi";

export default function fetchClaims(project_id) {
  return {
    type: `${types.FETCH_CLAIMS}`,
    payload: {
      promise: FetchClaimsApi.fetchClaims(project_id)
    }
  };
}

export function fetchSubs(claim_id) {
  return {
    type: `${types.FETCH_CLAIMS}`,
    payload: {
      promise: FetchClaimsApi.fetchSubs(claim_id)
    }
  };
}
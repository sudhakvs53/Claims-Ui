import * as types from "./actionTypes";
import CreateClaimsApi from "../api/createClaimsApi";

export default function saveClaims(claimData) {
  return {
    type: `${types.CLAIM_SAVE}`,
    payload: {
      promise: CreateClaimsApi.saveClaims(claimData)
    }
  };
}
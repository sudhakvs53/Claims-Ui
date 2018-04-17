import * as types from "./actionTypes";
import claimsApi from "../api/claimsApi";

export default function saveClaims(claimData,histData,substData) {
  return {
    type: `${types.CLAIM_SAVE}`,
    payload: {
      promise: claimsApi.saveClaims(claimData,histData,substData)
    }
  };
}
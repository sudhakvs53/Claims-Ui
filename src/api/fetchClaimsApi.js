import axios from "axios";

const isSuccess = code => code === 200;

class FetchClaimsApi {

    static fetchClaims(project_id) {
      return axios
        .get("http://localhost:3002/get_project_claims", { headers: { project_id } })
        .then(response => response.data); 
    }

    static fetchSubs(claim_id) {
      return axios
        .get("http://localhost:3002/get_claim_substantiation", { headers: { claim_id } })
        .then(response => response.data); 
    }
}

export default FetchClaimsApi;
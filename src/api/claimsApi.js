import axios from "axios";
import API_ROOT from './api-config';
const isSuccess = code => code === 200;

class claimsApi {

    static saveClaims(claimsData, histData, substData) {
        return axios
            .post("http://localhost:3002/create_claim", claimsData)
            .then(response => {
                const { status, data } = response;
                if (isSuccess(status)) {
                    if (response.data.claim_id != null) {
                        histData.claim_id = response.data.claim_id;
                        CreateClaimsApi.saveClaimsHist(histData);
                        if (substData.reason != "") {
                            substData.claim_id = response.data.claim_id;
                            CreateClaimsApi.saveSubstantiation(substData);
                        }
                    }
                    return response;
                }

            });

    }

    static saveClaimsHist(histData) {
        return axios
            .post("http://localhost:3002/insert_history", histData)
            .then(response => {
                const { status, data } = response;
                if (isSuccess(status))
                    status;
            });
    }

    static saveClaimsComment(commentData) {
        return axios
            .post("http://localhost:3002/insert_comment", commentData)
            .then(response => {
                const { status, data } = response;
                if (isSuccess(status)) {
                    return response;
                }
                return response;
            });
    }

    static saveSubstantiation(substData) {
        return axios
            .post("http://localhost:3002/create_substantiation", substData)
            .then(response => {
                const { status, data } = response;
                if (isSuccess(status))
                    status;
            });
    }

    static getClaims() {
        return axios.get('${API_ROOT}/get_project_claims')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            });
    }
}

export default claimsApi;
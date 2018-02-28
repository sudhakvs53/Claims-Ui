import axios from "axios";

const isSuccess = code => code === 200;

class CreateClaimsApi {
  
  static saveClaims(claimsData) {
    return axios
      .post("http://localhost:3002/create_claim", claimsData)
      .then(response => {
        const { status, data: { DataIssues } } = response;
        if (isSuccess(status) && DataIssues) {
          throw new Error(DataIssues[0].Message);
        }
        return response;
      });
  }
  
}

export default CreateClaimsApi;
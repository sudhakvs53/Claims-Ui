import axios from "axios";

const isSuccess = code => code === 200;

class CreateProjectApi {

    static createProject(prjData) {
      return axios
        .post("http://localhost:3002/create_project", prjData)
        .then(response => {
          const { status, data } = response;
          if (isSuccess(status)) 
            return response;
        });
        
    }
}

export default CreateProjectApi;
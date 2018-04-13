import * as types from "./actionTypes";
import CreateProjectApi from "../api/createProjectApi";

export default function createProject(prjData) {
  return {
    type: `${types.CREATE_PRJ}`,
    payload: {
      promise: CreateProjectApi.createProject(prjData)
    }
  };
}
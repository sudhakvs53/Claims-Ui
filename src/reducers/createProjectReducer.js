import * as types from "../actions/actionTypes";

const prj = {
  
  isPrjCreating: false,
  hasPrjCreated: false,
  hasPrjRejected: false,
  prjId: '',
  data: []
};

export default function createProjectReducer(
  state = prj,
  action
) {
  switch (action.type) {
    case `${types.CREATE_PRJ}_PENDING`: // before firing AJAX call
      return Object.assign({}, state, { isPrjCreating: true, hasPrjCreated: false });

    case `${types.CREATE_PRJ}_FULFILLED`: {
      // on success
      return Object.assign({}, state, {
        prjId: action.payload.data.project_id,
        isPrjCreating: false,
        hasPrjCreated: true
      });
    }
    case `${types.CREATE_PRJ}_REJECTED`: // show error message
      return Object.assign({}, state, {
        errmsg: action.payload.error,
        isPrjCreating: false,
        hasPrjCreated: false,
        hasPrjRejected: true
      });
    
      
    default:
      return state;
  }
}

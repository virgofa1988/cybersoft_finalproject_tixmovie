import {
  GET_USER_INFOR,
  MODAL_CANCEL,
  MODAL_OK,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
} from "../constants/Constants";
let loginAccount = {};
//Kiểm tra thử dưới localStorage đã có lưu tài khoản này chưa. Nếu có rồi thì lấy lên gán cho state.
if (localStorage.getItem(USER_LOGIN)) {
  let userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
  loginAccount = userLogin;
}
const initialState = {
  userAccount: loginAccount,
  userInfo: {},
  modalStatus: false,
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      console.log(action.userAccount);
      return { ...state, userAccount: action.userAccount };
    }
    case GET_USER_INFOR: {
      // console.log(action.userInfo);
      state.userInfo = action.userInfo;
      return { ...state };
    }
    case MODAL_OK: {
      state.modalStatus = true;
      console.log("Reducer Modal OK");
      return { ...state };
    }
    case MODAL_CANCEL: {
      state.modalStatus = false;
      console.log("Reducer Modal Cancel");
      return { ...state };
    }
    default:
      return state;
  }
};

import axios from "axios";
import {
  getHomeToolPhimList,
  getHomeToolBoxList,
} from "../../constants/Constants";
import { PHIM_LIST_API } from "../../DomainAPI/domainAPI";

//HomeTool Actions Phim List
export const getAPIHomeToolPhimList = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: PHIM_LIST_API,
        method: "GET",
      });
      dispatch({
        type: getHomeToolPhimList,
        PhimList: result.data,
      });
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};

//Get Box List via maPhim from API
export const getAPIHomeToolBoxList = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        method: "GET",
      });
      dispatch({
        type: getHomeToolBoxList,
        heThongRapChieu: result.data.heThongRapChieu,
      });
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};

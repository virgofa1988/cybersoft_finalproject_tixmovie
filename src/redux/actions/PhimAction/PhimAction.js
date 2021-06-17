import axios from "axios";
import { getFilmDetail } from "../../constants/Constants";

//Get Detail Film via maPhim
export const getAPIFilmDetail = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        method: "GET",
      });
      console.log(result);
      dispatch({
        type: getFilmDetail,
        PhimDetail: result.data,
      });
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};

import axios from "axios";
import {
  BOX_LIST,
  BOX_LIST_DETAIL,
  MOVIE_LIST_DETAIL,
  TICKET_BOX_DETAIL,
} from "../../constants/Constants";
import { BOX_LIST_API } from "../../DomainAPI/domainAPI";

//Get all BoxList
export const getAPIBoxList = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: BOX_LIST_API,
        method: "GET",
      });
      // console.log("Result Box List ", result.data);
      dispatch({
        type: BOX_LIST,
        BoxList: result.data,
      });
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};

//get Movie Schudule based on maHeThongRap
export const getMovieSchedule = (maHeThongRap) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`,
        method: "GET",
      });
      // console.log(result.data[0], maHeThongRap);

      dispatch({
        type: MOVIE_LIST_DETAIL,
        movieListSchedule: result.data[0],
      });
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};

//Get Chi Tiet Phong Ve Theo maLichChieu
export const getAPITicketBox = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
        method: "GET",
      });
      // console.log(result.data);
      dispatch({
        type: TICKET_BOX_DETAIL,
        tickKetBoxDetail: result.data,
      });
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};

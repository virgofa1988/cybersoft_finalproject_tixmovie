import {
  BOX_CODE,
  BOX_LIST,
  MOVIE_LIST_BASE_BOX,
  MOVIE_LIST_DETAIL,
} from "../constants/Constants";

const initialState = {
  BoxList: [],
  ScheduleBoxList: [],
  MovieListBaseBox: [],
};

export const MovieScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOX_LIST: {
      // console.log(" Box list Reducer", action.BoxList);
      state.BoxList = action.BoxList;
      return { ...state };
    }
    case MOVIE_LIST_DETAIL: {
      state.ScheduleBoxList = action.movieListSchedule.lstCumRap;
      // console.log(
      //   "Lịch Chiếu Kèm Theo Phim : ",
      //   action.movieListSchedule.lstCumRap
      // );
    }
    case BOX_CODE: {
      // console.log(action.boxCode);
      const index = state.ScheduleBoxList.findIndex(
        (cumRap) => cumRap.maCumRap === action.boxCode
      );
      const phimArray = state.ScheduleBoxList[index]?.danhSachPhim;
      state.MovieListBaseBox = phimArray;
      return { ...state };
    }

    default:
      return state;
  }
};

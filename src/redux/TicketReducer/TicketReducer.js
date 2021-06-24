import { TICKET_BOX_DETAIL } from "../constants/Constants";

const initialState = {
  danhSachGhe: [],
  thongTinPhim: {},
};

export const TicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case TICKET_BOX_DETAIL: {
      //   console.log(action.tickKetBoxDetail);
      state.danhSachGhe = action.tickKetBoxDetail.danhSachGhe;
      state.thongTinPhim = action.tickKetBoxDetail.thongTinPhim;
      return { ...state };
    }

    default:
      return state;
  }
};

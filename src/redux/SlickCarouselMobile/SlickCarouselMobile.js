import { showMoreMovieMobile } from "../constants/Constants";

const initialState = {
  MobileFilmListReducer: [
    {
      tenPhim: "Trang Ti",
      hinhAnh:
        "https://s3img.vcdn.vn/mobile/123phim/2021/04/trang-ti-16190592773054_540x225.jpg",
      rating: 6.1,
      ageType: "P",
      show: true,
    },
    {
      tenPhim: "Lat Mat",
      hinhAnh:
        "https://s3img.vcdn.vn/mobile/123phim/2021/04/lat-mat-48h-16176186348562_540x225.jpg",
      rating: 7.8,
      ageType: "C18",
      show: true,
    },
    {
      tenPhim: "Thien Than Ho Menh",
      hinhAnh:
        "https://s3img.vcdn.vn/mobile/123phim/2021/03/thien-than-ho-menh-16157904502407_540x225.jpg",
      rating: 7.5,
      ageType: "C18",
      show: true,
    },
    {
      tenPhim: "Conan",
      hinhAnh:
        "https://s3img.vcdn.vn/mobile/123phim/2021/04/detective-conan-scarlet-bullet-tham-tu-lung-danh-conan-vien-dan-do-c13-16188002680135_540x225.jpg",
      rating: 8.8,
      ageType: "C18",
      show: false,
    },
    {
      tenPhim: "Nguoi Nhan Ban",
      hinhAnh:
        "https://s3img.vcdn.vn/mobile/123phim/2021/04/nguoi-nhan-ban-seobok-c18-16173645196710_540x225.jpg",
      rating: 7.7,
      ageType: "C16",
      show: false,
    },
    {
      tenPhim: "Ban Tay Diet Quy",
      hinhAnh:
        "https://s3img.vcdn.vn/mobile/123phim/2021/03/ban-tay-diet-quy-demon-hunter-c16-16165641754017_540x225.png",
      rating: 7.5,
      ageType: "C18",
      show: false,
    },
    {
      tenPhim: "Nobody",
      hinhAnh:
        "https://s3img.vcdn.vn/mobile/123phim/2021/04/ke-vo-danh-nobody-c18-16191576954817_540x225.png",
      rating: 8.5,
      ageType: "C18",
      show: false,
    },
    {
      tenPhim: "Hung Than Trang",
      hinhAnh:
        "https://s3img.vcdn.vn/mobile/123phim/2021/05/hung-than-trang-great-white-c13-16199524870981_540x225.png",
      rating: 5.7,
      ageType: "C18",
      show: false,
    },
    {
      tenPhim: "The Last Warrior",
      hinhAnh:
        "https://s3img.vcdn.vn/mobile/123phim/2021/05/chien-binh-cuoi-cung-cuoi-nguon-cua-quy-the-last-warrior-root-of-evil-c13-16199511077803_540x225.png",
      rating: 5.5,
      ageType: "C18",
      show: false,
    },
    {
      tenPhim: "Ong Phieu Luu Ky",
      hinhAnh:
        "https://s3img.vcdn.vn/mobile/123phim/2021/04/ong-nhi-phieu-luu-ky-giai-cuu-cong-chua-kien-maya-the-bee-3-the-golden-orb-p-16183928747681_540x225.jpg",
      rating: 8.5,
      ageType: "P",
      show: false,
    },
    {
      tenPhim: "Nhan Doi Tinh Yeu",
      hinhAnh:
        "https://s3img.vcdn.vn/mobile/123phim/2021/04/nhan-doi-tinh-yeu-double-party-c13-16188293111967_540x225.png",
      rating: 5.7,
      ageType: "C16",
      show: false,
    },
    {
      tenPhim: "Trum Cuoi Sieu Dang",
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2021/04/trum-cuoi-sieu-dang-boss-level-c18-16189038376716.png",
      rating: 7.5,
      ageType: "C13",
      show: false,
    },
    {
      tenPhim: "Con Lac Ta Thuat",
      hinhAnh:
        "https://s3img.vcdn.vn/mobile/123phim/2021/04/the-hypnosis-con-lac-ta-thuat-c18-16188262654852_540x225.png",
      rating: 5.7,
      ageType: "C18",
      show: false,
    },
    {
      tenPhim: "King Kong",
      hinhAnh:
        "https://s3img.vcdn.vn/mobile/123phim/2021/03/godzilla-vs-kong-16150059793097_540x225.jpg",
      rating: 7.5,
      ageType: "P",
      show: false,
    },
  ],
};
export const MobileFilmListReducer = (state = initialState, action) => {
  switch (action.type) {
    case showMoreMovieMobile: {
      let newArrFilm = [...state.MobileFilmListReducer];
      for (let film of newArrFilm) {
        film.show = true;
      }

      return {
        ...state.MobileFilmListReducer,
        MobileFilmListReducer: newArrFilm,
      };
    }
    default:
      return state;
  }
};

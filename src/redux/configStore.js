import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { LocationSelect } from "../redux/Header/LocationSelect";
import { FilmDetailReducer } from "./FilmDetail/FilmDetailReducer";
import { HomeToolReducer } from "./HomeTool/HomeToolReducer";
import { MovieScheduleReducer } from "./MovieSchedule/MovieScheduleReducer";
import { MobileFilmListReducer } from "./SlickCarouselMobile/SlickCarouselMobile";
import { UserReducer } from "./User/userReducer";

const rootReducer = combineReducers({
  //Chứa các state của ứng dụng
  LocationSelect: LocationSelect,
  HomeToolReducer: HomeToolReducer,
  MobileFilmListReducer: MobileFilmListReducer,
  FilmDetailReducer: FilmDetailReducer,
  UserReducer: UserReducer,
  MovieScheduleReducer: MovieScheduleReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));

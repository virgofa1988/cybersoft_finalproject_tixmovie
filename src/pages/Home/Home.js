import React from "react";
import Header from "../../components/Header/Header";

import MainCarousel from "../../components/MainCarousel/MainCarousel";
import MovieSchedule from "../../components/MovieSchedule/MovieSchedule";
import MovieSlider from "../../components/Movie_Slider/MovieSlider";
import News from "../../components/News/News";

export default function Home() {
  return (
    <div>
      <Header />
      <MainCarousel />
      <MovieSlider />
      <MovieSchedule />
      <News />
    </div>
  );
}

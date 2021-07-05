import React from "react";
import "./news.css";
import { Tabs } from "antd";
import Tintuc from "./Tintuc/Tintuc";
import Review from "./Review/Review";
import Khuyenmai from "./Khuyenmai/Khuyenmai";
const { TabPane } = Tabs;

export default function News() {
  return (
    <section className="news_section" id="news_section">
      <div className="news_container">
        <Tabs
          defaultActiveKey="1"
          large
          // onChange={getBoxKey}
          type="card"
          tabPosition="top"
          animated
          size="large"
          addIcon
        >
          <TabPane tab="Tin Tức" key="1">
            <Tintuc />
          </TabPane>
          <TabPane tab="Review" key="2">
            <Review />
          </TabPane>
          <TabPane tab="Khuyến Mãi" key="3">
            <Khuyenmai />
          </TabPane>
        </Tabs>
        <div className="flex justify-center my-3">
          <a
            href="https://zingnews.vn/phim-anh.html"
            target="_blank"
            className="btnMuaVeFilm "
          >
            Xem Thêm
          </a>
        </div>
      </div>
    </section>
  );
}

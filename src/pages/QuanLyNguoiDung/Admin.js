import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { Tabs } from "antd";
import { VideoCameraOutlined, UserOutlined } from "@ant-design/icons";
import "./Admin.css";
import { useEffect } from "react";
import { GET_USER_LIST } from "../../redux/DomainAPI/domainAPI";
import axios from "axios";
import User_Table from "../../components/Table_ThongTinNguoiDung/User_Table";
import PaginationComponent from "../../components/Pagination/Pagination";
const { TabPane } = Tabs;

export default function Admin() {
  function callback(key) {
    console.log(key);
  }
  //Đây là kĩ thuật tạo ra Pagination, Rất Hay thuần javascript, hỗ trợ để tạo ra API loadTrang ở BackEnd
  //Set Post per page
  //Total user List
  // const [posts, setPosts] = useState([]);
  //Animation Loadding
  // const [loading, setLoading] = useState(false);
  //Current Pages
  // const [currentPage, setCurrentPage] = useState(1);
  //Number of posts per pages
  // const [postPerPage] = useState(50);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setLoading(true);
  //     const result = await axios.get(GET_USER_LIST);
  //     setPosts(result.data);
  //     setLoading(false);
  //   };
  //   fetchPosts();
  // }, []);

  //Get Current Posts
  // const indexOfLastPost = currentPage * postPerPage; //Lấy Giá trị Cuối(1 currentPage trả về giá trị là postPerPages tương ứng 30 users)
  // const indexOfFirstPost = indexOfLastPost - postPerPage; //Lấy Giá Trị Đầu( nếu currentPage tăng lên thì chỉ só đầu sẽ bị đẩy theo tương ứng, mỗi bước là tương đương với postPergage ví dụ 30user đầu thì chỉ số đầu là 0, nếu page2 thì là 60user thì số tiếp theo là 30)
  // // Cắt list user dựa vào giá trị cuối và đầu
  // const currentUserList = posts.slice(indexOfFirstPost, indexOfLastPost);
  // //Paginating-Change page
  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  return (
    <div className="adminInfoLayout">
      <Header />
      {/* //User Information */}
      <div className="adminLayout_Body">
        <Tabs
          defaultActiveKey="1"
          onChange={callback}
          tabPosition="left"
          type="card"
          large
          animated
        >
          <TabPane
            tab={
              <div className="admininfo__menu">
                <UserOutlined style={{ fontSize: "2rem" }} />
                Quản Lý Người Dùng
              </div>
            }
            key="1"
          >
            {/* Bảng danh sách người dùng */}

            <User_Table />

            {/* Bảng danh sách người dùng */}
          </TabPane>
          <TabPane
            tab={
              <div className="userinfo__ThongTinVe admininfo__menu">
                <VideoCameraOutlined style={{ fontSize: "2rem" }} />
                Quản Lý Phim
              </div>
            }
            key="2"
          >
            Quản Lý Phim
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

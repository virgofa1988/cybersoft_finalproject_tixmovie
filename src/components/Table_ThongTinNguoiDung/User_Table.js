import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./User_Table.css";
import { Pagination } from "antd";
import { layDanhSachNguoiDung } from "../../redux/actions/userAction/useraction";
import { useState } from "react";
export default function User_Table() {
  const dispatch = useDispatch();
  //State page,và pageSize nhận được từ hàm onchange của Pagination khi người dùng thao tác chọn page, và pageSize. Khi state thay đổi, nó sẽ làm tham số truyền vào của hàm gọi API(API trên Server cần 2 thông số page, và pageSize) để trả về data tương ứng
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  //Lifecycle-theo dõi và gọi API khi state thay đổi
  useEffect(() => {
    dispatch(layDanhSachNguoiDung(page, pageSize));
  }, [page, pageSize]);
  //Sau Khi Gọi API, đã dispatch data lên store, nên lấy về sử dụng
  const allUserListPerPage = useSelector(
    (state) => state.UserReducer.allUserListPerPage
  );
  //Destructuring dữ liệu từ data, để đưa vào Component Pagination
  //Items là các list user tương ứng số page, dùng để render ra UI tương ứng
  //TotalCount là tổng số lượng user có trên server, làm tham số gửi vào Pagination
  const { items, totalCount } = allUserListPerPage;

  const paginate = (page, pageSize) => {
    setPage(page);
    setPageSize(pageSize);
  };

  return (
    <div className="table-container">
      <table className="table-auto" id="ThongTinUser_Table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tài Khoản</th>
            <th>Mật Khẩu</th>
            <th>Họ Tên</th>
            <th>Email</th>
            <th>Số Điện Thoại</th>
            <th>Thao Tác</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((user, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.taiKhoan}</td>
                <td>{user.matKhau}</td>
                <td>{user.hoTen}</td>
                <td>{user.email}</td>
                <td>{user.soDt}</td>
                <td>
                  <button className="bg-green-400 p-2 text-white">
                    Enroll
                  </button>
                  <button className="bg-yellow-400 p-2 text-white">Edit</button>
                  <button className="bg-red-400 p-2 text-white">Del</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        defaultCurrent={1}
        total={totalCount}
        onChange={paginate}
        defaultPageSize={20}
        responsive={true}
      />
    </div>
  );
}

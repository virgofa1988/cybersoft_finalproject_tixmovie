import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./User_Table.css";
import { Pagination } from "antd";
import { layDanhSachNguoiDung } from "../../redux/actions/userAction/useraction";
import { useState } from "react";
export default function User_Table(props) {
  const { loading } = props;
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  useEffect(() => {
    dispatch(layDanhSachNguoiDung(page, pageSize));
  }, [page, pageSize]);

  const allUserListPerPage = useSelector(
    (state) => state.UserReducer.allUserListPerPage
  );

  console.log(allUserListPerPage);

  const { items, totalCount } = allUserListPerPage;

  const paginate = (page, pageSize) => {
    setPage(page);
    setPageSize(pageSize);
  };

  return (
    <div>
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

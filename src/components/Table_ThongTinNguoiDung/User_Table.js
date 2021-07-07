import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./User_Table.css";
import { Pagination } from "antd";
import {
  layDanhSachNguoiDung,
  removeUser,
  searchUser,
  updateUser,
} from "../../redux/actions/userAction/useraction";
import { useState } from "react";
import EditUserModal from "../Edit_User_Modal/EditUserModal";
import { AddUserModal } from "../Add_User_Modal/AddUserModal";
export default function User_Table() {
  const dispatch = useDispatch();

  //-------------------------Start Pagination------------------------//
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
  console.log(allUserListPerPage);
  //Destructuring dữ liệu từ data, để đưa vào Component Pagination
  //Items là các list user tương ứng số page, dùng để render ra UI tương ứng
  //TotalCount là tổng số lượng user có trên server, làm tham số gửi vào Pagination
  const { items, totalCount } = allUserListPerPage;

  const paginate = (page, pageSize) => {
    setPage(page);
    setPageSize(pageSize);
  };
  //-------------------------End Pagination------------------------//

  //-------------------------User Method------------------------//
  //Remove User
  const removeUserOnclick = (taiKhoan) => {
    dispatch(removeUser(taiKhoan));
    //Reload Table after delete
    dispatch(layDanhSachNguoiDung(page, pageSize));
  };
  //Add User
  //B1-Trigger Modal
  const [triggerAddUserModal, setAddUserModal] = useState(false);
  const openAddUserModal = () => {
    setAddUserModal(true);
  };
  //Update User
  //B1- Trigger Modal
  //State lấy thông tin user lựa để edit để cập nhật và đưa vào Modal
  const [editUser, setEditUser] = useState({});
  const openUpdateUserModal = (user) => {
    // console.log("Open Modal", user);
    setEditUser(user);
  };
  //Search User
  const handleSearchUser = (e) => {
    let keyword = e.target.value;
    console.log(keyword);
    //Khi keyword rỗng thì trả lại full list
    if (keyword !== "") {
      dispatch(searchUser(keyword));
    } else {
      dispatch(layDanhSachNguoiDung(page, pageSize));
    }
  };

  return (
    <div className="table-container">
      <div className="searchUserAddBtn_Wrapper flex-row-reverse flex">
        <div className="searchUser w-1/2 m-auto" id="searchUserContainer">
          <input
            type="text"
            name="searchUserInput"
            autoComplete="off"
            placeholder="Search User: ..."
            onChange={handleSearchUser}
            required
          />
          <label className="label-name" for="searchUserInput">
            <span className="content-name">
              <i class="fas fa-search"></i>
            </span>
          </label>
        </div>
        <div>
          <button
            id="btnAddUser"
            onClick={() => {
              openAddUserModal();
            }}
          >
            Add User
          </button>
        </div>
      </div>
      <table className="table-auto overflow-x-auto" id="ThongTinUser_Table">
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
                  {/* <button className="bg-green-400 p-2 text-white">
                    Enroll
                  </button> */}
                  <button
                    className="bg-yellow-400 p-2 text-white"
                    onClick={() => {
                      openUpdateUserModal(user);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-400 p-2 text-white"
                    onClick={() => {
                      removeUserOnclick(user.taiKhoan);
                    }}
                  >
                    Del
                  </button>
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
      {/* Edit User Modal */}
      <EditUserModal editUser={editUser} setEditUser={setEditUser} />
      {/* Add User Modal */}
      <AddUserModal
        triggerAddUserModal={triggerAddUserModal}
        setAddUserModal={setAddUserModal}
      />
    </div>
  );
}

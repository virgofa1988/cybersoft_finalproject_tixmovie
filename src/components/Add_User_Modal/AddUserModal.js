import React from "react";
import { Modal } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./AddUserModal.css";
import { addUserByAdmin } from "../../redux/actions/userAction/useraction";
export const AddUserModal = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  //   console.log("Add User", props);

  const { triggerAddUserModal, setAddUserModal } = props;
  const [addUserState, setAddUserState] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "",
    hoTen: "",
  });
  //Hàm Bắt sự Kiện Onchange của từng thẻ Input, sử dụng ES6[name,literal]
  const onChangeInput = (event) => {
    //name phải đặt trùng với các giá trị property trong object của State
    const { name, value } = event.target;
    //Cập Nhật lại state khi onchange thay đổi, phải trải các giá trị của object ra lại và dùng [name]:value để truy vấn tới property và gán giá trị mới
    setAddUserState({ ...addUserState, [name]: value });
    console.log(addUserState);
  };
  const handleSubmit = () => {
    console.log("Add User ", addUserState);
    dispatch(addUserByAdmin(addUserState));
    setIsModalVisible(false);
    setAddUserModal(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    console.log("Thêm Người Dùng Thành Công");
    setAddUserModal(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setAddUserModal(false);
  };

  //Trigger Modal when True, and monitoring Trigger, được từ CountDown_Timer sau khi thời gian chạy hết
  useEffect(() => {
    //Kiểm tra xem EditUser là rỗng hay không, nếu == 0 là rỗng thì ko bật Modal, nếu > 0 là có giá trị nên sẽ bật Modal
    if (triggerAddUserModal) {
      showModal();
    }
  }, [triggerAddUserModal]);
  return (
    <>
      <Modal
        centered
        title={
          <div>
            <h3>Thêm Người Dùng</h3>
          </div>
        }
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <div>
            <button
              className=" bg-gray-500 text-base px-4 py-4 mx-2 text-white"
              onClick={handleCancel}
            >
              Huỷ
            </button>
            <button
              className="bg-red-500 text-base px-4 py-4 mx-2 text-white"
              onClick={handleSubmit}
            >
              Thêm
            </button>
          </div>
        }
      >
        <form id="AddUser_Modal" onSubmit={handleSubmit}>
          <label for="taiKhoan">
            Tài Khoản{" "}
            <input
              type="text"
              //   value={editUserState?.taiKhoan}
              name="taiKhoan"
              onChange={onChangeInput}
              //   disabled
            />
          </label>
          <br />
          <label for="matKhau">
            Mật Khẩu{" "}
            <input
              type="password"
              //   value={editUserState?.matKhau}
              name="matKhau"
              onChange={onChangeInput}
            />
          </label>
          <br />
          <label for="email">
            Email:{" "}
            <input
              type="email"
              //   value={editUserState?.email}
              name="email"
              onChange={onChangeInput}
            />
          </label>
          <br />
          <label for="soDt">
            Số Điện Thoại:{" "}
            <input
              type="text"
              //   value={editUserState?.soDt}
              name="soDt"
              onChange={onChangeInput}
            />
          </label>
          <br />
          <label for="hoTen">
            Họ Tên:{" "}
            <input
              type="text"
              //   value={editUserState?.hoTen}
              name="hoTen"
              onChange={onChangeInput}
            />
          </label>
          <br />
          <label for="maLoaiNguoiDung">
            Mã Loại Người Dùng:{" "}
            <select name="maLoaiNguoiDung" id="" onChange={onChangeInput}>
              <option disabled selected value>
                {" "}
                -- select an option --{" "}
              </option>
              <option value="KhachHang">KhachHang</option>
              <option value="QuanTri">QuanTri</option>
            </select>
          </label>
        </form>
      </Modal>
    </>
  );
};

import React from "react";
import { Modal } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { updateUser } from "../../redux/actions/userAction/useraction";
import { useDispatch } from "react-redux";
import "./EditUserModal.css";
const EditUserModal = (props) => {
  //   console.log("Edit user Modal", props);
  //ediUser là thông tin user của từng Modal bật lên, setEditUser là hàm reset lại user khi tắt hay ok modal
  const { editUser, setEditUser } = props;
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  //State của các value input, không sử dụng props.editUser value vì lifecycle
  //Phải trải các thuộc tính của editUserr
  const [editUserState, setEditUserState] = useState({
    ...editUser,
    maNhom: "GP01",
  });
  console.log(editUserState);

  //Hàm Bắt sự Kiện Onchange của từng thẻ Input, sử dụng ES6[name,literal]
  const onChangeInput = (event) => {
    //name phải đặt trùng với các giá trị property trong object của State
    const { name, value } = event.target;
    //Cập Nhật lại state khi onchange thay đổi, phải trải các giá trị của object ra lại và dùng [name]:value để truy vấn tới property và gán giá trị mới
    setEditUserState({ ...editUserState, [name]: value, maNhom: "GP01" });
  };

  const submitUserUpdateForm = () => {
    console.log("Submit Form");
    //Gửi Thông Tin User Mới lên hàm Action
    dispatch(updateUser(editUserState));

    //Tắt Modal
    setIsModalVisible(false);
    //Reset lại editUser về Rỗng
    setEditUser({});
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    console.log("Cập Nhật Thành Công");
    //Reset lại Modal Trigger qua hàm setEditUser
    setEditUser({});
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    //Reset lại Modal Trigger qua hàm setEditUser
    setEditUser({});
  };

  //Trigger Modal when True, and monitoring Trigger, được từ CountDown_Timer sau khi thời gian chạy hết
  useEffect(() => {
    //Kiểm tra xem EditUser là rỗng hay không, nếu == 0 là rỗng thì ko bật Modal, nếu > 0 là có giá trị nên sẽ bật Modal
    if (Object.keys(editUser).length > 0) {
      showModal();
    }
    //Khi editUser Thay Đổi, cập nhật lại state của Input
    setEditUserState({ ...editUser, maNhom: "GP01" });
  }, [editUser]);
  return (
    <>
      <Modal
        centered
        title={
          <div>
            <h3>
              Cập Nhật Thông Tin Người Dùng Tài Khoản{" "}
              <span className="text-red-500 uppercase">
                {editUser.taiKhoan}
              </span>
            </h3>
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
              Cancel
            </button>
            <button
              className="bg-red-500 text-base px-4 py-4 mx-2 text-white"
              onClick={submitUserUpdateForm}
            >
              Cập Nhật
            </button>
          </div>
        }
      >
        <form onSubmit={submitUserUpdateForm} id="UpdateUser_MOdal">
          <label for={editUserState?.taiKhoan}>
            Tài Khoản{" "}
            <input
              type="text"
              value={editUserState?.taiKhoan}
              name="taiKhoan"
              onChange={onChangeInput}
              disabled
            />
          </label>
          <br />
          <label for="matKhau">
            Mật Khẩu{" "}
            <input
              type="text"
              value={editUserState?.matKhau}
              name="matKhau"
              onChange={onChangeInput}
            />
          </label>
          <br />
          <label for="email">
            Email:{" "}
            <input
              type="text"
              value={editUserState?.email}
              name="email"
              onChange={onChangeInput}
            />
          </label>
          <br />
          <label for="soDt">
            Số Điện Thoại:{" "}
            <input
              type="text"
              value={editUserState?.soDt}
              name="soDt"
              onChange={onChangeInput}
            />
          </label>
          <br />
          <label for="hoTen">
            Họ Tên:{" "}
            <input
              type="text"
              value={editUserState?.hoTen}
              name="hoTen"
              onChange={onChangeInput}
            />
          </label>
        </form>
      </Modal>
    </>
  );
};
export default EditUserModal;

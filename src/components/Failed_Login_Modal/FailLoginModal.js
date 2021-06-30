import React, { useState } from "react";
import { Modal } from "antd";
import { useEffect } from "react";
import { FrownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./FailLoginModal.css";
import { useDispatch, useSelector } from "react-redux";
import { MODAL_CANCEL } from "../../redux/constants/Constants";
const FailLoginModal = (props) => {
  const dispatch = useDispatch();
  const { redirectLink } = props;
  const { modalStatus } = useSelector((state) => state.UserReducer);
  console.log(redirectLink);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
    redirectLink();
  };

  const handleOk = () => {
    dispatch({
      type: MODAL_CANCEL,
    });
    setIsModalVisible(false);
    redirectLink();
  };

  const handleCancel = () => {
    dispatch({
      type: MODAL_CANCEL,
    });
    setIsModalVisible(false);
    redirectLink();
  };

  //Trigger Modal when True, and monitoring Trigger
  useEffect(() => {
    if (modalStatus) {
      showModal();
    }
  }, [modalStatus]);

  return (
    <>
      <Modal
        centered
        title={
          <div className="text-center text-6xl text-red-500">
            <FrownOutlined />
          </div>
        }
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <div className="flex justify-around">
            <div>
              <Link to="/login" className="btnModal">
                <button>Đăng Nhập</button>
              </Link>
            </div>
            <div className="btnModalLater">
              <button onClick={handleCancel}>Để Sau</button>
            </div>
          </div>
        }
      >
        <h1 className="text-center text-lg">Opps..</h1>
        <p className="text-center text-lg">Bạn Chưa Đăng Nhập...</p>
      </Modal>
    </>
  );
};
export default FailLoginModal;

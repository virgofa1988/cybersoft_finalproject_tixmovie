import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ConfirmBooking_Modal.css";
import { SyncOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { MODAL_RESET_BOOKING } from "../../redux/constants/Constants";

const ConfirmBooking_Modal = (props) => {
  console.log(props);
  const dispatch = useDispatch();

  const { modalConfirmBooking } = useSelector((state) => state.UserReducer);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    props.datVe(props.thongTinVeDat);
    dispatch({
      type: MODAL_RESET_BOOKING,
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    dispatch({
      type: MODAL_RESET_BOOKING,
    });
  };

  //Trigger Modal when True, and monitoring Trigger
  useEffect(() => {
    if (modalConfirmBooking) {
      showModal();
    }
  }, [modalConfirmBooking]);

  return (
    <>
      <Modal
        centered
        title={
          <div className="text-center text-6xl text-red-500">
            <SyncOutlined spin />
          </div>
        }
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <div className="flex justify-around">
            <div>
              <div className="btnModal">
                <button onClick={handleOk}>Xác Nhận</button>
              </div>
            </div>
            <div className="btnModalLater">
              <button onClick={handleCancel}>Để Sau</button>
            </div>
          </div>
        }
      >
        <h1 className="text-center text-lg">Xác Nhận Đặt Vé</h1>
      </Modal>
    </>
  );
};
export default ConfirmBooking_Modal;

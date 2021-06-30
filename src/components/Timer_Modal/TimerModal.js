import React, { memo, useState } from "react";
import { Modal, Button } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const TimerModal = (props) => {
  const { notiText, triggerModal } = props.contents;
  // console.log("Modal");

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    //Reset Lại Component Phong vé để đặt lại vé
    props.forceRenderPhongVe();
    //Reset lai triggerModal state = false after click OK--> Modal popups again
    props.resetTriggerModal();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    //Reset Lại Component Phong vé để đặt lại vé
    props.forceRenderPhongVe();
    //Reset lai triggerModal state = false after click OK--> Modal popups again
    props.resetTriggerModal();
  };

  //Trigger Modal when True, and monitoring Trigger
  useEffect(() => {
    if (triggerModal) {
      showModal();
    }
  }, [triggerModal]);

  return (
    <>
      <Modal
        centered
        title="Opps"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{notiText}...</p>
      </Modal>
    </>
  );
};
export default memo(TimerModal);

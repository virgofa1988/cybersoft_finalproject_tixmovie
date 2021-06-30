import React, { memo, useCallback, useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import TimerModal from "../Timer_Modal/TimerModal";

const CountDown_Timer = (props) => {
  // console.log("CountDown");
  const times = {
    Minute: 4,
    Second: 59,
  };
  const { Minute = 0, Second = 0 } = times;
  const [minutes, setMinutes] = useState(Minute);
  const [seconds, setSeconds] = useState(Second);

  //state to trigger Modal when Time out
  let [triggerModal, setTriggerModal] = useState(false);
  //Hàm reset lại Thời gian được truyền vào TimeModal khi xác nhận hết thời gian
  const resetTriggerModal = () => {
    setMinutes(4);
    setSeconds(59);
    setTriggerModal(false);
  };
  const resetTriggerModalCallBack = useCallback(resetTriggerModal, []);

  useEffect(() => {
    let myTimer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myTimer);
            //Trigger Modal Notification here//
            setTriggerModal(true);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }
    }, 1000);
    return () => {
      clearInterval(myTimer);
    };
  });

  let timerstyle = {
    color: "#fb4226",
    fontSize: "29px",
    textAlign: "center",
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: "normal",
  };
  //Nội dung gửi vào TimerModal, có điều kiện xét để triggerModal true or false, gửi vào các hàm để forceRender Phòng vé(mục đích là clear thông tin các ghế đang chọn, tổng tiền sau khi đã hét thời gian giữ vé), và hàm yêu cầu reset lại thời gian nếu bấm OK
  const contents = {
    notiText: "Thời gian đặt vé đã hết...",
    triggerModal: triggerModal,
  };
  return (
    <div className="">
      {minutes === 0 && seconds === 0 ? null : (
        <p style={timerstyle}>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
      )}
      <TimerModal
        contents={contents}
        resetTriggerModal={resetTriggerModalCallBack}
        forceRenderPhongVe={props.forceRenderPhongVe}
      />
    </div>
  );
};
export default memo(CountDown_Timer);

import { Modal as AntModal } from "antd";
import React from "react";
import { MODAL_BTN } from "./config";

const Modal = ({ title, isModalOpen, handleCancel, children, form }) => {
  const onSubmit = () => {
    form.submit();
  };
  const onCancel = () => form.resetFields();

  return (
    <AntModal
      footer={MODAL_BTN({ onSubmit, onCancel })?.map((item) => item)}
      title={title}
      open={isModalOpen}
      onCancel={handleCancel}
    >
      {children}
    </AntModal>
  );
};

export default Modal;

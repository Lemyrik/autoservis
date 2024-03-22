import React from "react";
import { Button, Modal as AntModal } from "antd";

const Modal = ({ isModalOpen, handleCancel, children, form }) => {
  const onSubmit = () => {
    form.submit();
  };
  const onReset = () => form.resetFields();

  return (
    <AntModal
      footer={
        <>
          <Button type="primary" onClick={onSubmit}>
            Create
          </Button>
          <Button onClick={onReset}>Cancel</Button>
        </>
      }
      title="Add car"
      open={isModalOpen}
      onCancel={handleCancel}
    >
      {children}
    </AntModal>
  );
};

export default Modal;

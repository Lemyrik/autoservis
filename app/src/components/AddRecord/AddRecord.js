import { Button, Form } from "antd";
import { useState } from "react";
import { entryFields } from "../../pages/CardPage/config";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addCar } from "../../store/carSlice";
import Modal from "../Modal/Modal";
import { FormItemComponent } from "../FormItem/FormItem";

function AddRecord() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  function openModal() {
    setIsModalOpen(!isModalOpen);
  }
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  async function onFinish(value) {
    dispatch(addCar(value));
    setIsModalOpen(false);
    form.resetFields();
  }

  return (
    <>
      <Button icon={<PlusOutlined />} type="primary" onClick={openModal}>
        Add car
      </Button>
      <Modal
        title="Add car"
        form={form}
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
      >
        <FormItemComponent
          form={form}
          config={entryFields}
          onFinish={onFinish}
        />
      </Modal>
    </>
  );
}

export default AddRecord;

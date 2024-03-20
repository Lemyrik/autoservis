import { Button, Form, Input } from "antd";
import { useState } from "react";
import { entryFields } from "../../pages/CardPage/config";
import PostCar from "../../API/PostCar";
import { PlusOutlined } from "@ant-design/icons";
import Modal from "../Modal/Modal";

function AddRecord({ getData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  function openModal() {
    setIsModalOpen(!isModalOpen);
  }
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  async function onFinish(value) {
    await PostCar(value);
    getData();
    setIsModalOpen(false);
    form.resetFields();
  }
  return (
    <>
      <Button icon={<PlusOutlined />} type="primary" onClick={openModal}>
        Add car
      </Button>
      <Modal
        form={form}
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        onFinish={onFinish}
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          {entryFields.map(({ label, name, rules }) => (
            <Form.Item key={label} label={label} name={name} rules={rules}>
              <Input />
            </Form.Item>
          ))}
        </Form>
      </Modal>
    </>
  );
}

export default AddRecord;

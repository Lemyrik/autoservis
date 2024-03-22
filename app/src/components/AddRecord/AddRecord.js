import { Button, Form, Input } from "antd";
import { useState } from "react";
import { entryFields } from "../../pages/CardPage/config";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addCar } from "../../store/carSlice";
import Modal from "../Modal/Modal";

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
    dispatch(addCar(value))
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

import { Button, Card, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { entryFields } from "./config";
import CardTitle from "../../components/CardTitle/CardTitle";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCar, updateCar } from "../../store/cardSlice";

function CardPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { car, loading } = useSelector((state) => state.card);
  
  const onFinish = (values) => {
    values.id = id;
    dispatch(updateCar(values));
  };

  useEffect(() => {
    dispatch(fetchCar(id));
  }, []);

  return (
    <Card title={<CardTitle />} className="card" loading={loading}>
      <Form
        onFinish={onFinish}
        labelCol={{
          span: 2,
        }}
        wrapperCol={{
          span: 23,
        }}
      >
        {entryFields.map(({ label, name, rules }) => (
          <FormItem
            key={label}
            label={label}
            name={name}
            initialValue={car?.[name]}
            rules={rules}
          >
            <Input />
          </FormItem>
        ))}
        <FormItem
          wrapperCol={{
            offset: 21,
          }}
        >
          <Button htmlType="Submit">Save</Button>
        </FormItem>
      </Form>
    </Card>
  );
}

export default CardPage;

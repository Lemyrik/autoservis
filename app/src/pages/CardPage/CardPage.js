import { Button, Card, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getCarById from "../../API/GetCarById";
import { UseFetching } from "../../hooks/UseFetching";
import putCar from "../../API/PutCars";
import { entryFields } from "./config";
import CardTitle from "../../components/CardTitle/CardTitle";

function CardPage() {
  const { id } = useParams();

  const [car, setCar] = useState({});
  const { fetchData, error, loading } = UseFetching();

  const getCar = async () => {
    const result = await getCarById(id);
    setCar(result);
  };

  useEffect(() => {
    fetchData(getCar);
  }, []);

  const onFinish = (values) => {
    putCar({ ...values, id });
  };

  return (
    Object.keys(car).length && (
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
    )
  );
}

export default CardPage;

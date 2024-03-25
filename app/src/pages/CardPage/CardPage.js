import { Card, Form } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardTitle from "../../components/CardTitle/CardTitle";
import { FormItemComponent } from "../../components/FormItem/FormItem";
import { fetchCar, updateCar } from "../../store/cardSlice";
import { entryFields } from "./config";
import { CARD_PAGE_BTN } from "./config";

function CardPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
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
      <FormItemComponent
        data={car}
        form={form}
        config={entryFields}
        onFinish={onFinish}
      >
        {CARD_PAGE_BTN({ text: "Save" })}
      </FormItemComponent>
    </Card>
  );
}

export default CardPage;

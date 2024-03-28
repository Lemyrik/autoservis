import { Card } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardTitle from "../../components/CardTitle/CardTitle";
import { fetchCar, updateCar } from "../../store/cardSlice";
import { CARD_PAGE_BTN } from "./config";
import Form from "@rjsf/antd";
import validator from "@rjsf/validator-ajv8";
import { schema } from "./schema";

function CardPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { car, loading } = useSelector((state) => state.card);

  const onFinish = (values) => {
    dispatch(updateCar(values.formData));
  };

  useEffect(() => {
    dispatch(fetchCar(id));
  }, []);

  return (
    <Card title={<CardTitle />} className="card" loading={loading}>
      <Form
        formData={car}
        schema={schema}
        validator={validator}
        onSubmit={onFinish}
      >
        {CARD_PAGE_BTN({ text: "Save" })}
      </Form>
    </Card>
  );
}

export default CardPage;

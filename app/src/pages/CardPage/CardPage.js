import { Card } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardTitle from "../../components/CardTitle/CardTitle";
import { fetchCar, updateCar } from "../../store/cardSlice";
import { CARD_PAGE_BTN } from "./config";
import { schema } from "./schema";
import { FormWithSchema } from "../../components/FormWithSchema/FormWithSchema";

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
      <FormWithSchema formData={car} schema={schema} onSubmit={onFinish}>
        {CARD_PAGE_BTN({ text: "Save" })}
      </FormWithSchema>
    </Card>
  );
}

export default CardPage;

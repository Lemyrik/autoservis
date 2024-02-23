import React from "react";
import { Card } from "antd";
import { useParams } from "react-router-dom";

function CardPage() {
  const { id } = useParams();
  console.log(id);

  return (
    <Card
      title="Default size card"
      style={{
        width: 300,
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
}

export default CardPage;

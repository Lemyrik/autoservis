import React from "react";
import { Card } from "antd";

function CardPage() {
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

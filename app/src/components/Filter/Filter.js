import { FilterOutlined } from "@ant-design/icons";
import { Button, Drawer, Space } from "antd";
import React, { useState } from "react";
import { FILTER_BTN } from "./config";
import { FormWithSchema } from "../FormWithSchema/FormWithSchema";
import "./filter.css";

const Filter = ({ schema, uiSchema, handleSearch, handleReset }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = React.useState(null);

  const showDrawer = () => setOpen(true);

  const onClose = () => setOpen(false);

  const onReset = () => {
    handleReset();
    setFormData(null)
  };
  const onSubmit = () => {
    handleSearch(formData);
  };
  return (
    <div className="filter">
      <Drawer title="Filter" onClose={onClose} open={open}>
        <FormWithSchema
          formData={formData}
          schema={schema}
          uiSchema={uiSchema}
          onChange={(e) => setFormData(e.formData)}
          onSubmit={onSubmit}
        >
          <Space>
            {FILTER_BTN({ onSubmit, onReset })?.map((item) => item)}
          </Space>
        </FormWithSchema>
      </Drawer>
      <Button onClick={showDrawer}>
        <FilterOutlined />
      </Button>
    </div>
  );
};

export default Filter;

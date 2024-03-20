import React, { useState } from "react";
import { FilterOutlined } from "@ant-design/icons";
import { Form, Input, Button, Drawer, Space, Switch } from "antd";
import { entryFields } from "./config";
const Filter = ({ getData }) => {
  const [open, setOpen] = useState(false);
  const [onlyNew, setOnlyNew] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onFinish = (params) => {
    const { isSwitch, ...arg } = params;
    if (onlyNew) {
      arg.age = 2024;
      arg.mileage = 0;
    }
    getData(arg);
  };
  function onReset() {
    getData();
  }
  const handleCheckboxChange = (condition) => {
    setOnlyNew(condition);
  };
  return (
    <>
      <div className="filter">
        <Drawer title="Filter" onClose={onClose} open={open}>
          <Form className="filter-form" onFinish={onFinish} layout="vertical">
            {entryFields.map(
              ({ label, name, type }) =>
                (!onlyNew || (name !== "age" && name !== "mileage")) && (
                  <Form.Item key={label} label={label} name={name}>
                    {type === "Switch" ? (
                      <Switch onChange={handleCheckboxChange} />
                    ) : (
                      <Input type={type} />
                    )}
                  </Form.Item>
                )
            )}
            <Space>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
              <Button htmlType="reset" onClick={onReset}>
                Reset
              </Button>
            </Space>
          </Form>
        </Drawer>
        <Button onClick={showDrawer}>
          <FilterOutlined />
        </Button>
      </div>
    </>
  );
};

export default Filter;

import { Table, message } from "antd";
import { React, useEffect, useState } from "react";
import getAllCars from "../../API/getAllCars";
import deleteCar from "../../API/deleteCar";
import tableColums from "./config";
import { UseFetching } from "../../hooks/UseFetching";

function MainPage() {
  const [data, setData] = useState("");
  const { fetchData, error, loading } = UseFetching();

  async function getData() {
    fetchData(async () => {
      const data = await getAllCars();
      setData(data);
    });
  }
  async function deleteData(id) {
    fetchData(async () => {
      await deleteCar(id);
      getData();
      message.success("car deleted");
    });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <Table
      columns={tableColums(deleteData)}
      dataSource={data}
      loading={loading}
    />
  );
}

export default MainPage;

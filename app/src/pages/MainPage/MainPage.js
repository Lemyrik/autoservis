import { Table, message } from "antd";
import { React, useEffect, useState } from "react";
import getAllCars from "../../API/GetAllCars";
import deleteCar from "../../API/DeleteCar";
import tableColums from "./config";
import { UseFetching } from "../../hooks/UseFetching";
import Filter from "../../components/Filter/Filter";

function MainPage() {
  const [data, setData] = useState("");
  const { fetchData, error, loading } = UseFetching();

  async function getData(params) {
    fetchData(async () => {
      const data = await getAllCars(params);
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
    <>
    <Filter getData={getData}/>
    <Table
      columns={tableColums(deleteData)}
      dataSource={data}
      loading={loading}
    />
    </>
  );
}

export default MainPage;

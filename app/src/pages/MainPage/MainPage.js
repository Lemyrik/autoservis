import "./MainPage.css";
import tableColums from "./config";
import Filter from "../../components/Filter/Filter";
import AddRecord from "../../components/AddRecord/AddRecord";
import { Table } from "antd";
import { React, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCars, deletedCar } from "../../store/carSlice";
import { mainPageFilterConfig } from "./config";

function MainPage() {
  const { cars, loading } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  async function deleteData(id) {
    dispatch(deletedCar(id));
  }
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const onSearch = (data) => {
    const { OnlyNewCars, ...arg } = data;
    if (OnlyNewCars) {
      arg.age = 2024;
      arg.mileage = 0;
    }
    dispatch(fetchCars(arg));
  };

  const onReset = () => {
    dispatch(fetchCars());
  };

  return (
    <>
      <div className="tools">
        <AddRecord />
        <Filter
          config={mainPageFilterConfig}
          handleSearch={onSearch}
          handleReset={onReset}
        />
      </div>
      <Table
        columns={tableColums(deleteData)}
        dataSource={cars}
        loading={loading}
      />
    </>
  );
}

export default MainPage;

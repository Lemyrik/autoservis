import { EditOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { React } from "react";
import { Link } from "react-router-dom";
import Popconfirms from "../../components/Popconfirm/Popcofirm";

function tableColums(deleteData) {
  return [
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      sorter: (a, b) => a?.brand?.localeCompare(b?.brand),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a?.age - b?.age,
    },
    {
      title: "Mileage, km",
      dataIndex: "mileage",
      key: "mileage",
      sorter: (a, b) => a?.mileage - b?.mileage,
    },
    {
      title: "Price, $",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a?.price - b?.price,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={record.id}>
            <EditOutlined />
          </Link>
          <Popconfirms record={record} deleteData={deleteData} />
        </Space>
      ),
    },
  ];
}
export default tableColums;

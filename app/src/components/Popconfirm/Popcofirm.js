import { DeleteOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";

const Popconfirms = ({record, deleteData}) => {
  const confirm = (record) => {
    deleteData(record.id);
  };
  return (
    <Popconfirm
      title="Delete the car"
      description="Are you sure to delete this car?"
      onConfirm={() => confirm(record)}
      okText="Yes"
      cancelText="No"
    >
      <DeleteOutlined />
    </Popconfirm>
  );
};
export default Popconfirms;

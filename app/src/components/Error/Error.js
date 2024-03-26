import React from "react";
import { Button, Result } from "antd";

function ErrorComponent({error}) {
  function onRefresh() {
    window.location.reload();
  }
  return (
    <Result
      title={error.name}
      subTitle={error.message}
      extra={
        <Button type="primary" onClick={onRefresh}>
          Refresh
        </Button>
      }
    />
  );
}
export default ErrorComponent;

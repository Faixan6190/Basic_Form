import React from "react";
import { Card, Col, Row } from "antd";
import AppButton from "./Button";
const AppCard = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
        <br />
        <AppButton title={"View details"} />
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
        <br />
        <AppButton title={"View details"} />
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
        <br />
        <AppButton title={"View details"} />
      </Card>
    </Col>
  </Row>
);
export default AppCard;

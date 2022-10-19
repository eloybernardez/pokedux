import React from "react";
import { Col, Row } from "antd";
import { CloseCircleTwoTone } from "@ant-design/icons";
import "../styles/EmptyState.css";

const EmptyState = () => {
  return (
    <>
      <Row justify="center">
        <Col>
          <h3 className="empty-title">
            <CloseCircleTwoTone twoToneColor="red" /> No Pokemons found!
          </h3>
        </Col>
      </Row>
    </>
  );
};

export default EmptyState;

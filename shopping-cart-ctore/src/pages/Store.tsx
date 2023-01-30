import { Row, Col } from "react-bootstrap";
import StoreItems from "../Store.json";
import StoreCard from "../components/StoreCard";

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {StoreItems.map((item) => (
          <Col key={item.id}>
            <StoreCard {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;

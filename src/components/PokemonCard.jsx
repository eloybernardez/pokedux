import { Card } from "antd";
import { StarOutlined } from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";

const PokemonCard = ({ name, image, description }) => {
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarOutlined />}
    >
      <Meta description={description} />
    </Card>
  );
};

export default PokemonCard;

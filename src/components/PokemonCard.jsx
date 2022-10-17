import { useDispatch } from "react-redux";
import { Card } from "antd";
import { setFavorite } from "../slices/dataSlice";
import Meta from "antd/lib/card/Meta";
import { StarButton } from "./StarButton";

const PokemonCard = ({ name, image, description, id, isFavorite }) => {
  const dispatch = useDispatch();

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={
        <StarButton
          isFavorite={isFavorite}
          onClick={() => handleOnFavorite()}
        />
      }
    >
      <Meta description={description} />
    </Card>
  );
};

export default PokemonCard;

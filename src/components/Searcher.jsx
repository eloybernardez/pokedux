import { Input } from "antd";
import { React } from "react";
import { setSearch } from "../slices/dataSlice";
import { setSearched, setError } from "../slices/uiSlice";
import { useDispatch } from "react-redux";
import { ExclamationCircleFilled } from "@ant-design/icons";

const { Search } = Input;
const Searcher = ({ loading, error }) => {
  const dispatch = useDispatch();

  const handleSearch = (searchValue) => {
    dispatch(setSearch(searchValue));
    dispatch(setSearched(true));
    dispatch(setError(isEmpty));
  };

  console.log(error);

  return (
    <>
      <Search
        placeholder={
          error ? "Not Pokemons found" : "Search for a Pokemon here..."
        }
        prefix={error ? <ExclamationCircleFilled /> : null}
        style={{ marginBottom: 10 }}
        onSearch={handleSearch}
        loading={loading}
        status={error ? "error" : ""}
      />
    </>
  );
};

export default Searcher;

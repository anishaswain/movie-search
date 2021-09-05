import { useDispatch } from "react-redux";
import { Input } from "antd";
import { fetchQueryData } from "../services/fetchData";
import {
  getFullDataAction,
  getFullDataSuccess,
  getFullDataFailure,
} from "../actions/getMovieDataAction";
const { Search } = Input;

export default function SearchInput() {
  const dispatch = useDispatch();

  const loadData = async (query) => {
    try {
      const data = await fetchQueryData(query);
      await dispatch(getFullDataAction(data));
      await dispatch(getFullDataSuccess());
    } catch (error) {
      await dispatch(getFullDataFailure());
    }
  };

  const onSearch = (value) => {
    console.log(value);
    loadData(value);
  };

  return (
    <Search
      className="searchInput"
      placeholder="Search for a movie and click enter"
      onSearch={onSearch}
      enterButton
    />
  );
}

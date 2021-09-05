import React, { useEffect, useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Layout,
  Row,
  Col,
  Breadcrumb,
  Image,
  Typography,
  Spin,
  Alert,
} from "antd";
import Rating from "./components/Rating";
import SearchInput from "./components/SearchInput";
import { fetchFullData } from "./services/fetchData";
import fetchImages from "./services/fetchImages";
import { useHistory } from "react-router-dom";
import {
  getFullDataAction,
  getFullDataSuccess,
  getFullDataFailure,
} from "./actions/getMovieDataAction";
import getRandomNum from "./utils/getRandomNum";

const num = getRandomNum();
const MovieGenres = React.lazy(() => import("./components/MovieGenres"));

const { Header, Content, Footer } = Layout;
const { Text, Title } = Typography;

function App() {
  const dispatch = useDispatch();
  let history = useHistory();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const movies = useSelector((state) => state.fullData);

  const loadData = async () => {
    try {
      const data = await fetchFullData();
      setData(data);
      setLoading(false);
      await dispatch(getFullDataAction(data));
      await dispatch(getFullDataSuccess());
    } catch (error) {
      await dispatch(getFullDataFailure());
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return movies.hasError ? (
    <Alert
      message="Error"
      description="Internal Server Error, Data can not be loaded."
      type="error"
      showIcon
    />
  ) : (
    <>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <header>
            <b>MOVIE SEARCH</b>
          </header>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>All movies</Breadcrumb.Item>
          </Breadcrumb>
          <div>
            <div className="searchDiv">
              <SearchInput />
            </div>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 380 }}
            >
              {loading || movies.isLoading ? (
                <div
                  id="laodingDiv"
                  style={{
                    padding: "0 10%",
                    minHeight: 380,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Spin />
                </div>
              ) : (
                <div style={{ padding: "0 20%" }}>
                  <Row>
                    <Col
                      xs={{ span: 24 }}
                      sm={{ span: 24 }}
                      md={{ span: 9 }}
                      style={{ padding: "5px" }}
                    >
                      <Image
                        className="headerImage"
                        preview={false}
                        src={fetchImages("w200", movies.data[num].poster_path)}
                        onClick={() =>
                          history.push(`/detail/${movies.data[num].id}`)
                        }
                      />
                    </Col>
                    <Col
                      xs={{ span: 24 }}
                      sm={{ span: 24 }}
                      md={{ span: 15 }}
                      style={{ padding: "5px" }}
                    >
                      <Row>
                        <Col sm={{ span: 24 }} lg={{ span: 12 }}>
                          <Title
                            level={3}
                            onClick={() =>
                              history.push(`/detail/${movies.data[num].id}`)
                            }
                            className="title"
                          >
                            {movies.data[num].original_title}
                          </Title>
                          <Title level={5}>
                            Release Date: {movies.data[num].release_date}
                          </Title>
                        </Col>
                        <Col sm={{ span: 24 }} lg={{ span: 6, offset: 6 }}>
                          <Rating rate={movies.data[num].vote_average} />
                        </Col>
                      </Row>
                      <br></br>
                      <Text>
                        <b>Movie Description: </b>
                        {movies.data[num].overview}
                      </Text>
                    </Col>
                  </Row>
                </div>
              )}
              <Suspense fallback={<div>Loading...</div>}>
                <MovieGenres />
              </Suspense>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
}

export default App;

import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Layout,
  Row,
  Col,
  Breadcrumb,
  Input,
  Image,
  Typography,
  Spin,
} from "antd";
import MovieGenres from "./components/MovieGenres";
import { StarFilled } from "@ant-design/icons";
import fetchFullData from "./services/fetchData";
import fetchImages from "./services/fetchImages";
// import fetchMovieData from "./services/fetchMovieData";
import {
  getFullDataAction,
  getFullDataSuccess,
  getFullDataFailure,
} from "./actions/getMovieDataAction";

const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { Text, Title } = Typography;

function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.fullData);

  const loadData = async () => {
    try {
      const data = await fetchFullData();
      await dispatch(getFullDataAction(data));
      await dispatch(getFullDataSuccess());
    } catch (error) {
      await dispatch(getFullDataFailure());
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const onSearch = () => {};
  return movies.isLoading ? (
    <Spin />
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
            <Breadcrumb.Item>Movie Details</Breadcrumb.Item>
          </Breadcrumb>
          <div>
            <div className="searchDiv">
              <Search
                className="searchInput"
                placeholder="Search for a movie"
                onSearch={onSearch}
                enterButton
              />
            </div>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 380 }}
            >
              {movies.data[0].isLoading ? (
                <Spin />
              ) : (
                <div style={{ padding: "0 10%" }}>
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
                        src={fetchImages("w300", movies.data[0].poster_path)}
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
                          <Title level={3}>
                            {movies.data[0].original_title}
                          </Title>
                          <Title level={5}>
                            Release Date: {movies.data[0].release_date}
                          </Title>
                        </Col>
                        <Col sm={{ span: 24 }} lg={{ span: 6, offset: 6 }}>
                          <div>
                            <StarFilled className="stars" />
                            <StarFilled className="stars" />
                            <StarFilled className="stars" />
                            <StarFilled className="stars" />
                            <StarFilled className="stars" />
                          </div>
                        </Col>
                      </Row>
                      <br></br>
                      <Text>
                        <b>Movie Description: </b>
                        {movies.data[0].overview}
                      </Text>
                    </Col>
                  </Row>
                </div>
              )}
              <MovieGenres />
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

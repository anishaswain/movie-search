import "../App.css";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Layout, Row, Col, Breadcrumb, Image, Typography, Spin } from "antd";
import fetchMovieData from "../services/fetchMovieData";
import fetchImages from "../services/fetchImages";
import {
  getMovieDataAction,
  getMovieDataSuccess,
  getMovieDataFailure,
} from "../actions/getMovieDetails";
import Rating from "./Rating";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function MovieDetails() {
  let history = useHistory();
  let { id } = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async (id) => {
    try {
      const data = await fetchMovieData(id);
      setData(data);
      setLoading(false);
      await dispatch(getMovieDataAction(data));
      await dispatch(getMovieDataSuccess());
    } catch (error) {
      await dispatch(getMovieDataFailure());
    }
  };

  useEffect(() => {
    loadData(id);
  }, []);

  return (
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
            <Breadcrumb.Item onClick={() => history.push("/")}>
              All movies
            </Breadcrumb.Item>
            <Breadcrumb.Item>Movie Details</Breadcrumb.Item>
          </Breadcrumb>
          <div>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 380 }}
            >
              {loading ? (
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
                        src={fetchImages("w300", data.poster_path)}
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
                          <Title level={3}>{data.original_title}</Title>
                          <Title level={5}>
                            Release Date: {data.release_date}
                          </Title>
                          <p>
                            <b>Length:</b> {data.runtime}
                          </p>
                        </Col>
                        <Col sm={{ span: 24 }} lg={{ span: 6, offset: 6 }}>
                          <Rating rate={data.vote_average} />
                        </Col>
                      </Row>
                      <div>
                        <p style={{ marginBottom: "5px" }}>
                          <b>Directed By:</b>
                          {data.crew
                            .filter(
                              (item) =>
                                item.known_for_department === "Directing"
                            )
                            .map((item, key) => (
                              <span key={key}>{item.name},</span>
                            ))}
                        </p>
                        <p>
                          <b>Cast</b>
                          {data.cast
                            .filter(
                              (item) => item.known_for_department === "Acting"
                            )
                            .splice(0, 5)
                            .map((item, key) => (
                              <span key={key}>{item.name},</span>
                            ))}
                        </p>
                      </div>
                      <p>
                        <b>Movie Description: </b>
                        {data.overview}
                      </p>
                    </Col>
                  </Row>
                </div>
              )}
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

export default MovieDetails;

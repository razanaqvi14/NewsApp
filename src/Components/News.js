import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import loadingGif from "../assets/loading.gif";

export default class News extends Component {
  static defaultProps = {
    country: "us",
    category: "technology",
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      totalResults: 0,
      page: 1,
      hasMore: true,
    };
    document.title = `NexusNews | ${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  async componentDidMount() {
    this.props.setProgress(20);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    let response = await fetch(url);
    this.props.setProgress(50);
    let data = await response.json();
    this.props.setProgress(70);
    this.setState({
      articles: data.articles,
      totalResults: data.totalResults,
    });
    this.props.setProgress(100);
  }

  fetchMore = async () => {
    if (this.state.articles.length <= this.state.totalResults) {
      this.setState({
        page: this.state.page + 1,
      });
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
      let response = await fetch(url);
      let data = await response.json();
      this.setState({
        articles: this.state.articles.concat(data.articles),
        totalResults: data.totalResults,
      });
    } else {
      this.setState({
        hasMore: false,
      });
    }
  };

  render() {
    return (
      <>
        <div className="container mt-5 flex justify-center">
          <h1 className="text-3xl w-fit font-semibold bg-slate-900 text-white p-2.5 rounded-xl">
            NexusNews - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
            Headlines
          </h1>
        </div>
        <InfiniteScroll
          style={{ padding: "49px 12px" }}
          dataLength={this.state.articles.length}
          next={this.fetchMore}
          hasMore={this.state.hasMore}
          loader={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img style={{ width: "40px" }} src={loadingGif} alt="" />
            </div>
          }
          endMessage={
            <h5 className="font-semibold text-center mt-4 mb-2">
              You have reached the end of this page
            </h5>
          }
        >
          <div className="row mt-4">
            {this.state.articles.map((article, i) => {
              return (
                <div
                  className="col mb-4 flex justify-center align-middle"
                  key={i}
                >
                  <NewsItem
                    key={i}
                    title={article.title !== null ? article.title : ""}
                    description={
                      article.description !== null ? article.description : ""
                    }
                    imageURL={article.urlToImage}
                    newsURL={article.url}
                    publishedAt={article.publishedAt}
                    author={article.author}
                    source={article.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

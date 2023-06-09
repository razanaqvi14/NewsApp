import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "us",
    category: "technology",
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      pageSize: 8,
    };
  }

  updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5e8603c7a4d9464a817e8d73e79ad3ce&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    this.setState({
      loading: true,
    });
    let response = await fetch(url);
    let data = await response.json();
    this.setState({
      articles: data.articles,
      totalArticles: data.totalResults,
      loading: false,
    });
  };

  async componentDidMount() {
    this.updateNews();
  }

  handlePreviousClick = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };

  selectedPageSize = async (numberOfArticles) => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=5e8603c7a4d9464a817e8d73e79ad3ce&page=1&pageSize=${
      this.state.pageSize - this.state.pageSize + numberOfArticles
    }`;
    this.setState({
      loading: true,
    });
    let response = await fetch(url);
    let data = await response.json();
    this.setState({
      articles: data.articles,
      totalArticles: data.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container my-4 flex flex-col justify-center align-middle">
        <div
          className="flex justify-between mb-4"
          style={{ alignItems: "center" }}
        >
          <h1 className="text-3xl font-semibold bg-slate-900 text-white w-fit p-2.5 rounded-xl">
            NexusNews - Top headlines of category "{this.props.category}"
          </h1>
          <div
            className="dropdown flex flex-col justify-center"
            style={{ alignItems: "center" }}
          >
            <p className="mb-2 font-semibold">
              Default number of articles per page is 8
            </p>
            <button
              style={{ width: "54%" }}
              className="btn btn-dark bg-slate-900 hover:bg-slate-700 text-white dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Articles Per Page
            </button>
            <ul className="dropdown-menu">
              <li
                onClick={() => {
                  this.selectedPageSize(4);
                }}
              >
                <a
                  className="dropdown-item hover:bg-slate-900 hover:text-white"
                  href="#"
                >
                  4
                </a>
              </li>
              <li
                onClick={() => {
                  this.selectedPageSize(8);
                }}
              >
                <a
                  className="dropdown-item hover:bg-slate-900 hover:text-white"
                  href="#"
                >
                  8
                </a>
              </li>
              <li
                onClick={() => {
                  this.selectedPageSize(12);
                }}
              >
                <a
                  className="dropdown-item hover:bg-slate-900 hover:text-white"
                  href="#"
                >
                  12
                </a>
              </li>
              <li
                onClick={() => {
                  this.selectedPageSize(16);
                }}
              >
                <a
                  className="dropdown-item hover:bg-slate-900 hover:text-white"
                  href="#"
                >
                  16
                </a>
              </li>
              <li
                onClick={() => {
                  this.selectedPageSize(20);
                }}
              >
                <a
                  className="dropdown-item hover:bg-slate-900 hover:text-white"
                  href="#"
                >
                  20
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          {this.state.articles.map((article) => {
            return (
              <div
                className="col mb-4 flex justify-center align-middle"
                key={article.url}
              >
                {this.state.loading ? (
                  <Spinner />
                ) : (
                  <NewsItem
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
                )}
              </div>
            );
          })}
        </div>

        <div className="flex justify-around" style={{ alignItems: "center" }}>
          <button
            className="btn btn-dark bg-slate-900 hover:bg-slate-700"
            onClick={this.handlePreviousClick}
            disabled={this.state.page === 1}
          >
            &larr; Previous
          </button>
          <div className="text-base font-semibold">
            Page No. {this.state.page}
          </div>
          <button
            className="btn btn-dark bg-slate-900 hover:bg-slate-700"
            onClick={this.handleNextClick}
            disabled={
              this.state.page ===
              Math.ceil(this.state.totalArticles / this.state.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsURL, publishedAt, author, source } =
      this.props;
    return (
      <div className="card" style={{ width: "18rem", height: "44rem" }}>
        <span
          class="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ zIndex: 1, left: "85%" }}
        >
          {source}
        </span>
        <img
          src={
            imageURL === null
              ? "data:image/png;base64,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"
              : imageURL
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body flex flex-col">
          <h5 className="card-title font-semibold text-md">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author || "Anonymous"} on{" "}
              {new Date(publishedAt).toUTCString()}
            </small>
          </p>
          <a
            style={{ position: "absolute", bottom: "20px", width: "90%" }}
            href={newsURL}
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 mt-3"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

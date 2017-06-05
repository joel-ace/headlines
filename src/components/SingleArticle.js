import React from 'react';

class SingleArticle extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="article">
          <span className="articleImage">
            <img
              src="https://s-media-cache-ak0.pinimg.com/736x/d9/a8/12/d9a81267254a6afc8672e646e18e4bbf.jpg"
              alt=""
              width="400px"
            />
          </span>
          <div className="link">
            <h3><a href="/service/accounting-services">{src.title}</a></h3>
            <p>
              {src.description}
              <span>
                <a href="/articles/{src.id}">Read More</a>
              </span>
            </p>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    );
  }
}

export default SingleArticle;

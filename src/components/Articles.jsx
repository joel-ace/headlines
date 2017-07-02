import React from 'react';
import SingleArticle from './SingleArticle.jsx';
import Sidebar from './Sidebar.jsx';
import ArticleLoading from './ArticleLoading.jsx';
import HigherOrderComponent from './HigherOrderComponent.jsx';

/**
 * @description Article component
 * @param {object} props
 * @returns {ReactElement} a react component
 */
const Articles = props => (
    <section id="articles">
      <div className="container">
        <div className="pull-right">
          <select name="sort-articles"
            onChange={props.sortArticles}
            id="sort-articles"
            className="form-control"
          >
            {
              props.sortBy.map(
                (sort, index) => <option key={index} value={sort}>{sort}</option>,
              )
            }
          </select>
        </div>
        <h2>
          Articles {(props.sourceTitle ? ` from ${props.sourceTitle}` : '')}
        </h2>
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <div className="row same-height-fix">
              { props.loading
                ? <ArticleLoading />
                : props.articles.map(
                    article => <SingleArticle key={article.title} {...article} />,
                  )
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );

export default HigherOrderComponent(Articles);

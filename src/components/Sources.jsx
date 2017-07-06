import React from 'react';
import SingleSource from './SingleSource.jsx';
import ArticleLoading from './ArticleLoading.jsx';
import HigherOrderComponent from './HigherOrderComponent.jsx';
import Utils from '../utils';

/**
 * @description Sources component
 * @function
 * @param {object} props
 * @returns {ReactElement} a react component
 */
const Sources = props => (
    <section id="sources">
      <div className="container">
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            <div className="form-group">
              <input
                onChange={props.searchSources}
                type="text"
                className="form-control p20"
                placeholder="Search News Source"
              />
              <div className="p20" />
            </div>
          </div>
          <div className="col-md-3" />
        </div>
        <div className="row">
          { props.sourceLoading ? <ArticleLoading /> : Utils.generateComponents(props.sources, SingleSource, 'id') }
        </div>
      </div>
    </section>
  );

export default HigherOrderComponent(Sources);

import React from 'react';
import SingleSource from './SingleSource';

class Sources extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section id="sources">
        <div className="container">
          <h2>Sources</h2>
          <div className="row">
            <SingleSource />
          </div>
        </div>
      </section>
    );
  }
}

export default Sources;

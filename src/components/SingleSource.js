import React from 'react';

class SingleSource extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-xs-6 col-sm-4 col-md-4">
        <div className="source">
          <span className="icon"><i className="fa fa-newspaper-o" /></span>
          <div className="link">
            <h3><a href="/service/accounting-services">The Wall Street Journal</a></h3>
            <p>jg kjdhgkjdnf gkdnkgjndfkjgnkdngkjdfngkjdf gkdfngkjdfkgjdfjkgn df</p>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    );
  }
}

export default SingleSource;

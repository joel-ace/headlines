import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header id="header">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              Headlines
            </div>
            <div className="col-md-6">
              <input
                onChange={this.searchSource}
                type="text"
                className="form-control p20"
                placeholder="Search News Source"
              />
            </div>
            <div className="col-md-3">
              <span className="google_login pull-right">
                <span><i className="fa fa-google-plus" /></span>
                <span> Login with Google</span>
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

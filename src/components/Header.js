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
              <div className="google_login">
                <span>Login with Google</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

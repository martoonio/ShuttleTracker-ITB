import React from "react";
class Header extends React.Component {
  render() {
    return(
      <header>
        <button className="btn btn-primary">
        <span className="title">SHUTTLE TRACKER ITB</span>
        </button>
        <button className="btn btn-secondary">
        <span className="title">BOARD INFO</span>
          <section>ESTIMASI
          </section>
        </button>
      </header>
    );
  }
}
export default Header;
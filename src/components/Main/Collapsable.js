import React from "react";

class Collapsable extends React.Component {
  render(){
    return (
      <div className="collapsable__header js-collapsable-header">
        <i className={this.props.icon}></i>
        <h2 className="collapsable__header--title">{this.props.title}</h2>
        <i className="fas fa-chevron-down js-arrow rotate"></i>
      </div>
    );
  }
}

export default Collapsable;

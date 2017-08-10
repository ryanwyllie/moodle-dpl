import React from "react";

export default class LoadingSpinner extends React.Component {
  render() {
    const { width, height, style } = this.props;

    return (
      <svg class="spinner" style={style} width={width} height={height} viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
         <circle class="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
      </svg>
    );
  }
}

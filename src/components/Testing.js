import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
export default class Testing extends Component {
  render() {
    return <div />;
  }
}
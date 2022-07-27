import React, { Component } from "react";

class Title extends Component {
  state = {
    title: "Titulo de Tienda",
    subtitle: "Subtitulo",
  };

  updateTitle() {
    this.setState({ title: "Titulo cambiado" });
  }

  updateSubtitle() {
    this.setState({ subtitle: "1648152" });
  }

  render() {
    return (
      <>
        <h1>{this.state.title}</h1>
        <h2>{this.state.subtitle}</h2>
        <button onClick={() => this.updateTitle()}>Cambiar titulo</button>
        <button onClick={() => this.updateSubtitle()}>Cambiar subtitulo</button>
      </>
    );
  }
}

export default Title;

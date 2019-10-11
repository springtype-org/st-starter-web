import { st } from "springtype/core";
import { customElement } from "springtype/web/customelement";
import { tsx } from "springtype/web/vdom";
import "./polyfills";

@customElement("st-scratch-web-index-page")
export class IndexPage extends st.element {
  render() {
    return <p>Hello, world!</p>;
  }
}

st.render(IndexPage);

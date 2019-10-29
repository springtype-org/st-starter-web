import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { tsx } from "springtype/web/vdom";
import "./polyfills";

@component()
export class IndexPage extends st.component {
  render() {
    return <p>Hello, world!</p>;
  }
}

st.render(<IndexPage />);

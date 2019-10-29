import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface";
import { tsx } from "springtype/web/vdom";
import "./polyfills";

@component()
export class IndexPage extends st.component implements ILifecycle {
  render() {
    return <p>Hello, world!</p>;
  }
}

st.render(<IndexPage />);

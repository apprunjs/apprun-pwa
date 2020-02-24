import { app, Component } from "apprun";

class App extends Component {
  view = () => <div>Hello World - PWA!</div>
}

new App().start("my-app");


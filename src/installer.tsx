import { app, Component } from "apprun";

export default class Installer extends Component {
  state = false;

  view = state => (
    <>
      {state && <button $onclick="@appinstall">Install</button>}
    </>
  );

  update = {
    "@showInstallPromotion": () => true,
    "@appinstalled": () => false
  };
}

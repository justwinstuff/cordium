import { signInCmd } from "./cmd/signIn.js";
import { signOutCmd } from "./cmd/signOut.js";

function activate(context) {
  signInCmd(context);
  signOutCmd(context);
}

function deactivate() {}

export { activate, deactivate };

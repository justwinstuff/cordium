import { signInCmd } from "./auth/signInCmd.js";
import { signOutCmd } from "./auth/signOutCmd.js";

function activate(context) {
  signInCmd(context);
  signOutCmd(context);
}

function deactivate() {}

export { activate, deactivate };

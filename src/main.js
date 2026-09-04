import * as vscode from "vscode";
import { signInCmd } from "./auth/signIn.js";

function activate(context) {
  signInCmd(context);
}

function deactivate() {}

export { activate, deactivate };

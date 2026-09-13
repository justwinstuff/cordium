import * as vscode from "vscode";
import { signIn } from "../auth/auth.js";

export function signInCmd(context) {
  const signInCmd = vscode.commands.registerCommand(
    "cordium.signIn",
    async () => {
      try {
        const token = await vscode.window.showInputBox({
          prompt: "Sign In with Discord Token",
          placeHolder: "Enter your Discord token",
          password: true,
        });

        if (!token) return;

        await context.secrets.store("discordToken", token);

        const client = await signIn(token);

        await vscode.window.showInformationMessage(
          `Cordium: Signed In as ${client.user.username}`,
        );
      } catch (err) {
        await vscode.window.showErrorMessage(`Cordium: Sign in failed!`);
      }
    },
  );

  context.subscriptions.push(signInCmd);
}

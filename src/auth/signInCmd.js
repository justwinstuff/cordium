import * as vscode from "vscode";

export function signInCmd(context) {
  const signIn = vscode.commands.registerCommand("cordium.signIn", async () => {
    try {
      const token = await vscode.window.showInputBox({
        prompt: "Sign In with Discord Token",
        placeHolder: "Enter your Discord token",
        password: true,
      });

      if (!token) return;

      await context.secrets.store("discordToken", token);
      await vscode.window.showInformationMessage("Cordium: Signed In");
    } catch (err) {
      await vscode.window.showErrorMessage(`Cordium: Sign in failed!`);
    }
  });

  context.subscriptions.push(signIn);
}

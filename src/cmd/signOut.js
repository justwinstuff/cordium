import * as vscode from "vscode";

export function signOutCmd(context) {
  const signOutCmd = vscode.commands.registerCommand(
    "cordium.signOut",
    async () => {
      try {
        await context.secrets.delete("discordToken");
        await vscode.window.showInformationMessage("Cordium: Signed Out");
      } catch (err) {
        await vscode.window.showErrorMessage(`Cordium: Sign out failed!`);
      }
    },
  );

  context.subscriptions.push(signOutCmd);
}

import * as vscode from "vscode";

export function signInCmd(context) {
  const signIn = vscode.commands.registerCommand("cordium.signIn", async () => {
    console.log("Sign in command called");

    const token = await vscode.window.showInputBox({
      prompt: "Sign In with Discord Token",
      placeHolder: "Enter your Discord token",
      password: true,
    });

    if (!token) return;

    await context.secrets.store("discordToken", token);
  });

  context.subscriptions.push(signIn);
}

'use strict';

import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.jumpToTest', () => {
    const splitFileName: string[] = path.basename(vscode.window.activeTextEditor.document.fileName).split(".");
    const fileName: string = splitFileName.slice(0,-1).join('');
    const extension: string = splitFileName[splitFileName.length-1];
        
    let globPattern: string = `**/*${fileName}`;
    globPattern = determineGlobPattern(globPattern, extension);

    vscode.workspace.findFiles(globPattern, null, 1).then((ps: vscode.Uri[]): void => {
      if (ps.length === 0) {
        vscode.window.setStatusBarMessage('jumpToTest: Unable to find test file', 3000);
        return;  
      }  

      vscode.commands.executeCommand('vscode.open', vscode.Uri.file(ps[0].path));
    });

    function determineGlobPattern(globPattern: string, extension: string): string {
      if (globPattern.toLowerCase().includes('spec') || globPattern.toLowerCase().includes('test')) {
        globPattern = handleSwitchFromTestFile(globPattern);
      }
      else {
        globPattern = handleSwitchToTestFile(globPattern);
      }

      return `${globPattern}.${extension}`;
    }

    function handleSwitchFromTestFile(globPattern: string): string {
      let postfix: string = addPostfix(globPattern);

      globPattern = globPattern.replace(new RegExp(`${postfix}spec`, 'ig'), '');
      globPattern = globPattern.replace(new RegExp(`${postfix}test`, 'ig'), '');

      return globPattern;
    }

    function handleSwitchToTestFile(globPattern: string): string {
      let postfix: string = addPostfix(globPattern);

      return `${globPattern + postfix}{spec,test,Spec,Test,.spec,.test}`;
    }

    function addPostfix(globPattern: string): string {
      return globPattern.includes('_') ? '_' : '';
    }
  });

  context.subscriptions.push(disposable);
}
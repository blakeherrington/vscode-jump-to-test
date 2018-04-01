# vscode-jump-to-test README

This extension registers a command that will open the corresponding test file of the current file open in your editor. It does this based on the file name of the current file and searches for a test file that matches the current file name's pattern.

## Features

When the command is issued, your editor will jump to the test file if the extension is able to find one.

<img src='https://raw.githubusercontent.com/blakeherrington/vscode-jump-to-test/master/src/images/jump-to-test.gif'>

If it is unable find a test file, you will see a message in the status bar indicating the failure (see below).

<img src='https://raw.githubusercontent.com/blakeherrington/vscode-jump-to-test/master/src/images/notfound.png'>

The extension should be able to successfully take you between files named in the following patterns, agnostic of extensions:

FileName.js -> FileName.spec.js
FileName.spec.js -> FileName.js

FileName.js -> FileName.test.js
FileName.test.js -> FileName.js

file_name.rb -> file_name_test.rb
file_name_test.rb -> file_name.rb

file_name.rb -> file_name_spec.rb
file_name_spec.rb -> file_name.rb

FileName.java -> FileNameTest.java
FileNameTest.java -> FileName.java

FileName.java -> FileNameSpec.java
FileNameSpec.java -> FileName.java

## Release Notes

Users appreciate release notes as you update your extension.

### 0.0.1

- Initial release
- Ability to jump to corresponding spec/test file based on current file's name

## [0.0.2]
- Add default keybinding as ctrl+alt+t

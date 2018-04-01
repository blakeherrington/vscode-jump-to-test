//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';
import * as vscode from 'vscode';
import * as jumpToTest from '../extension';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// import * as vscode from 'vscode';
// import * as myExtension from '../extension';


// TODO: Convert to actually be typescript?
// Clean up package.json
// Add enzyme / mocha for describe/it
// Add tests

// Test cases
// FileName.java -> FileNameTest.java
// FileNameTest.java -> FileName.java

// FileName.java -> FileNameSpec.java
// FileNameSpec.java -> FileName.java

// file_name.rb -> file_name_test.rb
// file_name_test.rb -> file_name.rb

// file_name.rb -> file_name_spec.rb
// file_name_spec.rb -> file_name.rb

// FileName.js -> FileName.spec.js
// FileName.spec.js -> FileName.js

// FileName.js -> FileName.test.js
// FileName.test.js -> FileName.js

// When zero results come back from findFiles, ensure we call command to show alert

// Stub current active editor path name and stuff
// Stub calls to execute command with the expected parameters

// Defines a Mocha test suite to group tests of similar kind together
suite("jumpToTest Tests", function () {

    // Defines a Mocha unit test
    test("Something 1", function() {
        assert.equal(-1, [1, 2, 3].indexOf(5));
        assert.equal(-1, [1, 2, 3].indexOf(0));
    });
});
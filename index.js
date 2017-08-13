// Copyright 2015-2017 Stanislav Senotrusov
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// This particular style here make that code easy to use in JSON files

/* eslint quote-props: ["error", "always"] */
/* eslint quotes: ["error", "double"] */
/* eslint comma-dangle: ["error", "never"] */

"use strict";

module.exports = {

  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "script"
  },

  "env": {
    // "browser": true,
    // "node": true,
    // "shared-node-browser": true,
    "es6": true
    // "worker": true,
    // "serviceworker": true
  },

  "globals": {
  },

  "rules": {
    "for-direction": "off",
    "no-await-in-loop": "off",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "off",
    "no-console": "off", // Console is ok
    "no-constant-condition": "error",
    "no-control-regex": "off",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "error", // Not quite sure, perhaps that should be disabled
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-parens": "off", // Extra parentheses may bring more clarity
    "no-extra-semi": "error",
    "no-func-assign": "error",
    "no-inner-declarations": ["error", "both"], // Block-scoped functions will probably land one day in JS, but until then perhaps we should avoid both function and var declarations in nested blocks
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": ["error", { // Please use \uXXXX notation for irregular whitespaces
      "skipStrings": false,
      "skipComments": false,
      "skipRegExps": false,
      "skipTemplates": false
    }],
    "no-obj-calls": "error",
    "no-prototype-builtins": "off", // Object.prototype.hasOwnProperty.call is safe but ugly
    "no-regex-spaces": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "off", // Someone might need a string with ${foo} in it
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "off", // We don't see how it might be a problem if someone wants to return from the finally block then
    "no-unsafe-negation": "error",
    "use-isnan": "error",
    "valid-jsdoc": "off", // We don't use that kind of documentation for now
    "valid-typeof": "error",


    "accessor-pairs": ["error", { // Not sure about that
      "setWithoutGet": true,
      "getWithoutSet": false
    }],
    "array-callback-return": "error",
    "block-scoped-var": "error", // Not sure about that
    "class-methods-use-this": "off",
    "complexity": "off",
    "consistent-return": ["error", {
      "treatUndefinedAsUnspecified": false
    }],
    "curly": ["error", "multi-or-nest", "consistent"], // Just turn it off?
    "default-case": "off",
    "dot-location": ["error", "property"],
    "dot-notation": "off", // There are edge cases, e.g. when you have a code which have to use a lot of square-brackets and few uses of dot notation will break the code visually into parts
    "eqeqeq": ["error", "smart"], // "foo == null" is ok we think
    "guard-for-in": "off",
    "no-alert": "error",
    "no-caller": "error",
    "no-case-declarations": "off", // Not sure about that, but better have the ability to declare let/const than not
    "no-div-regex": "error",
    "no-else-return": "off",
    "no-empty-function": "error", // We think is too much of a distraction to write "// do nothing" in each of the empty functions, especially when they serve as placeholders before the commit. It will totally not help having realtime linting as-you-type, but if you do lint check from time to time it might help.
    "no-empty-pattern": "error",
    "no-eq-null": "off", // We think it is ok to use "foo == null" to check for equal foo to both undefined and null
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error", // Please use "// falls through" or "// fall through" comment to indicate that fall through is expected
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "error", // no-new-wrappers is also activated, don't know how they both will work together
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error", // If we'll choose to juggle functions around freely, that may trigger false positives
    "no-iterator": "error",
    "no-labels": "off", // We think that one who use labels know what he is doing
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "off", // Just generally avoid them
    "no-multi-spaces": ["error", { // There might be other cases, if there are any use to pad code with spaces for visual clarity then an additional exception might be added here. Maybe the whole rule might be disabled at some point, but we'll see.
      "ignoreEOLComments": true,
      "exceptions": {
        "Property": true,
        "VariableDeclarator": true,
        "ImportDeclaration": true,
        "AssignmentExpression": true,
        "BinaryExpression": true,
        "LogicalExpression": true,
        "MethodDefinition": true,
        "CallExpression": true,
        "FunctionExpression": true,
        "IfStatement": true
      }
    }],
    "no-multi-str": "error",
    "no-new": "off", // We think there are some use cases for that
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "off", // Perhaps not changing the parameters might be a good idea but we have few function which do exactly that and they are quite elegant. Since that does not break any JS optimisation so far, we see no issue in reassigning parameters.
    "no-proto": "error",
    "no-redeclare": ["error", {
      "builtinGlobals": true
    }],
    "no-restricted-properties": "off",
    "no-return-assign": ["error", "except-parens"],
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": ["error", {
      "props": true
    }],
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": ["error", {
      "allowShortCircuit": true,
      "allowTernary": true,
      "allowTaggedTemplates": false
    }],
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-warning-comments": "off", // Don't care
    "no-with": "error",
    "prefer-promise-reject-errors": ["error", {
      "allowEmptyReject": false // Maybe we should allow that?
    }],
    "radix": ["error", "always"],
    "require-await": "error",
    "vars-on-top": "error", // Is it a good idea?
    "wrap-iife": ["error", "outside", {
      "functionPrototypeMethods": true
    }],
    "yoda": ["error", "never"],


    "strict": ["error", "global"], // Specifying "global" here, because by default "function" option will be triggered if no node or commonjs environments are enabled. We don't see how "function" option can be useful.


    "init-declarations": "off",
    "no-catch-shadow": "off", // no-shadow covers that
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-restricted-globals": "off",
    "no-shadow": ["error", { // We are not 100% sure about that rule. Most of the time we are trying to avoid variable shadowing, so perhaps it is ok to force that.
      "builtinGlobals": false, // window.length, window.name are the names which may get shadowed frequently
      "hoist": "all"
      // "allow": ["resolve", "reject"] // Enable that?
    }],
    "no-shadow-restricted-names": "error",
    "no-undef": ["error", {
      "typeof": true // Not sure, but perhaps all variables must be known to eslint - they are either defined, either known from environment
    }],
    "no-undef-init": "error",
    "no-undefined": "off", // We'd like to use undefined
    "no-unused-vars": ["error", { // It's quite strict, we'll see how it will fit
      "vars": "all",
      "args": "none",
      "ignoreRestSiblings": true,
      "caughtErrors": "all" // Not sure about that
    }],
    "no-use-before-define": ["error", {
      "functions": true, // Not sure, but perhaps there are cases when one might really need hoisted function
      "classes": true,
      "variables": true
    }],


    "callback-return": "off",
    "global-require": "off",
    "handle-callback-err": ["error", "^(err|error|.+Error)$"],
    "no-buffer-constructor": "error",
    "no-mixed-requires": ["error", {
      "allowCall": true
    }],
    "no-new-require": "error",
    "no-path-concat": "error",
    "no-process-env": "off",
    "no-process-exit": "off",
    "no-restricted-modules": "off",
    "no-sync": "off",


    "array-bracket-newline": "off", // Sometimes irregular array formatting may help to communicate ideas better
    "array-bracket-spacing": ["error", "never"],
    "array-element-newline": "off", // Sometimes irregular array formatting may help to communicate ideas better
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs", {
      "allowSingleLine": true
    }],
    "camelcase": "off", // We prefer camelcase but sometimes there are different needs
    "capitalized-comments": "off",
    "comma-dangle": ["error", "never"],
    "comma-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never"],
    "consistent-this": "off", // Different people may have different preferences. Also, capturing of nested "this" is not possible if that rule is enabled.
    "eol-last": ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "func-name-matching": "off", // We think there are too many different cases
    "func-names": "off", // We don't want to enforce that
    "func-style": "off", // We think both are fine
    "id-blacklist": "off",
    "id-length": "off", // We rely on common sense
    "id-match": "off",
    "indent": ["error", 2, {
      "SwitchCase": 1,
      "VariableDeclarator": {"var": 2, "let": 2, "const": 3},
      "outerIIFEBody": 1,
      "MemberExpression": 1,
      "FunctionDeclaration": {"body": 1, "parameters": 2},
      "FunctionExpression": {"body": 1, "parameters": 2},
      "CallExpression": {"arguments": 1},
      "ArrayExpression": 1,
      "ObjectExpression": 1,
      "flatTernaryExpressions": false // With the "operator-linebreak": ["error", "before"] or ["error"] that option seems to have no effects
      // We would like to have support for another kind of ternary one day, see test/ternary_expressions.js
    }],
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": ["error", {
      "mode": "minimum"
    }],
    "keyword-spacing": "error",
    "line-comment-position": "off",
    "linebreak-style": ["error", "unix"],
    "lines-around-comment": "off",
    "max-depth": "off",
    "max-len": "off", // Sometimes there are edge cases, usually we just try to stay within reasonable limits
    "max-lines": "off",
    "max-nested-callbacks": "off",
    "max-params": "off",
    "max-statements": "off",
    "max-statements-per-line": "off", // Please rely on common sense
    "multiline-ternary": "off",
    "new-cap": ["error", { // We need to see how well it will play with 3rd party code
      "newIsCap": true,
      "capIsNew": true,
      "properties": false
    }],
    "new-parens": "error",
    "newline-per-chained-call": "off", // Please rely on common sense
    "no-array-constructor": "error",
    "no-bitwise": "off",
    "no-continue": "off",
    "no-inline-comments": "off",
    "no-lonely-if": "error",
    "no-mixed-operators": "off",
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "no-multi-assign": "off",
    "no-multiple-empty-lines": "off", // Please just keep it to looks logically
    "no-negated-condition": "off", // For some cases it's more easy to think with negation
    "no-nested-ternary": "off", // We love the ternary expression
    "no-new-object": "error",
    "no-plusplus": "off",
    "no-restricted-syntax": ["error", "WithStatement"], // strict mode have no with
    "no-tabs": "error",
    "no-ternary": "off",
    "no-trailing-spaces": ["error", {
      "skipBlankLines": false
    }],
    "no-underscore-dangle": "off",
    "no-unneeded-ternary": "off", // "foo ? true : false" is readable, we don't see what's wrong with that
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": "off", // Both options are fine
    "object-curly-newline": ["error", {
      "consistent": true
    }],
    "object-curly-spacing": ["error", "never"],
    "object-property-newline": ["error", {
      "allowMultiplePropertiesPerLine": true
    }],
    "one-var": "off", // We are not willing to enforce that
    "one-var-declaration-per-line": "off", // It's a stylistic choice and it highly depends of the variable and value lengths
    "operator-assignment": ["error", "always"], // We think it's more straightforward to use shorthand
    "operator-linebreak": ["error"],
    "padded-blocks": "off", // We think there are more that one way to pad blocks
    "padding-line-between-statements": "off", // So complicated to setup this, please just keep it to looks logical
    "quote-props": ["error", "consistent-as-needed", {
      "keywords": false,
      "unnecessary": true,
      "numbers": false
    }],
    "quotes": ["error", "single", {
      "avoidEscape": true,
      "allowTemplateLiterals": true
    }],
    "require-jsdoc": "off",
    "semi": ["error", "always", {
      "omitLastInOneLineBlock": false
    }],
    "semi-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "semi-style": ["error", "last"],
    "sort-keys": "off",
    "sort-vars": "off",
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": ["error", {
      "int32Hint": true
    }],
    "space-unary-ops": ["error", {
      "words": true,
      "nonwords": false
    }],
    "spaced-comment": "off", // Spaces are nice here but there might be some edge cases, so we are not willing to enforce that
    "switch-colon-spacing": ["error", {
      "after": true,
      "before": false
    }],
    "template-tag-spacing": ["error", "never"],
    "unicode-bom": ["error", "never"],
    "wrap-regex": "off",


    "arrow-body-style": "off", // Right now all the different cases are not covered by the available options
    "arrow-parens": "off", // Right now all the different cases are not covered by the available options
    "arrow-spacing": ["error", {
      "before": true,
      "after": true
    }],
    "constructor-super": "error",
    "generator-star-spacing": "off", // ["error", "after"], // We prefer it to be like in MDN docs, but we don't really like how the space looks in shorthand generator methods in objects initializers.
    "no-class-assign": "error",
    "no-confusing-arrow": ["error", {
      "allowParens": true
    }],
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": ["error", {
      "includeExports": true
    }],
    "no-new-symbol": "error",
    "no-restricted-imports": "off",
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error", // Bright future is now
    "object-shorthand": "off", // It's a matter of taste, and there are many edge cases
    "prefer-arrow-callback": "off", // We are not insisting here
    "prefer-const": ["error", {
      "destructuring": "any"
    }],
    "prefer-destructuring": "off",
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error", // We hope there are no edge cases
    "prefer-spread": "error", // We hope there are no edge cases
    "prefer-template": "off",
    "require-yield": "error",
    "rest-spread-spacing": ["error", "never"],
    "sort-imports": "off",
    "symbol-description": "error", // Are symbols without a description considered good?
    "template-curly-spacing": ["error", "never"],
    "yield-star-spacing": ["error", "after"] // As in MDN docs
  }
};

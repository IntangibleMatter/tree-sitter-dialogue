/**
 * @file Nathan Hoad's Godot Dialogue Manager language
 * @author IntangibleMatter <intangiblematter@intangiblematter.net>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
	name: "dialogue",

	rules: {
		// TODO: add the actual grammar rules
		source_file: ($) => repeat($._definition),

		_definition: ($) => choice($.function_definition),

		function_definition: ($) =>
			seq("func", $.identifier, $.parameter_list, $._type, $.block),

		parameter_list: ($) => seq("(", ")"),

		_type: ($) => choice("bool"),

		block: ($) => seq("{", repeat($._statement), "}"),

		_statement: ($) => seq($.return_statement),

		return_statement: ($) => seq("return", $._expression, ";"),

		_expression: ($) => choice($.identifier, $.number),

		identifier: ($) => /[a-z]+/,

		number: ($) => /\d+/,

		title: ($) =>
			// modified to deal with comments, I think? Need to check
			// /^\s*(?<title>~\s+[^\!\@\#\$\%\^\&\*\(\)\-\=\+\{\}\[\]\;\:\\\"\'\,\.\<\>\?\/\s]+)\s*(#.*)?$/,
			// og regex
			/^\s*(?<title>~\s+[^\!\@\#\$\%\^\&\*\(\)\-\=\+\{\}\[\]\;\:\\\"\'\,\.\<\>\?\/\s]+)/,

		comment: ($) => /#.*$/,

		mutation: ($) => /^\s*(do|do!|set) (?<mutation>.*)/,

		keyword: ($) => choice("true", "false", "null"),
	},
});

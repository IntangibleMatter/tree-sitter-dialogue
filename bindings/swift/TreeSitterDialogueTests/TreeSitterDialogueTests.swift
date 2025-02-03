import XCTest
import SwiftTreeSitter
import TreeSitterDialogue

final class TreeSitterDialogueTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_dialogue())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Dialogue grammar")
    }
}

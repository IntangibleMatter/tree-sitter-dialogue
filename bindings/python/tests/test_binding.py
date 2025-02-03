from unittest import TestCase

import tree_sitter, tree_sitter_dialogue


class TestLanguage(TestCase):
    def test_can_load_grammar(self):
        try:
            tree_sitter.Language(tree_sitter_dialogue.language())
        except Exception:
            self.fail("Error loading Dialogue grammar")

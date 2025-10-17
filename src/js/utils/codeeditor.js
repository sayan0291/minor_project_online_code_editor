// --- CodeMirror Core Imports ---
import { EditorState } from "https://esm.sh/@codemirror/state";
import { EditorView, keymap, lineNumbers, highlightActiveLineGutter } from "https://esm.sh/@codemirror/view";
import { defaultHighlightStyle, syntaxHighlighting, indentOnInput } from "https://esm.sh/@codemirror/language";
import { defaultKeymap, history, historyKeymap } from "https://esm.sh/@codemirror/commands";
import { oneDark } from "https://esm.sh/@codemirror/theme-one-dark";
import { autocompletion } from "https://esm.sh/@codemirror/autocomplete";

// --- Language Imports ---
import { javascript } from "https://esm.sh/@codemirror/lang-javascript";
import { html } from "https://esm.sh/@codemirror/lang-html";
import { css } from "https://esm.sh/@codemirror/lang-css";
import { python } from "https://esm.sh/@codemirror/lang-python";
import { cpp } from "https://esm.sh/@codemirror/lang-cpp";
import { java } from "https://esm.sh/@codemirror/lang-java";
import { php } from "https://esm.sh/@codemirror/lang-php";

// --- Function to get correct language extension ---
function getLanguageExtension(lang) {
  switch (lang.toLowerCase()) {
    case "javascript": return javascript();
    case "html-css-js": return html(); // HTML covers HTML+CSS+JS highlighting
    case "html": return html();
    case "css": return css();
    case "python": return python();
    case "java": return java();
    case "php": return php();
    case "c":
    case "c++": return cpp();
    case "kotlin": return java(); // Kotlin similar to Java
    case "ruby": return javascript(); // placeholder if you don’t have ruby pkg
    default: return javascript();
  }
}

// --- MAIN FUNCTION ---
export function codeeditor(language) {
  const texteditor = document.querySelector("#textcode");
  if (!texteditor) return;

  // clear previous editor
  texteditor.innerHTML = "";

  const startState = EditorState.create({
    doc: `// ${language.toUpperCase()} Example\n`,
    extensions: [
      lineNumbers(),
      highlightActiveLineGutter(),
      history(),
      indentOnInput(),
      keymap.of([...defaultKeymap, ...historyKeymap]),
      syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
      autocompletion(),
      getLanguageExtension(language),
      oneDark,
      EditorView.lineWrapping,
      EditorView.updateListener.of((update) => {
        if (update.docChanged) {
          const code = update.state.doc.toString();
          localStorage.setItem("textcode", code);
        }
      })
    ],
  });

  const view = new EditorView({
    state: startState,
    parent: texteditor,
  });

  // store for later
  window.editor = view;
}

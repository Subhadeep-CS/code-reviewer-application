"use client";

import Editor from "@monaco-editor/react";

export default function CodePreview() {
  return (
    <div className="h-[420px] w-full overflow-hidden border border-white/10 bg-[#0B1020]">
      <Editor
        height="100%"
        defaultLanguage="tsx"
        defaultValue={`export default function Button() {
  return (
    <button className="px-4 py-2 rounded-lg bg-indigo-500 text-white">
      Click me
    </button>
  );
}`}
        theme="vs-dark"
        options={{
          readOnly: true,
          minimap: { enabled: false },
          fontSize: 14,
          scrollBeyondLastLine: false,
          wordWrap: "on",
          padding: { top: 16 },
          scrollbar: {
            vertical: "hidden",
            horizontal: "hidden",
          },
        }}
      />
    </div>
  );
}

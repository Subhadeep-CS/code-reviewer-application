"use client";

import ExplainedBadge from "@/components/ui/Badge/ExplainBadge";
import Editor from "@monaco-editor/react";
import MacOsHeader from "./MacOsHeader";

export default function CodePreview() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-1 rounded-2xl
        bg-gradient-to-r from-indigo-500/20 to-cyan-500/20
        blur opacity-70"
      />
      <div className="h-[420px] w-full border border-white/10 bg-[#0B1020] relative">
        <ExplainedBadge />
        <MacOsHeader />
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
    </div>
  );
}

"use client";

import { Editor } from "@monaco-editor/react";

interface Props {
  code: string;
  setCode: (val: string) => void;
  onExplain: () => void;
  isPending: boolean;
}

const EditorComponent = ({ code, setCode, onExplain, isPending }: Props) => {
  return (
    <>
      <div className="h-[80vh] border border-white/10 bg-[#0B1020] rounded-xl overflow-hidden">
        <Editor
          height="100%"
          language="tsx"
          value={code}
          onChange={(value) => setCode(value || "")}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: "on",
            padding: { top: 16 },
            scrollBeyondLastLine: false,
          }}
        />
      </div>

      <button
        onClick={onExplain}
        className="py-3 bg-indigo-500 rounded-lg font-medium"
      >
        {isPending ? "Analyzing..." : "Explain UI"}
      </button>
    </>
  );
};

export default EditorComponent;

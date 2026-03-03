"use client";

import { useState, useTransition } from "react";
import EditorComponent from "../EditorComponent";
import OutputComponent from "../OutputComponent";
import { detectFramework } from "@/lib/detectFramework";
import { getResultQuery } from "@/server/getResultQuery";

const ExplainPageContainer = () => {
  const [code, setCode] = useState(`export default function Button() {
  return (
    <button className="px-4 py-2 rounded-lg bg-indigo-500 text-white">
      Click me
    </button>
  );
}`);

  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleExplain = () => {
    const type = detectFramework(code);

    if (type !== "react") {
      setError("Currently only React UI is supported.");
      setResult("");
      return;
    }

    setError("");
    setResult("");

    startTransition(async () => {
      const stream = await getResultQuery(code);

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content || "";
        setResult((prev) => prev + content);
      }
    });
  };

  return (
    <div className="flex h-screen bg-[#020617] text-white">
      {/* LEFT */}
      <div className="w-1/2 p-6 flex flex-col gap-4">
        <EditorComponent
          code={code}
          setCode={setCode}
          onExplain={handleExplain}
          isPending={isPending}
        />
        {error && <p className="text-red-400 text-sm">{error}</p>}
      </div>

      {/* RIGHT */}
      <div className="w-1/2 border-l border-white/10">
        <OutputComponent result={result} />
      </div>
    </div>
  );
};

export default ExplainPageContainer;

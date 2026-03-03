"use client";

import ReactMarkdown from "react-markdown";

interface Props {
  result: string;
}

const OutputComponent = ({ result }: Props) => {
  return (
    <div className="h-screen overflow-auto p-6 bg-[#0B1020]">
      {result ? (
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown>{result}</ReactMarkdown>
        </div>
      ) : (
        <p className="text-gray-400">Explanation will appear here...</p>
      )}
    </div>
  );
};

export default OutputComponent;

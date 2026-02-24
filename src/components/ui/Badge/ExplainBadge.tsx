import { Brain } from "lucide-react";

export default function ExplainedBadge() {
  return (
    <div
      className="absolute -top-4 -right-4 rotate-6
      bg-indigo-500 text-white
      px-4 py-2 rounded-lg shadow-lg
      text-xs leading-tight z-10"
    >
      <div className="flex items-center gap-2 font-semibold">
        <Brain size={14} />
        EXPLAINED
      </div>
      <div className="text-[10px] opacity-90">UI Reasoning</div>
    </div>
  );
}

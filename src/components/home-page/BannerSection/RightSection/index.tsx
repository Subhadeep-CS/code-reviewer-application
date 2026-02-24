import ExplainedBadge from "@/components/ui/Badge/ExplainBadge";
import CodePreview from "./CodePreview";

const RightSection = () => {
  return (
    <div className="w-1/2 relative" id="monaco-editor">
      <CodePreview />
    </div>
  );
};

export default RightSection;

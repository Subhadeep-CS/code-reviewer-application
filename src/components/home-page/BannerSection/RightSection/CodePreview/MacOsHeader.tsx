const MacOsHeader = () => {
  return (
    <div
      className="flex items-center gap-2 px-4 py-2
  bg-black/40 border-b border-white/10"
    >
      <span className="h-3 w-3 rounded-full bg-red-500" />
      <span className="h-3 w-3 rounded-full bg-yellow-400" />
      <span className="h-3 w-3 rounded-full bg-green-500" />

      <span className="ml-4 text-sm text-gray-300 font-mono">Button.tsx</span>
    </div>
  );
};

export default MacOsHeader;

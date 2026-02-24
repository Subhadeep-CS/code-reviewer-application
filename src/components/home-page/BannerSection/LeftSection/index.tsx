import Link from "next/link";

const LeftSection = () => {
  return (
    <div className="w-1/2 flex flex-col gap-8">
      <h1 className="text-6xl font-bold text-wrap leading-20">
        Explain React UI like a Senior Engineer
      </h1>
      <h3 className="text-2xl font-semibold text-slate-500">
        Paste your <span className="text-black">React or Tailwind UI</span> and
        instantly understand why it’s built this way — performance, patterns,
        and pitfalls.
      </h3>
      <div className="w-full">
        <Link
          className="inline-block px-6 py-3 rounded-full font-medium text-white
  bg-gradient-to-r from-indigo-500 to-blue-500
  hover:from-indigo-600 hover:to-blue-600
  shadow-md hover:shadow-xl transform hover:rotate-10
  transition-all"
          href={"/explain"}
        >
          Try it now
        </Link>
      </div>
    </div>
  );
};

export default LeftSection;

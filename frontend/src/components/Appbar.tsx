import { Avatar } from "../pages/BlogCard";

export const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 border-slate-200 py-4">
      <div className="flex flex-col justify-center text-xl">Medium</div>
      <div>
        <Avatar name="Anuj" size={10} />
      </div>
    </div>
  );
};

import React from "react";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}
const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div className="border-b border-slate-200  pb-4 p-4">
      <div className="flex">
        <div className="flex">
          <Avatar name={authorName} />
        </div>
        <div className="font-extralight pl-2 pr-2 text-sm flex justify-center flex-col ">
          {authorName}
        </div>{" "}
        |
        <div className="pl-2 font-thin text-slate-500 flex justify-center flex-col  ">
          {publishedDate}
        </div>
      </div>

      <div className="font-bold text-2xl pl-1">{title}</div>

      <div className="pl-1">{content.slice(0, 100) + "..."}</div>
      <div className="text-sm font-thin text-slate-500 pl-1 mt-2">{`${Math.ceil(
        content.length / 100
      )} minutes read`}</div>
    </div>
  );
};

export default BlogCard;

export function Avatar({ name, size =10 }: { name: string; size?: number }) {
  return (  
    <div
      className={`relative inline-flex items-center justify-center w-${size}  h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span className="text-xs text-gray-600 dark:text-gray-300 p-1">
        {name[0] + name[1].toUpperCase()} 
      </span>
    </div>
  );
}

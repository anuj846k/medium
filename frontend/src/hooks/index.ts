import { useEffect, useState } from "react";
import Blogs from "../pages/Blogs";

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, []);

  return {
    loading,
    Blogs,
  };
};

import { useEffect, useState } from "react";
import Blogs from "../pages/Blogs";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/v1/blogs/bulk`).then((res) => {
      setBlogs(res.data);
      setLoading(false);
    });
  }, []);

  return {
    loading,
    Blogs,
  };
};

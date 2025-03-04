import { useBlogs } from "../hooks";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    <div>Loading....</div>;
  }
  return (
    <div className="flex justify-center ">
      <div className="max-w-xl">
        <BlogCard
          authorName="John Doe"
          title="web dev How to get started in this domain"
          content="this is the content of htsdnfmnsdlkfn ashfnilkhwnaisfolkj  "
          publishedDate="2021-09-01"
        />
        <BlogCard
          authorName="John Doe"
          title="web dev How to get started in this domain"
          content="this is the content of htsdnfmnsdlkfn ashfnilkhwnaisfolkj  "
          publishedDate="2021-09-01"
        />
        <BlogCard
          authorName="John Doe"
          title="web dev How to get started in this domain"
          content="this is the content of htsdnfmnsdlkfn ashfnilkhwnaisfolkj  "
          publishedDate="2021-09-01"
        />
      </div>
    </div>
  );
};

export default Blogs;

import React, { useState } from "react";
import AddBlog from "./AddBlog";
import ShowBlog from "./ShowBlog";

const data = [
  {
    id: 1,
    title: "my blog",
    content: "this is blog data",
  },
];

const BlogList = () => {
  const [blogData, setBlogData] = useState(data);

  const deleteBlogById = (id) => {
    const updatedBooks = blogData.filter((blog) => {
      return blog.id !== id;
    });

    setBlogData(updatedBooks);
  };

  const updateBlogById = (id, newContent, newTitle) => {
    const updatedBlog = blogData.map((blog) => {
      if (blog.id === id) {
        return { ...blog, title: newTitle, content: newContent };
      }
      return blog;
    });

    setBlogData(updatedBlog);
  };

  return (
    <>
      <AddBlog blogData={blogData} setBlogData={setBlogData} />
      {blogData.map((data, index) => {
        return (
          <ShowBlog
            key={index}
            id={data.id}
            blog={data}
            deleteBlogById={deleteBlogById}
            updateBlogById={updateBlogById}
          />
        );
      })}
    </>
  );
};

export default BlogList;

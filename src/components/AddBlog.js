import React, { useState } from "react";

const AddBlog = ({ blogData, setBlogData }) => {
  const [blogContent, setBlogContent] = useState({
    id: "",
    title: "",
    content: "",
  });

  const handleAddBlog = () => {
    const updatedBlog = [
      ...blogData,
      {
        id: Math.floor(Math.random() * 100),
        title: blogContent.title,
        content: blogContent.content,
      },
    ];
    setBlogData(updatedBlog);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        value={blogContent.title}
        onChange={(e) =>
          setBlogContent({
            title: e.target.value,
            content: blogContent.content,
          })
        }
      />

      <input
        type="text"
        placeholder="content"
        value={blogContent.content}
        onChange={(e) =>
          setBlogContent({ title: blogContent.title, content: e.target.value })
        }
      />
      <button onClick={handleAddBlog}>Add Blog</button>
    </div>
  );
};

export default AddBlog;

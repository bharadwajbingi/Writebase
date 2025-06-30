import React, { useEffect, useState } from "react";
import { blog_data } from "../../assets/assets";
import BlogTabelItem from "../../components/admin/BlogTabelItem";

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const fetachBlogs = async () => {
    setBlogs(blog_data);
  };
  useEffect(() => {
    fetachBlogs();
  });
  return (
    <div className="min-h-screen flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50">
      <h1 className=" m-2 mt-6 text-gray-600 font-semibold">All blogs</h1>
      <div className="bg-white h-4/5 relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-gray-600 text-left uppercase">
            <tr>
              <th scope="col" className="px-2 py-4 xl:px-6">
                #
              </th>
              <th scope="col" className="px-2 py-4 ">
                Blog Title
              </th>
              <th scope="col" className="px-2 py-4 max-sm:hidden">
                Date
              </th>
              <th scope="col" className="px-2 py-4 max-sm:hidden">
                Status
              </th>
              <th scope="col" className="px-2 py-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => {
              return (
                <BlogTabelItem
                  key={blog._id}
                  blog={blog}
                  fetachBlogs={fetachBlogs}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBlog;

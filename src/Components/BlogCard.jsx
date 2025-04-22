import React from "react";

const BlogCard = ({ id, image, title, date, name, description }) => {
  return (
    <>
      <div>
        <div className="p-4 h-72">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center rounded-xl overflow-hidden"
          />
        </div>
        <div className="p-6 pt-2 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-300">
            <span className="roboto">{date}</span>
            <div className="w-1 h-[2px] bg-gray-600"></div>
            <p className="roboto">
              by{" "}
              <span className="hover:text-[#ff2626] hover:underline-offset-1">
                {name}
              </span>
            </p>
          </div>
          <h1 className="text-2xl lg:text-3xl font-semibold text-white truncate">
            {title}
          </h1>
          <p className="roboto text-[#b1b1b1] text-base line-clamp-3 leading-7">
            {description}
          </p>
          <Link
            to={`/blogs/${id}`}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3.5 rounded-md hover:from-red-700 hover:to-red-600 cursor-pointer transition duration-300 w-fit uppercase font-semibold"
          >
            Read more
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;

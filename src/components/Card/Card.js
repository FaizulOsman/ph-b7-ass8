import React from "react";
import { toast } from "react-hot-toast";
import { BsBookmark } from "react-icons/bs";

const Card = ({
  data,
  bookmarks,
  setBookmarks,
  readingTime,
  setReadingTime,
}) => {
  const bookmarkHandler = (blogTitle) => {
    setBookmarks([...bookmarks, blogTitle]);
    toast.success("Successfully bookmark added!");
  };
  return (
    <div className="mb-10 border-b-2 pb-8">
      <div>
        <img className="w-full" src={data?.image} alt="" />
      </div>
      <div className="mt-8">
        <div className="flex justify-between">
          <div className="flex gap-6 items-center">
            <div>
              <img
                className="w-[32px] sm:w-[42px] md:w-[48px] lg:w-[60px] rounded-full"
                src={data?.authorImg}
                alt=""
              />
            </div>
            <div>
              <h4 className="text-sm sm:text-md md:text-lg lg:text-2xl font-bold">
                {data?.authorName}
              </h4>
              <p className="text-xs sm:text-sm text-[#11111199]">
                {data?.publishedDate}
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center text-sm sm:text-lg lg:text-xl text-[#11111199]">
            {data?.readTime} min read{" "}
            <BsBookmark
              className="cursor-pointer"
              onClick={() => bookmarkHandler(data?.blogTitle)}
            />
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            {data?.blogTitle}
          </h3>
          <p className="text-sm sm:text-lg lg:text-xl mt-4 text-[#11111199] flex gap-4">
            <span>{data?.hashTags[0]}</span>
            <span>{data?.hashTags[1]}</span>
          </p>
          <p
            onClick={() =>
              setReadingTime(readingTime + data?.readTime) +
              toast.success("Reading time added!")
            }
            className="text-sm md:text-lg lg:text-xl mt-4 cursor-pointer text-[#6047EC] underline"
          >
            Mark as read
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

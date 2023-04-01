import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import blogImg1 from "../assets/images/blogImg1.jpg";
import blogImg2 from "../assets/images/blogImg2.jpg";
import blogImg3 from "../assets/images/blogImg3.jpg";
import blogImg4 from "../assets/images/blogImg4.jpg";
import authorImg1 from "../assets/images/avatar-1.jpg";
import authorImg2 from "../assets/images/avatar-2.jpg";
import Card from "../components/Card/Card";

const Home = () => {
  const [bookmarks, setBookmarks] = useState([
    "How to get your first job as a self-taught programmer",
    "How to get your forth job as a self-taught programmer",
  ]);
  const [readingTime, setReadingTime] = useState(177);

  const datas = [
    {
      id: 1,
      blogTitle: "How to get your first job as a self-taught programmer",
      authorName: "Mr. Raju",
      image: blogImg1,
      authorImg: authorImg1,
      readTime: 5,
      publishedDate: "Mar 14 (4 Days ago)",
      hashTags: ["#beginners", "#programming"],
    },
    {
      id: 2,
      blogTitle: "How to get your second job as a self-taught programmer",
      authorName: "Mrs. Setara",
      image: blogImg2,
      authorImg: authorImg2,
      readTime: 10,
      publishedDate: "Mar 14 (4 Days ago)",
      hashTags: ["#beginners", "#programming"],
    },
    {
      id: 3,
      blogTitle: "How to get your third job as a self-taught programmer",
      authorName: "Mina Mostofa",
      image: blogImg3,
      authorImg: authorImg1,
      readTime: 12,
      publishedDate: "Mar 14 (4 Days ago)",
      hashTags: ["#beginners", "#programming"],
    },
    {
      id: 4,
      blogTitle: "How to get your forth job as a self-taught programmer",
      authorName: "Abul Bhusuk",
      image: blogImg4,
      authorImg: authorImg2,
      readTime: 14,
      publishedDate: "Mar 14 (4 Days ago)",
      hashTags: ["#beginners", "#programming"],
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="w-[95%] xl:w-[1280px] mx-auto mt-[20px]">
        <div className="flex flex-col sm:flex-row gap-[24px]">
          <div className="w-[100%] sm:w-[66%]">
            {datas?.map((data) => (
              <Card
                key={data?.id}
                data={data}
                bookmarks={bookmarks}
                setBookmarks={setBookmarks}
                readingTime={readingTime}
                setReadingTime={setReadingTime}
              />
            ))}
          </div>
          <div className="w-[100%] sm:w-[34%] pb-20">
            <div className="bg-[#efedfd] py-5 border border-[#6047EC] rounded-md mb-6">
              <h4 className="text-[#6047EC] text-sm md:text-lg lg:text-2xl font-bold text-center">
                Spent time on read : {readingTime} min
              </h4>
            </div>
            <div className="bg-[#f3f3f3] rounded-md p-4 md:p-5 lg:p-7">
              <div>
                <h4 className="text-sm md:text-lg lg:text-2xl font-bold">
                  Bookmarked Blogs : {bookmarks?.length}
                </h4>
              </div>
              <div>
                {bookmarks?.map((b, i) => (
                  <div key={i} className="p-4 lg:p-5 rounded-md mt-4 bg-white">
                    <p className="text-sm lg:text-lg">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[95%] xl:w-[1280px] mx-auto mt-[20px] pb-20">
        <div className="bg-[#efedfd] py-5 border border-[#6047EC] rounded-md mb-6">
          <h4 className="text-[#6047EC] text-sm md:text-lg lg:text-2xl font-bold text-center">
            Blogs
          </h4>
        </div>
        <div className="bg-[#f3f3f3] rounded-md p-4 md:p-5 lg:p-7">
          <div>
            <div>
              <h4 className="text-sm md:text-lg lg:text-2xl font-bold">
                Question: What is Props vs state?
              </h4>
            </div>
            <div>
              <div className="p-4 lg:p-5 rounded-md mt-4 bg-white">
                <p className="text-sm lg:text-lg">
                  <strong>Answer: </strong>Props are passed to a component from
                  its parent and are read-only within the component. They are
                  used to pass data and behavior from one component to another.
                  State is internal to a component and can be changed within the
                  component. It is used to store data and manage the component's
                  behavior and rendering, and changes to state cause the
                  component to re-render. State should only be used for data
                  that is specific to the component and not needed by other
                  components.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div>
              <h4 className="text-sm md:text-lg lg:text-2xl font-bold">
                Question: How does useState work?
              </h4>
            </div>
            <div>
              <div className="p-4 lg:p-5 rounded-md mt-4 bg-white">
                <p className="text-sm lg:text-lg">
                  <strong>Answer: </strong>The useState hook in React is used to
                  add state to functional components. It takes an initial value
                  as an argument and returns an array with two elements: the
                  current state value and a function to update the state. The
                  state value can be read and updated within the component using
                  the array elements returned by useState. When the state is
                  updated, React re-renders the component with the new state
                  value.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div>
              <h4 className="text-sm md:text-lg lg:text-2xl font-bold">
                Question: Purpose of useEffect other than fetching data.
              </h4>
            </div>
            <div>
              <div className="p-4 lg:p-5 rounded-md mt-4 bg-white">
                <p className="text-sm lg:text-lg">
                  <strong>Answer: </strong>
                  <ol>
                    <li>1. Updating the document title</li>
                    <li>2. Managing subscriptions</li>
                    <li>3. Animating components</li>
                  </ol>
                  Overall, useEffect is a powerful tool for managing side
                  effects in React components, and can be used for a wide range
                  of purposes beyond fetching data.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div>
              <h4 className="text-sm md:text-lg lg:text-2xl font-bold">
                Question: How Does React work?
              </h4>
            </div>
            <div>
              <div className="p-4 lg:p-5 rounded-md mt-4 bg-white">
                <p className="text-sm lg:text-lg">
                  <strong>Answer: </strong>React works by creating a virtual
                  representation of the DOM called the Virtual DOM. When a user
                  interacts with a React component, React updates the Virtual
                  DOM and compares it to the previous version to determine which
                  changes need to be made to the actual DOM to reflect the new
                  state of the component. React uses a one-way data flow to
                  manage state and updates, and provides hooks like useState to
                  manage state in functional components.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

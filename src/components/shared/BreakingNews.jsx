import React from 'react';
import Marquee from 'react-fast-marquee';
import { Button } from "@heroui/react";

const marqueeNews = [
  {
    id: 1,
    title:
      "Global Climate Summit Reaches Landmark Accord on Renewable Energy Goals",
    category: "World",
    link: "/news/1",
  },
  {
    id: 2,
    title:
      "Tech Innovation: New Breakthrough in Quantum Computing Efficiency Announced",
    category: "Technology",
    link: "/news/2",
  },
  {
    id: 3,
    title:
      "Central Banks Adjust Interest Rates Amid Shifting Economic Indicators",
    category: "Finance",
    link: "/news/3",
  },
  {
    id: 4,
    title: "Underdog Team Secures Championship Victory in Final Seconds",
    category: "Sports",
    link: "/news/4",
  },
  {
    id: 5,
    title: "Major Space Exploration Mission Successfully Launches Toward Mars",
    category: "Science",
    link: "/news/5",
  },
  {
    id: 6,
    title: "New Health Study Reveals Key Insights into Daily Sleep Quality",
    category: "Health",
    link: "/news/6",
  },
  {
    id: 7,
    title:
      "International Film Festival Announces Top Award Winners for the Year",
    category: "Entertainment",
    link: "/news/7",
  },
  {
    id: 8,
    title: "Electric Vehicle Sales Reach Record High Across Key Markets",
    category: "Automotive",
    link: "/news/8",
  },
  {
    id: 9,
    title: "Modern Art Exhibition Opens to Record-Breaking Weekend Attendance",
    category: "Culture",
    link: "/news/9",
  },
  {
    id: 10,
    title: "Global Supply Chains See Improvements as Transit Delays Normalize",
    category: "Business",
    link: "/news/10",
  },
];

const BreakingNews = () => {
    return (
      <div className='container mx-auto'>
        <div className="flex justify-between items-center gap-4 bg-gray-200 px-2 py-4">
          <Button className=" btn  text-white  bg-[#D72050] ">Breaking News</Button>
          <Marquee pauseOnHover={true} speed={50}>
           {marqueeNews.map((news) => {
            return <span key={news.id}>{news.title}</span>
           })}
          </Marquee>
        </div>
      </div>
    );
};

export default BreakingNews;
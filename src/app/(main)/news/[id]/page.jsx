import { getNewsDetailsById } from "@/lib/data";
import { Card, Button, Separator } from "@heroui/react";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowBarRight } from "react-icons/bs";
import { FaStarHalfAlt } from "react-icons/fa";

export const generateMetadata=async({params})=>{

  const {id} = await params;
  const news = await getNewsDetailsById(id);
  console.log(news);

  return{
    title: news.title,
    description: news.rating?.badge,
  };

};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const news = await getNewsDetailsById(id);
  console.log(news, "news");
  return (
    <div className="max-w-5xl mx-auto my-6">
      <Card className=" w-full shadow-sm">
        {/* Header */}
        <div className=" flex justify-between items-center  bg-gray-50 px-4 py-3">
          <div className="flex gap-5 ">
            {/* <Avatar
                       src={news?.author?.img}
                       name={news?.author?.name}
                       showFallback
                     /> */}
            <Image
              src={news.thumbnail_url}
              alt={news.author?.name || "Author"}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="">
              <p className="text-sm font-semibold">{news.author?.name}</p>
              <p className="text-xs text-gray-400">
                {news.author?.published_date}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Icon
              icon="solar:bookmark-linear"
              className="text-xl text-gray-500 cursor-pointer"
            />
            <Icon
              icon="solar:share-linear"
              className="text-xl text-gray-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Body */}
        <div className="px-4 py-4">
          <h3 className="font-bold text-lg mb-3">{news.title}</h3>

          <Image
            src={news.image_url}
            alt="news"
            width={600}
            height={208}
            className="w-full rounded-lg mb-4"
          />

          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
            {news.details}
          </p>

          {/* <Link href={`/news/${news._id}`}>
                     <Button
                       variant="light"
                       className="text-orange-500 font-semibold px-0 justify-start mt-2"
                     >
                       Read More
                     </Button>
                   </Link> */}
        </div>

        <Separator />

        {/* Footer */}
        <div className="flex justify-between items-center px-4 py-3">
          <div className="flex items-center gap-1">
            <FaStarHalfAlt className="text-yellow-400" />
            <span className="text-sm text-gray-500 ml-1">
              {news.rating?.number}
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <Icon icon="solar:eye-linear" className="text-lg" />
            <span className="text-sm">{news.total_view}</span>
          </div>
          <div>
            <Link href={`/category/${news.category_id}`}>
              <Button>
                <BsArrowBarRight />
                See More News In This Category
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default NewsDetailsPage;

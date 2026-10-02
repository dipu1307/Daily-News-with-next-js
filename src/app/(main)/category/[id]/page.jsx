import React from 'react';

import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RighSideBar from "@/components/homepage/news/RighSideBar";

import { getCategories, getNewsCategoryId } from '@/lib/data';
import NewsCard from '@/components/homepage/news/NewsCard';


const NewsCategoryPage = async({params}) => {

     
    const {id} = await params;

    console.log('hello paramas', id);


    const categories = await getCategories();
    const news = await getNewsCategoryId(id);

    return (
      <div className="container mx-auto my-16">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3">
            <LeftSideBar categories={categories} activeId={id}></LeftSideBar>
          </div>
          <div className="col-span-6">
            <h2 className='font-bold text-xl'>Daily News</h2>
            <div className="space-y-4 mt-6">
              {news.length>0 ? (news.map((n) => {
                return (
                  <NewsCard news={n} key={n._id}>
                    
                  </NewsCard>
                );
              })) : (<h2 className='font-bold text-2xl text-center my-7'>No News found</h2>)}
            </div>
          </div>
          <div className="col-span-3">
            <RighSideBar />
          </div>
        </div>
      </div>
    );
};

export default NewsCategoryPage;

import ProfileCard from "../components/ProfileCard";
import SpaceCard from "../components/SpaceCard";
import QuestionCard from "../components/QuestionCard";
import Avatar from "../components/Avatar";
import AllMemeber from "../components/AllMemeber";
import Card from "../components/Card";
import React from 'react';
import { Check } from 'react-feather'; // Import the Check icon
import { FaComment, FaSearch, FaThumbsUp,FaHeart } from 'react-icons/fa';
import { Answer, Pass, Thanks, Insightful } from 'react-feather'; // Example import statement, adjust as per your icon library

import Link from 'next/link';








export default function Home() {
  return (
    <div className="flex mt-4 max-w-6xl mx-auto gap-3">
      <div className="w-1/4">
        <ProfileCard/>
        <SpaceCard/>
      </div>
      <div className="w-1/2">
        <QuestionCard/>
        <Card>
          <div >
            <div className="flex px-2 py-4">
            <Avatar/>
            <div className="px-2 py-2">
              <p className="text-sm "><span className="font-bold">Eckart Walther,</span> CMD modern media - Nov 20</p>
              <p>Asked a question<span className="text-blue-500 text-left md:text">#design #content-marketing #branding</span> </p>
              
            </div>
            </div>
            <div className="px-2" >
                <div className="py-2">
                  <h1 className="text-sm font-bold mr-8">Do you have any experience with deploying @Hubspot?</h1>
                </div>
                <p>We are series A B2B startup with custom solution today. We are using <span className="text-blue-500">@mixpanel</span> and working with <span className="text-blue-500">@Division of Labour</span> to rebuild our pages. <span className="text-blue-500">@Jennifer Smith,</span> Would love your thoughts as well.</p>
            </div>
              <div className="rounded-md overflow-hidden w-76 h-32 py-2 px-2">
                <img src="/image/update.png" alt="feedback picture"  /> 
              </div>  
          </div>
          <div className="mt-2 flex justify-start items-center shadow-lg">
            <span className="flex items-center mr-2 px-4 py-2 bg-white rounded hover:bg-blue-600">
              <FaComment className="mr-2" /> {/* Answer icon */}
              <span>Answer</span>
            </span>
            <span className="flex items-center mr-2 px-4 py-2 bg-white rounded hover:bg-blue-600">
              <FaThumbsUp className="mr-2" /> {/* Pass icon */}
              <span>Pass</span>
            </span>
            <span className="flex items-center mr-4 px-4 py-2 bg-white rounded hover:bg-blue-600">
              <FaHeart className="mr-2" /> {/* Thanks icon */}
              <span>Thanks</span>
            </span>
            <span className="flex items-center px-2 py-2 bg-white rounded hover:bg-blue-600">
              <FaHeart className="mr-1" /> {/* Insightful icon */}
              <span>Insightful</span>
            </span>
      </div>  
        </Card>
        <QuestionCard/>
        

      </div>
      <div className="w-1/4">
        <Card>
            <div>
              {/* My Network */}
              <p className="font-bold px-2 py-4 border border-spacing-2 text-sm">My Network</p>
            </div>
            <div className="px-2 mt-2 py-2">
              {/* Share Buttons */}
              <button className="w-full block mb-2 px-2 py-2 bg-white text-blue-500 rounded-full hover:bg-blue-600 border border-lg">Share Article</button>
              <button className="w-full block mb-2 px-2 py-2 bg-white text-blue-500 rounded-full hover:bg-blue-600 border border-lg  ">Share Experience</button>
              <button className="w-full block mb-2 px-2 py-2 bg-white text-blue-500 rounded-full hover:bg-blue-600 border border-lg  ">Ask Question ?</button>
            </div>
          </Card>
          <Card>
              <div>
                {/* Build your Market */}
                <p className="font-bold px-3 py-3 text-sm border border-spacing-2">Build your Market</p>
              </div>
              <div className="mt-4 px-2">
            {/* Invite a person */}
            <button className="w-full block mb-2 px-2 py-2 bg-white text-blue-500 rounded-full hover:bg-blue-600 border border-lg">+ Invite a Person</button>
            {/* Checkboxes */}
            <div className="flex items-center mt-2 px-2">
              <input type="checkbox" id="fill-profile" className="mr-2" />
              <label htmlFor="fill-profile">Fill out your profile</label>
            </div>
            <div className="flex items-center mt-2 px-2">
              <input type="checkbox" id="ask-question" className="mr-2" />
              <label htmlFor="ask-question">Ask first question</label>
            </div>
            <div className="flex items-center mt-2 px-2">
              <input type="checkbox" id="answer-question" className="mr-2" />
              <label htmlFor="answer-question">Answer a question</label>
            </div>
          

          </div>
          
        </Card>
        <Card>
           <div className="flex">
          
            <AllMemeber/>
            
           </div>

        </Card>
      </div>
    </div>
  );
}

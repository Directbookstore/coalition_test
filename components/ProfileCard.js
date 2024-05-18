import Card from "./Card";

export default function ProfileCard(){
    return(
        <Card>
          <div className="mb-1 py-3">
            {/* Profile Picture */}
            <img src="/image/jenifa.png" alt="Jennifer Smith" className=" h-14 w-16 rounded-full aspect-square object-cover mx-auto" />
            {/* Profile Name */}
            <div className="font-bold text-center">Jennifer Smith</div>
            <p className="text-center text-gray-500">Brand at Modern Media</p>
            {/* Edit Profile Button */}
            <a href="/profile" className="block mb-2 px-4 py-2 text-blue-500 hover:text-white hover:bg-blue-500 rounded cursor-pointer text-center">Edit Profile</a>
          </div>
          <div className=" flex flex-col gap-2 justify-between border border-spacing-4 px-2 py-2">
            <p className="font-bold text-xs">Community Contribution</p>
            <div className="flex justify-between">
              <p className="mr-4 text-gray-700">Posts:</p>
              <p>43</p>
            </div>
            <div className="flex justify-between">
              <p className="mr-4 text-gray-700 ">Views:</p>
              <p >8.5k</p>
            </div>
            <div className="flex justify-between">
              <p className="mr-4 text-gray-700">Thanks:</p>
              <p>105</p>
            </div>
            <div className="flex justify-between">
              <p className="mr-4 text-gray-700 ">Insightful:</p>
              <p>342</p>
            </div>
          </div>




        </Card>
    );
}
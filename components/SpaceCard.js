import Card from "./Card";

export default function SpaceCard(){
    return(
        <Card>
            <div className="mt-2 flex items-center justify-between border border-spacing-12 px-2 ">
                <div>
                  <p className="font-bold">My Spaces</p>
                </div>
                <div>
                   <p className="block mb-2 px-4 py-2 text-blue-500 hover:text-white hover:bg-blue-500 rounded cursor-pointer">Edit</p>
                </div>
            </div>
            <div className="px-2">
                <div className="mt-4">
                    <div className="flex gap-2">
                        <p>#Advertising</p>
                        <span className="bg-red-500 text-white px-1 py-0.3 rounded-l-lg rounded-r-lg border border-red-20 text-xs">12</span>
                    </div>
                        <p>#Performance</p>
                        <p>#Special Media</p>
                    <div className="flex gap-2">
                        <p>#Public Relationship</p>
                        <span className="bg-red-500 text-white px-1 py-0.3 rounded-l-lg rounded-r-lg border border-red-20 text-xs">12</span>
                    </div>
                </div>
            </div>
        </Card>
    );
}
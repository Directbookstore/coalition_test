import Card from "./Card";

export default function AllMemeber(){
    return(
        <Card>
           
           <div className="mt-2 flex items-center justify-between border border-spacing-12 px-2 ">
                <div>
                  <p className="font-bold">All memebers</p>
                </div>
                <div>
                   <p className="block mb-2 px-4 py-2 text-blue-500 hover:text-white hover:bg-blue-500 rounded cursor-pointer">+ Invite</p>
                </div>
                
            </div>
            <div className="flex px-2">
                <div className="h-12 w-10  rounded-full overflow-hidden py-2 ">
                    <img src="/image/Eckartt.png" alt="Eckartt Image"  />
                </div>
                <div className="px-2 py-2">
                    <p className="text-sm "><span className="font-bold">Eckart Walther,</span> CMD modern media - Nov 20</p>
                </div>
            </div>
        </Card>
    );
}
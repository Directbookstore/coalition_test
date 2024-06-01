import Card from "./Card";
import Link from "next/link";
import Image from "next/image";
import Layout from "./Layout"; // Import the Layout component

export default function Navbar() {
  return (
    <Layout>
      <Card>
        <div className="h-14 mt-8 w-full flex justify-between items-center rounded-full py-2">
          <div className="flex items-center mr-20">
            <Image src="/icons/TestLogo.png" alt="Logo" width={211} height={48} />
          </div>
          <div className="flex flex-1 justify-center gap-4">
            <Link href="#" className="flex items-center text-gray-600 hover:text-black">
              <Image src="/icons/overview.png" alt="Overview Icon" width={16} height={17} className="icon" />
              <span className="text-sm">Overview</span>
            </Link>
            <Link href="#" className="flex items-center bg-teal-300 text-black rounded-full px-2">
              <Image src="/icons/patients.png" alt="Patients Icon" width={20} height={20} className="icon" />
              <span className="text-sm">Patients</span>
            </Link>
            <Link href="#" className="flex items-center text-gray-600 hover:text-black">
              <Image src="/icons/schedule.png" alt="Schedule Icon" width={20} height={20} className="icon" />
              <span className="text-sm">Schedule</span>
            </Link>
            <Link href="#" className="flex items-center text-gray-600 hover:text-black">
              <Image src="/icons/messages.png" alt="Messages Icon" width={20} height={20} className="icon" />
              <span className="text-sm">Message</span>
            </Link>
            <Link href="#" className="flex items-center text-gray-600 hover:text-black">
              <Image src="/icons/transaction.png" alt="Transactions Icon" width={20} height={20} className="icon" />
              <span className="text-sm">Transactions</span>
            </Link>
          </div>
          <div className="flex items-center space-x-3 mr-2">
            <Image src="/image/Layer 1.png" alt="Doctor Profile Picture" width={32} height={32} className="rounded-full ml-4" />
            <div className="flex flex-col text-sm text-gray-700 px-2">
              <span className="font-medium">Dr. Jose Simmons</span>
              <span className="text-xs text-gray-500">General Practitioner</span>
            </div>
            <Link href="#">
              <Image src="/icons/settings.png" alt="Settings Icon" width={16} height={16} className="ml-2" />
            </Link>
            <Link href="#">
              <Image src="/icons/threedot.png" alt="More Options Icon" width={6} height={8} className="ml-2" />
            </Link>
          </div>
        </div>
      </Card>
    </Layout>
  );
}

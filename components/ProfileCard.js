import Card from "./Card";
import Image from 'next/image';
import Link from 'next/link';


const patients = [
  { name: 'Emily Williams', gender: 'Female', age: 18, image: '/image/patient 1.png' },
  { name: 'Ryan Johnson', gender: 'Male', age: 45, image: '/image/patient 2.png' },
  { name: 'Brandon Mitchell', gender: 'Male', age: 36, image: '/image/patient 3.png' },
  { name: 'Jessica Taylor', gender: 'Female', age: 28, image: '/image/patient 4.png' },
  { name: 'Samantha Johnson', gender: 'Female', age: 50, image: '/image/patient 5.png' },
  { name: 'Ashley Martinez', gender: 'Female', age: 56, image: '/image/patient 6.png' },
  { name: 'Olivia Brown', gender: 'Female', age: 32, image: '/image/patient 7.png' },
  { name: 'Tyler Davis', gender: 'Male', age: 19, image: '/image/patient 8.png' },
  { name: 'Kevin Anderson', gender: 'Male', age: 27, image: '/image/patient 9.png' },
];
export default function ProfileCard(){
    return(
        <Card>
          <div className="bg-white shadow-lg p-2 max-w-full ">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-bold">Patients</h1>
              <Image src="/icons/search.png" alt="Search Icon" width={16} height={16} />
            </div>
            <ul className="space-y-2">
              {patients.map((patient, index) => (
                <li
                  key={index}
                  className={`flex justify-between items-center p-2 rounded-lg ${
                    index === 3 ? 'bg-blue-100' : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Image
                      src={patient.image}
                      alt={patient.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium">{patient.name}</p>
                      <p className="text-xs text-gray-500">
                        {patient.gender}, {patient.age}
                      </p>
                    </div>
                  </div>
                  <Link href="#">
                    <Image src="/icons/threedots.png" alt="More Options Icon" width={16} height={16} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Card>
    );
}
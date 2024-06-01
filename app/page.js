import ProfileCard from "../components/ProfileCard";
import PatientProfile from "../components/PatientProfile";
import DiagnosisHistory from "../components/DiagnosisHistory";
import Card from "../components/Card";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout"; // Import the Layout component

export default function Home() {
  return (
    <Layout>
      
      <div className="flex mt-4 gap-3">
        <div className="w-1/4">
          <Card>
            <ProfileCard />
          </Card>
        </div>
        <div className="w-1/2">
          <Card>
            <DiagnosisHistory />
          </Card>
        </div>
        <div className="w-1/4">
          <Card>
            <PatientProfile />
          </Card>
        </div>
      </div>
    </Layout>
  );
}

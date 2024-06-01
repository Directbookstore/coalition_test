"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import React from 'react';
import Card from './Card';
import DiagnosisHistory from './DiagnosisHistory';
import { FaPhone, FaVenus, FaCalendarAlt, FaShieldAlt } from 'react-icons/fa';

// Assuming fetchPatientData is defined somewhere in your codebase and imported here
const fetchPatientData = async () => {
  // Dummy data for example purposes
  return [
    {
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
      profile_picture: "https://fedskillstest.ct.digital/4.png",
      date_of_birth: "1996-08-23",
      phone_number: "(415) 555-1234",
      emergency_contact: "(415) 555-5678",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "March",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 160,
              levels: "Higher than Average"
            },
            diastolic: {
              value: 78,
              levels: "Lower than Average"
            }
          },
          heart_rate: {
            value: 78,
            levels: "Lower than Average"
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal"
          },
          temperature: {
            value: 98.6,
            levels: "Normal"
          }
        },
        // Additional months of diagnostic history
      ],
    },
    // Other patients...
  ];
};

const Profile = () => {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const getPatientData = async () => {
      try {
        const data = await fetchPatientData();
        const jessicaData = data.find(patient => patient.name === "Jessica Taylor");
        setPatient(jessicaData);
      } catch (error) {
        console.error("Error fetching patient data", error);
      }
    };
    getPatientData();
  }, []);

  if (!patient) return <p>Loading...</p>;

  return (
    <Card>
      <div className="flex flex-col items-center p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
        <div className="w-24 h-24 relative rounded-full overflow-hidden">
          <Image
            src={patient.profile_picture}
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="text-2xl font-bold">{patient.name}</h1>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <FaCalendarAlt /> 
            <span>Date Of Birth: {new Date(patient.date_of_birth).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaVenus />
            <span>Gender: {patient.gender}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone />
            <span>Contact Info: {patient.phone_number}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone />
            <span>Emergency Contacts: {patient.emergency_contact}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaShieldAlt />
            <span>Insurance Provider: {patient.insurance_type}</span>
          </div>
        </div>
        <button className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-full">Show All Information</button>
      </div>
    </Card>
  );
};

export default Profile;



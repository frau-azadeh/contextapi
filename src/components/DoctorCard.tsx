import React from "react";
import { Doctor } from "@/types/doctor";
import Image from "next/image";

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
     <Image
            src={doctor.image}
            alt={doctor.name}
            width={300}
            height={200} 
            className="w-full h-96 object-cover"
        />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{doctor.name}</h2>
        <p className="text-gray-700">تخصص: {doctor.specialty}</p>
        <p className="text-gray-700">زمان کاری: {doctor.workTime}</p>
        <p className="text-gray-700">مدرک: {doctor.degree}</p>
      </div>
    </div>
  );
};

export default DoctorCard;

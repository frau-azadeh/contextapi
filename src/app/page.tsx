'use client'
import React from "react";
import DoctorCard from "@/components/DoctorCard";
import { useDoctors } from "@/hooks/useDoctors";

const DoctorsPage = () => {
  const { doctors, loading, error } = useDoctors(); // استفاده از هوک سفارشی

  if (loading) {
    return <p className="text-center mt-10">در حال بارگذاری...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-center mb-6">لیست پزشکان</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorsPage;

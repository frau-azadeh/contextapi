'use client'
import { useEffect, useState } from "react";
import { Doctor } from "@/types/doctor";
import { getDoctors } from "@/utils/api";

export const useDoctors = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]); // لیست پزشکان
  const [loading, setLoading] = useState<boolean>(true); // وضعیت لودینگ
  const [error, setError] = useState<string | null>(null); // وضعیت خطا

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctors(); // دریافت داده‌ها از API
        setDoctors(data);
      } catch (err) {
        setError("خطایی در دریافت داده‌ها رخ داده است.");
        console.error("Error fetching doctors:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  return { doctors, loading, error };
};

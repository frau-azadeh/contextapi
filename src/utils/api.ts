import axiosInstance from "./axiosInstance";

// دریافت لیست پزشکان
export const getDoctors = async () => {
  try {
    const response = await axiosInstance.get("/doctors"); // Endpoint برای لیست پزشکان
    return response.data;
  } catch (error) {
    console.error("Error fetching doctors:", error);
    throw error;
  }
};

// دریافت جزئیات یک پزشک
export const getDoctorById = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/doctors/${id}`); // Endpoint برای جزئیات پزشک
    return response.data;
  } catch (error) {
    console.error("Error fetching doctor by ID:", error);
    throw error;
  }
};

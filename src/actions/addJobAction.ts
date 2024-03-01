import { AxiosError } from "axios";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils/customFetch";

export const addJobAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/jobs", data);
    toast.success("Job added successfully");
    return redirect("all-jobs");
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  }
};

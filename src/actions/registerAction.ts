import { AxiosError } from "axios";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils/customFetch";

export const registerAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/register", data);
    toast.success("User created successfully");
    return redirect("/login");
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  }
};

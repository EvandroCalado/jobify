import { AxiosError } from "axios";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils/customFetch";

export const loginAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const errors = { msg: "" };

  if (errors.msg) {
    return errors;
  }

  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login successful!");
    return redirect("/dashboard");
  } catch (error) {
    if (error instanceof AxiosError) {
      // toast.error(error?.response?.data?.msg);
      errors.msg = error?.response?.data?.msg;
      return errors;
    }
  }
};

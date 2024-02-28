import { AxiosError } from "axios";
import { redirect } from "react-router-dom";
import { customFetch } from "../utils/customFetch";

export const dashboardLoader = async () => {
  try {
    const { data } = await customFetch.get("users/current-user");
    return data.user;
  } catch (error) {
    if (error instanceof AxiosError) {
      return redirect("/");
    }
  }
};

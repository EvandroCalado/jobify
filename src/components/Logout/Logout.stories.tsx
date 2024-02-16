import { Meta } from "@storybook/react";
import { Logout } from ".";

export default {
  title: "Components/Logout",
  component: Logout,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default = () => <Logout />;

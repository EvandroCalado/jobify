import { Meta } from "@storybook/react";
import { ThemeToggle } from ".";

export default {
  title: "Components/ThemeToggle",
  component: ThemeToggle,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default = () => <ThemeToggle />;

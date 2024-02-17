import { Meta } from "@storybook/react";
import { Sidebar } from ".";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default = () => <Sidebar />;

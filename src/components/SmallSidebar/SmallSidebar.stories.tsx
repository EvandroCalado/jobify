import { Meta } from "@storybook/react";
import { SmallSidebar } from ".";

export default {
  title: "Components/SmallSidebar",
  component: SmallSidebar,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default = () => <SmallSidebar />;

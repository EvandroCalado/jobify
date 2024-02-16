import { Meta, StoryFn } from "@storybook/react";
import { NavLinks, NavLinksProps } from ".";

export default {
  title: "Components/NavLinks",
  component: NavLinks,
  args: {
    isBigSidebar: true,
  },
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default: StoryFn<NavLinksProps> = (args) => <NavLinks {...args} />;

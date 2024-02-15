import { Meta, StoryFn } from "@storybook/react";
import { Input, InputProps } from ".";

export default {
  title: "Components/Input",
  component: Input,
  args: {
    label: "Name",
    type: "text",
    defaultValue: "Guest",
  },
} as Meta;

export const Default: StoryFn<InputProps> = (args) => (
  <div style={{ maxWidth: "400px" }}>
    <Input {...args} />
  </div>
);

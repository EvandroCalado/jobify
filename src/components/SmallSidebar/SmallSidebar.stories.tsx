import { Meta } from "@storybook/react";
import { SmallSidebar } from ".";
import { DashboardContext } from "../../contexts/DashboardProvider";
import { useDashboardContext } from "../../hooks/useDashboardContext";

export default {
  title: "Components/SmallSidebar",
  component: SmallSidebar,
  decorators: [
    (Story) => {
      const data = useDashboardContext();

      return (
        <DashboardContext.Provider value={{ ...data, showSidebar: true }}>
          <Story />
        </DashboardContext.Provider>
      );
    },
  ],
} as Meta;

export const Default = () => <SmallSidebar />;

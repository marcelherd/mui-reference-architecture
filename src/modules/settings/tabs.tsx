import type { Tab } from "@/modules/common";
import { ProfileTab } from "./components/ProfileTab";

export const tabs: Tab[] = [
  {
    label: "Profile",
    title: "Profile",
    subtitle: "This is how others will see you on the site.",
    children: <ProfileTab />,
  },
  {
    label: "Account",
    title: "Account",
    subtitle:
      "Update your account settings. Set your preferred language and timezone.",
  },
  {
    label: "Appearance",
    title: "Appearance",
    subtitle:
      "Customize the appearance of the app. Automatically switch between day and night themes.",
  },
  {
    label: "Notifications",
    title: "Notifications",
    subtitle: "Configure how you receive notifications.",
  },
  {
    label: "Display",
    title: "Display",
    subtitle: "Turn items on or off to control what's displayed in the app.",
  },
];

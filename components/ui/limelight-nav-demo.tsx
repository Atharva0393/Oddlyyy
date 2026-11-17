"use client";

import React from "react";
import { LimelightNav } from "@/components/ui/limelight-nav";
import { Home, Bookmark, PlusCircle, User, Settings } from "lucide-react";

const customNavItems = [
  { id: "home", icon: <Home />, label: "Home", onClick: () => console.log("Home Clicked!") },
  { id: "bookmark", icon: <Bookmark />, label: "Bookmarks", onClick: () => console.log("Bookmark Clicked!") },
  { id: "add", icon: <PlusCircle />, label: "Add New", onClick: () => console.log("Add Clicked!") },
  { id: "profile", icon: <User />, label: "Profile", onClick: () => console.log("Profile Clicked!") },
  { id: "settings", icon: <Settings />, label: "Settings", onClick: () => console.log("Settings Clicked!") },
];

const Customized = () => {
  return (
    <LimelightNav
      className="bg-secondary dark:bg-card/50 dark:border-accent/50 rounded-xl"
      items={customNavItems}
    />
  );
};

export { Customized };

const Default = () => {
  return <LimelightNav />;
};

export { Default };

export default function LimelightNavDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 bg-background min-h-[300px]">
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Default</h3>
        <Default />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Customized</h3>
        <Customized />
      </div>
    </div>
  );
}


"use client";
import Title from "@/components/admin/Title";
import { Button } from "@/components/ui/button";
import { api } from "@/utils/api";
import toaster from "@/utils/toaster";

const Settings = () => {
  const syncStatsWithDatabase = () => {
    toaster("Syncing Stats...", "loading");
    api({
      method: "GET",
      url: "/api/settings",
    })
      .then(() => toaster("Stats Synced!", "success"))
      .catch(() => toaster("Failed to sync stats.", "error"));
  };

  return (
    <div className="flex h-full flex-col py-4 font-poppins">
      <Title title="Settings" />
      <Button onClick={syncStatsWithDatabase}>Sync Stats</Button>
    </div>
  );
};

export default Settings;

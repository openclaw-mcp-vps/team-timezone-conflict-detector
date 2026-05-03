import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Team Timezone Conflict Detector",
  description: "Prevent scheduling meetings during team members' sleep hours. Automatically block calendar slots outside 8am-8pm for every team member."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="da22aaf5-cfac-46a4-ab0a-577210a3c2cb"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}

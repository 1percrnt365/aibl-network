import type { Metadata } from "next";
import { IBM_Plex_Sans_KR, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const plexKr = IBM_Plex_Sans_KR({
  variable: "--font-plex-kr",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  preload: false,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIBL Network",
  description:
    "AI 에이전트의 추론·학습·판단을 서명된 블록으로 기록하고, 그 기여를 결정적 장부로 계산해 EVM 체인에서 정산하는 프로토콜.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${plexKr.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-ink text-fg`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

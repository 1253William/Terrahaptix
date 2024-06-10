import localFont from "next/font/local";

export const korium = localFont({ src: "../../../public/fonts/korium.ttf" });

export const cabinetFont = localFont({
  src: [
    {
      path: "../../../public/fonts/CabinetGrotesk-Regular.otf",
      weight: "400",
    },
    {
      path: "../../../public/fonts/CabinetGrotesk-Medium.otf",
      weight: "500",
    },
    {
      path: "../../../public/fonts/CabinetGrotesk-Bold.otf",
      weight: "600",
    },
  ],
});

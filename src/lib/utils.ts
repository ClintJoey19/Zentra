import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isBase64 = (file: string) => {
  const base64Regex = /^data:image\/(png|jpe?g|gif|webp);base64,/;
  return base64Regex.test(file);
};

export const convertImageToBase64 = (file: File) => {
  let image = "";

  const fileReader = new FileReader();

  fileReader.onload = async (event) => {
    const imageUrl = event?.target?.result?.toString() || "";

    image = imageUrl;
  };
};

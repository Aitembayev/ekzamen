import { createUploadthing } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  avatarUploader: f({ image: { maxFileSize: "4MB" } }).onUploadComplete(
    async ({ file }) => {
      return { uploadedUrl: file.ufsUrl || `https://utfs.io/f/${file.key}` };
    }
  ),
};       
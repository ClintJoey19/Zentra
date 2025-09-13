import { UploadDropzone } from "@/lib/utils/uploadthing";
import React, { ComponentProps } from "react";

type SystemUploadDropzoneProps = ComponentProps<typeof UploadDropzone>;

const SystemUploadDropzone = ({
  endpoint,
  className,
  ...props
}: SystemUploadDropzoneProps) => {
  return <UploadDropzone endpoint={endpoint} className="my-ut" {...props} />;
};

export default SystemUploadDropzone;

"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createOrganization } from "@/lib/services/organization.service";
import { convertImageToBase64 } from "@/lib/utils";
import { useUploadThing } from "@/lib/utils/uploadthing";
import { zodResolver } from "@hookform/resolvers/zod";
import { Image as NoImage, LoaderCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  name: z.string().min(1, { message: "Organization's name field is required" }),
  slug: z.string().min(4, {
    message: "Organization's domain should be atleast 4 characters",
  }),
  logo: z.instanceof(File).optional(),
  // logo: z.string().min(1, { message: "Organization's logo field is required" }),
});

const CreateOrganizationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      slug: "",
      logo: undefined,
    },
  });
  const { isSubmitting } = form.formState;
  const { startUpload, isUploading } = useUploadThing("imageUploader");
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      let orgLogo = "";

      if (values.logo) {
        const imageRes = await startUpload([values.logo]);

        if (!imageRes) throw new Error("Error uploading the logo");

        orgLogo = imageRes[0].url;
      }

      const response = await createOrganization({
        ...values,
        logo: orgLogo,
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Create</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>New Organization</AlertDialogTitle>
          <AlertDialogDescription>
            Create your organization to collaborate with your team. You can
            customize settings later.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Your organization's name"
                        disabled={isSubmitting || isUploading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="slug"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Domain</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Your organization's domain"
                        disabled={isSubmitting || isUploading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="logo"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Logo</FormLabel>
                    {/* <div className="w-full flex justify-center items-center">
                      {!field.value ? (
                        <NoImage className="text-muted-foreground size-12" />
                      ) : (
                        <Image
                          src={field.value}
                          alt="organization-logo"
                          className="object-contain rounded-md"
                          width={60}
                          height={60}
                        />
                      )}
                    </div> */}
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];

                          field.onChange(file);
                        }}
                        disabled={isSubmitting || isUploading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <Button type="submit">
                  {isSubmitting || isUploading ? (
                    <LoaderCircle className="animate-spin" />
                  ) : (
                    "Create"
                  )}
                </Button>
              </AlertDialogFooter>
            </form>
          </Form>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CreateOrganizationForm;

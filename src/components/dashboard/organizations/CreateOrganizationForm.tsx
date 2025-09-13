"use client";
import SystemUploadDropzone from "@/components/system/SystemUploadDropzone";
import {
  AlertDialog,
  AlertDialogAction,
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
import { UploadButton, UploadDropzone } from "@/lib/utils/uploadthing";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  name: z.string().min(1, { message: "Organization's name field is required" }),
  slug: z.string().min(4, {
    message: "Organization's domain should be atleast 4 characters",
  }),
  logo: z.instanceof(File).optional(),
  metadata: z.object({
    background: z.instanceof(File).optional(),
  }),
});

const CreateOrganizationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      slug: "",
      logo: undefined,
      metadata: {
        background: undefined,
      },
    },
  });
  const { isSubmitting } = form.formState;
  const router = useRouter();

  // const handleImageChange = async (e, fieldChange) => {
  //   try {
  //     e.preventDefault()

  //     const fileReader = new FileReader()

  //     const files = e.target.files;

  //     if (files || files.length === 0) return

  //     const file = files[0]

  //     fileReader.onload = async (event) => {
  //       const imageUrl = event.target?.result?.toString() || ""

  //       fieldChange(imageUrl)
  //     }

  //     fileReader.readAsDataURL(file)
  //   } catch (error) {
  //     console.error(error);

  //   }
  // }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                    <FormControl>
                      <SystemUploadDropzone
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                          console.log(res);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="metadata.background"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Background image</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => field.onChange(e.target.files?.[0])}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <Button type="submit">
                  {isSubmitting ? (
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

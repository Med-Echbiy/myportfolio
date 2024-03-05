import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Separator } from "../ui/separator";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { useToast } from "../ui/use-toast";
const fromSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5),
});
function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof fromSchema>>({
    resolver: zodResolver(fromSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  function Submit() {
    console.log("submit success", form.getValues());
    emailjs
      .send(
        "service_r2lm3zi",
        "template_hlrw9d9",
        {
          name: form.getValues().name,
          reply: form.getValues().email,
          message: form.getValues().message,
        },
        "hkYqzWBQuYVKpqlgp1"
      )
      .then(
        (result: EmailJSResponseStatus) => {
          toast({
            description: "Your Email Has Been Sent",
            variant: "default",
            className: "bg-green-500 font-bold",
          });
          console.log(result.text);
        },
        (error: { text: string }) => {
          toast({
            description: "Something Went wrong! please check your fields",
            variant: "destructive",
          });
          console.log(error.text);
        }
      );
  }
  return (
    <section className='w-full mt-24'>
      <div className=''>
        <Separator className='w-1/3 mx-auto mb-6 drop-shadow-xl' />
        <h5 className='text-center mb-12 text-5xl righteous text-gray-600'>
          Contact Me
        </h5>
        <div className='max-w-lg mx-auto mb-12 p-2 '>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(Submit)}
              className='flex flex-col gap-4'
            >
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Your Name...' {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='Your Email...' {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder='Message...' {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type='submit'>Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

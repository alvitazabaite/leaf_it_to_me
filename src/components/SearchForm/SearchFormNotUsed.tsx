import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { SearchCombobox } from "@/components/SearchCombobox/SearchCombobox.tsx";
import { SearchProps } from "@/components/SearchCombobox/SearchCombobox.types.ts";

const formSchema = z.object({
  plant: z.string().min(1, {
    message: "Plant is not selected",
  }),
});

export function SearchFormNotUsed({ plants }: SearchProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center justify-center gap-4"
        >
          <FormField
            control={form.control}
            name="plant"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <SearchCombobox
                    plants={plants}
                    plantName={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage className="absolute mt-10" />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

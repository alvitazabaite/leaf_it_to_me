import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button.tsx";
import { SearchCombobox } from "@/components/SearchCombobox/SearchCombobox.tsx";
import { SearchProps } from "@/components/SearchCombobox/SearchCombobox.types.ts";
import { useNavigate } from "react-router-dom";
import { clsx } from "clsx";

export function SearchForm({ plants }: SearchProps) {
  const navigate = useNavigate();
  const { control, handleSubmit, watch } = useForm<{ plantName: string }>({
    defaultValues: { plantName: "" },
  });

  const onSubmit = async (data: { plantName: string }) => {
    const params = new URLSearchParams();
    params.set("plant", data.plantName);
    navigate("/results?" + params.toString());
  };

  const watchedValue = watch("plantName");
  const valueEmpty = watchedValue == "";

  return (
    <form className="flex gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <Controller
          control={control}
          name={"plantName"}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <SearchCombobox
              plants={plants}
              plantName={value}
              onChange={onChange}
            />
          )}
        />
      </div>
      <Button
        className={clsx(!valueEmpty && "cursor-pointer")}
        disabled={valueEmpty}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}

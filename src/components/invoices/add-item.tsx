import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Trash } from "lucide-react";

function AddItem({ form, index, remove, fields }: AddItemProps) {
  return (
    <section className="grid grid-cols-[1fr_0.5fr_1fr_min-content] items-center gap-4">
      <FormField
        name={`items.${index}.name`}
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input type="text" {...field} className="text-xs sm:text-sm" />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name={`items.${index}.quantity`}
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                className="text-xs sm:text-sm"
                value={field.value}
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name={`items.${index}.price`}
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                className="text-xs sm:text-sm"
                type="number"
                step="any"
                min={1}
                value={field.value ?? ""}
                onChange={(e) => {
                  const value = e.target.value;

                  if (value === "") {
                    field.onChange(undefined);
                    return;
                  }

                  const parsed = parseFloat(value);
                  if (!isNaN(parsed)) {
                    field.onChange(parsed);
                  }
                }}
              />
            </FormControl>
          </FormItem>
        )}
      />

      <button
        className="ml-auto flex w-6 items-center gap-1"
        type="button"
        aria-label="Delete item"
        onClick={() => remove(index)}
        disabled={fields.length === 1}
      >
        <Trash className="text-destructive size-4" />
      </button>
    </section>
  );
}

export default AddItem;

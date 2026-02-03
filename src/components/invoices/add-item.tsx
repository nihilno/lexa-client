import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Trash } from "lucide-react";

function AddItem({ form, index, remove }: AddItemProps) {
  return (
    <section className="grid grid-cols-[1fr_0.5fr_1fr_min-content] items-center gap-4">
      <FormField
        name={`items.${index}.name`}
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input type="text" {...field} />
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
                type="number"
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
                type="number"
                value={field.value}
                onChange={(e) => field.onChange(Number(e.target.value))}
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
      >
        <Trash className="text-destructive size-4" />
      </button>
    </section>
  );
}

export default AddItem;

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
                min={1}
                max={99}
                value={field.value}
                onChange={(e) => {
                  const val = e.target.value.slice(0, 2);
                  field.onChange(Number(val));
                }}
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
                min={1}
                type="number"
                value={field.value}
                onChange={(e) => {
                  const val = e.target.value.slice(0, 6);
                  field.onChange(Number(val));
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

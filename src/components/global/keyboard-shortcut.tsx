import { Command } from "lucide-react";

function KeyboardShortcut({ character }: { character: string }) {
  return (
    <div className="bg-foreground/8 text-muted-foreground grid grid-cols-2 place-items-center rounded-xl border p-0.5">
      <Command className="size-3.5" />
      <span className="text-xs font-semibold">{character.toUpperCase()}</span>
    </div>
  );
}

export default KeyboardShortcut;

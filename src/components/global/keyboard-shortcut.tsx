import { Command } from "lucide-react";

function KeyboardShortcut({ character }: { character: string }) {
  return (
    <div className="bg-foreground/8 text-muted-foreground grid h-6 grid-cols-2 place-items-center rounded-xl border px-1">
      <Command className="size-3.5" />
      <span className="text-xs font-semibold">{character.toUpperCase()}</span>
    </div>
  );
}

export default KeyboardShortcut;

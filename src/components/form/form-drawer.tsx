import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Edit2 } from "lucide-react";

export function FormDrawer({ title, icon }: FormDrawerProps) {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button
          type="button"
          size="lg"
          className="dark:bg-foreground/6 dark:text-foreground dark:hover:bg-foreground/10 focus:ring-foreground/20 bg-foreground/80 rounded-full backdrop-blur-2xl focus:ring-2 dark:outline"
          aria-label={title}
        >
          {icon ?? <Edit2 className="size-5" />} {title ?? "Open Form"}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Move Goal</DrawerTitle>
          <DrawerDescription>Set your daily activity goal.</DrawerDescription>
        </DrawerHeader>
        <div className="no-scrollbar overflow-y-auto px-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <p
              key={index}
              className="style-lyra:mb-2 style-lyra:leading-relaxed mb-4 leading-normal"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          ))}
        </div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

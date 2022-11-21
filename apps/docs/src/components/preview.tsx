import { clsx } from "clsx";
import { ComponentProps, splitProps } from "solid-js";

interface PreviewProps extends ComponentProps<"div"> {
  isCentered?: boolean;
  isRounded?: boolean;
}

export function Preview(props: PreviewProps) {
  const [local, others] = splitProps(props, ["class", "isCentered", "isRounded"]);

  return (
    <div
      class={clsx(
        local.class,
        "kb-preview not-prose mt-4 overflow-y-auto p-4 border border-solid border-zinc-200 dark:bg-[#121212] dark:border-zinc-700",
        local.isCentered && "flex items-center justify-center",
        local.isRounded ? "rounded-lg" : "rounded-t-lg"
      )}
      {...others}
    />
  );
}

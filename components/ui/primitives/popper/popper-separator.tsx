import React from "react";

export const PopperSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>((props, ref) => {
  return (
    <div ref={ref} role='separator' aria-orientation='horizontal' {...props} />
  );
});
PopperSeparator.displayName = "PopperSeparator";

import React from "react";

export const PopperGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>((props, ref) => {
  return (
    <div ref={ref} role='group' aria-orientation='horizontal' {...props} />
  );
});
PopperGroup.displayName = "PopperGroup";

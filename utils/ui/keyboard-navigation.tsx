export function keyboardArrowNavigation({
  event,
  highlightedIndex,
  itemSelector,
}: {
  event: React.KeyboardEvent;
  highlightedIndex?: number;
  itemSelector: string;
}) {
  if (!event.currentTarget) return;
  if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    event.preventDefault();
    const direction: 'next' | 'previous' =
      event.code === 'ArrowUp' ? 'previous' : 'next';

    const menuItems = Array.from(
      (event.currentTarget as HTMLElement).querySelectorAll(itemSelector),
    );

    let nextIndex;
    switch (direction) {
      case 'next':
        nextIndex =
          highlightedIndex === undefined
            ? 0
            : highlightedIndex === menuItems.length - 1
              ? menuItems.length - 1
              : highlightedIndex + 1;
        break;
      default:
        nextIndex =
          highlightedIndex === undefined
            ? menuItems.length - 1
            : highlightedIndex === 0
              ? 0
              : highlightedIndex - 1;
        break;
    }
    return { nextIndex, menuItems };
  }
}

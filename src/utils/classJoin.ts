const prefixesList = [
  "hover:",
  "p-",
  "bg-",
  "rounded-",
  "text-",
  "h-",
  "border-",
  "cursor-",
  "font-",
  "grid-",
];

/** used for concatenating multiple classNames */
export const classJoin = (
  ...classes: (string | false | undefined | null)[]
): string => {
  const classMap: { [key: string]: string } = {};

  const splitClasses = classes.map((c) => c && c?.split(" ")).flat();

  splitClasses.filter(Boolean).forEach((className) => {
    if (!className) return;

    const prefix = prefixesList.find(
      (p) => className.startsWith(p) || className.startsWith(`rhmdp-${p}`)
      // we also check for rhmdp- prefix
      // because we use custom tailwind prefix (rhmdp-)
      // so if user uses the default tailwind prefix (e.g. bg-)
      // we should also remove the rhmdp-bg- to avoid duplication
    );

    if (prefix) {
      classMap[prefix] = className;
    } else {
      classMap[className] = className;
    }
  });

  return Object.values(classMap).join(" ").trim();
};

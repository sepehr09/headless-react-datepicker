const prefixes = [
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
  classes: (string | false | undefined | null)[]
): string => {
  const classMap: { [key: string]: string } = {};

  classes.filter(Boolean).forEach((className) => {
    if (!className) return;
    const prefix = prefixes.find((p) => className.startsWith(p));
    if (prefix) {
      classMap[prefix] = className;
    } else {
      classMap[className] = className;
    }
  });

  return Object.values(classMap).join(" ").trim();
};

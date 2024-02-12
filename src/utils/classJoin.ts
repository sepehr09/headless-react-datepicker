/** used for concatenating multiple classNames */
export const classJoin = (classes: (string | false | undefined)[]) =>
  classes
    .filter((c) => c)
    .join(" ")
    .trim();

/** used for concatenating multiple classNames */
export const classJoin = (classes: (string | undefined)[]) =>
  classes
    .filter((c) => c)
    .join(" ")
    .trim();

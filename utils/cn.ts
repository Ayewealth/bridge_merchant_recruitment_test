import clsx from 'clsx';

// Create a cn function that will take class names and conditionally join them
export const cn = (...classes: (string | false | undefined | null)[]) => {
  return clsx(...classes);
};

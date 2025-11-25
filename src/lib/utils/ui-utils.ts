import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

const cn: (...inputs: ClassValue[]) => string = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

export {cn};

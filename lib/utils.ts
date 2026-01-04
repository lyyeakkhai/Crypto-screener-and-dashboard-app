import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class name inputs into a single, space-separated string and resolves Tailwind CSS class conflicts.
 *
 * @param inputs - One or more class values (strings, arrays, or objects) that represent CSS classes
 * @returns A single string of merged class names with Tailwind-specific conflicts resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a numeric value as a currency string using the en-US locale.
 *
 * @param value - The numeric amount to format
 * @param currency - The ISO 4217 currency code to use (defaults to `"USD"`)
 * @returns The formatted currency string (for example, `$1,234.56`)
 */
export function formatCurrency(value: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(value);
}
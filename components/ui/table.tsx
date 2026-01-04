"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Renders a responsive table inside a full-width, horizontally scrollable container.
 *
 * @param className - Additional CSS classes applied to the underlying `table` element
 * @param props - All other props are forwarded to the underlying `table` element
 * @returns The wrapping container element that contains the styled `table`
 */
function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

/**
 * Renders a table header element configured for the component library's table styles.
 *
 * @returns A `<thead>` element with `data-slot="table-header"`, default header styling, merged `className`, and all other props forwarded to the element.
 */
function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

/**
 * Renders a table body element with standardized styling and a data-slot for composition.
 *
 * @param className - Additional CSS classes to merge with the component's default styles.
 * @param props - Other standard `tbody` props are forwarded to the rendered element.
 * @returns A `tbody` element with `data-slot="table-body"`, merged `className`, and all forwarded props.
 */
function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

/**
 * Renders a styled table footer element for composing table footers.
 *
 * @param className - Additional CSS classes to merge with the component's default styles
 * @param props - Remaining props are forwarded to the underlying `<tfoot>` element
 * @returns A `<tfoot>` element with a muted translucent background, top border, medium font weight, and the last row's bottom border removed
 */
function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a table row element with standardized row styling (hover, selected state, border, and transition).
 *
 * @param className - Additional class names to merge with the component's default row styles
 * @param props - All other props are forwarded to the underlying `<tr>` element
 * @returns A `<tr>` element with `data-slot="table-row"`, merged `className`, and forwarded props
 */
function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a styled table header cell (<th>) with a data-slot attribute for composition.
 *
 * @param className - Additional CSS classes to merge with the component's default header styles
 * @returns The rendered <th> element
 */
function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a table cell (<td>) with consistent padding, vertical alignment, no wrapping, and checkbox-specific spacing.
 *
 * @param className - Additional class names that will be merged with the component's default classes
 * @param props - All other standard `<td>` props are forwarded to the rendered element
 * @returns A `<td>` element with default table-cell styling applied
 */
function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a table caption element with muted foreground styling and top margin.
 *
 * @param className - Additional CSS classes to merge with the default caption styles
 * @param props - Additional props forwarded to the underlying `caption` element
 * @returns A caption element styled for table captions
 */
function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
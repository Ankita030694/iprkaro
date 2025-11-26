"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext<{
  value?: string;
  onValueChange?: (value: string) => void;
}>({});

const Accordion = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    type?: "single" | "multiple";
    collapsible?: boolean;
    value?: string;
    onValueChange?: (value: string) => void;
  }
>(({ className, type, collapsible, value: valueProp, onValueChange, ...props }, ref) => {
  const [value, setValue] = React.useState<string>(valueProp || "");

  const handleValueChange = (newValue: string) => {
    if (onValueChange) {
      onValueChange(newValue);
    } else {
      setValue(newValue === value && collapsible ? "" : newValue);
    }
  };

  return (
    <AccordionContext.Provider value={{ value: valueProp !== undefined ? valueProp : value, onValueChange: handleValueChange }}>
      <div ref={ref} className={cn("", className)} {...props} />
    </AccordionContext.Provider>
  );
});
Accordion.displayName = "Accordion";

// Helper context for Item to pass value to Trigger and Content
const AccordionItemContext = React.createContext<{ value: string }>({ value: "" });

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, ...props }, ref) => {
  const context = React.useContext(AccordionContext);
  const isOpen = context.value === value;

  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div
        ref={ref}
        className={cn("border-b", className)}
        data-state={isOpen ? "open" : "closed"}
        {...props}
      />
    </AccordionItemContext.Provider>
  );
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const { value, onValueChange } = React.useContext(AccordionContext);
  
  return (
    <AccordionItemContext.Consumer>
      {({ value: itemValue }) => (
        <div className="flex">
          <button
            ref={ref}
            onClick={() => onValueChange && onValueChange(itemValue)}
            className={cn(
              "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
              className
            )}
            {...props}
            data-state={value === itemValue ? "open" : "closed"}
          >
            {children}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 shrink-0 transition-transform duration-200"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      )}
    </AccordionItemContext.Consumer>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <AccordionItemContext.Consumer>
      {({ value: itemValue }) => (
        <AccordionContext.Consumer>
          {({ value }) => {
             const isOpen = value === itemValue;
             if (!isOpen) return null;
             return (
               <div
                 ref={ref}
                 className={cn(
                   "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
                   className
                 )}
                 {...props}
               >
                 <div className="pb-4 pt-0">{children}</div>
               </div>
             );
          }}
        </AccordionContext.Consumer>
      )}
    </AccordionItemContext.Consumer>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

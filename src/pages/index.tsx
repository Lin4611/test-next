"use client";
import * as React from "react";
import { Calendar, CalendarDayButton } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { addDays } from "date-fns";
import { type DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
export default function Home() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 11, 8),
    to: addDays(new Date(new Date().getFullYear(), 11, 8), 10),
  });
  return (
    <Card className="mx-auto w-fit p-0">
      <h1 className="text-amber-500">this is dev we change</h1>
      <Card>
        <CardContent>
          <p>hello</p>
        </CardContent>
        <Button>Button</Button>
      </Card>
      <CardContent className="p-0">
        <Calendar
          mode="range"
          defaultMonth={range?.from}
          selected={range}
          onSelect={setRange}
          numberOfMonths={1}
          captionLayout="dropdown"
          className="[--cell-size:--spacing(20)] md:[--cell-size:--spacing(20)]"
          formatters={{
            formatMonthDropdown: (date) => {
              return date.toLocaleString("default", { month: "long" });
            },
          }}
          components={{
            DayButton: ({ children, modifiers, day, ...props }) => {
              const isWeekend =
                day.date.getDay() === 0 || day.date.getDay() === 6;
              return (
                <CalendarDayButton day={day} modifiers={modifiers} {...props}>
                  {children}
                  {!modifiers.outside && (
                    <>
                      <span>{isWeekend ? "$120" : "$100"}</span>
                      <span>{isWeekend ? "$120" : "$100"}</span>
                      <span>{isWeekend ? "$120" : "$100"}</span>
                    </>
                  )}
                </CalendarDayButton>
              );
            },
          }}
        />
      </CardContent>
    </Card>
  );
}

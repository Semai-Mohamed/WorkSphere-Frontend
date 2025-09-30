import { before } from "node:test";
import CardWrapper from "../CardWrapper";

export default function Calendar({
    deadline,
}: {
    deadline: { year: number; month: number; day: number };
}) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    function isLate() {
        const today = new Date().getDate();
        let currentMonth = new Date().getMonth();
        if (
            currentMonth > deadline.month ||
            (currentMonth === deadline.month && today > deadline.day)
        ) {
            return true;
        } else {
            return false;
        }
    }

    function arrangeDays() {
        const days = ["S", "M", "T", "W", "T", "F", "S"];
        const currentDay = new Date().getDay();
        const arrangedDays = [
            ...days.slice(currentDay),
            ...days.slice(0, currentDay),
        ];
        return arrangedDays;
    }

    function getMonthDays() {
        const currentMonthMaxDays = new Date(
            deadline.year,
            deadline.month + 1,
            0
        ).getDate();

        return currentMonthMaxDays;
    }

    function calendarDays() {
        const today = new Date().getDate();
        let currentMonth = new Date().getMonth();
        const maxMonthDays = getMonthDays();

        const days: Array<{
            number: number;
            position: "before" | "is" | "after";
            month: "current" | "next";
        }> = [];

        for (let i = 0; i < 21; i++) {
            if (today + i === maxMonthDays + 1) currentMonth++;
            days.push({
                number:
                    today + i <= maxMonthDays
                        ? today + i
                        : today + i - maxMonthDays,
                position:
                    currentMonth < deadline.month ||
                    (currentMonth === deadline.month &&
                        today + i < deadline.day)
                        ? "before"
                        : currentMonth === deadline.month &&
                          today + i === deadline.day
                        ? "is"
                        : "after",
                month: today + i <= maxMonthDays ? "current" : "next",
            });
        }

        return days;
    }

    return (
        <CardWrapper
            customHeader={
                <div className="flex justify-between">
                    <h6 className="font-primary text-primary opacity-40 text-sm">
                        Deadline
                    </h6>
                    <h6
                        className={`font-primary font-bold text-primary text-sm ${
                            isLate() ? "text-red" : ""
                        }`}
                    >
                        {months[deadline.month]} {deadline.day}
                    </h6>
                </div>
            }
        >
            <div className="flex-1 grid grid-cols-7 grid-rows-[auto_repeat(3,_minmax(0,33px))] gap-0.5">
                {/* Header */}
                {arrangeDays().map((day, i) => (
                    <span
                        key={i}
                        className="font-primary text-[11px] text-center opacity-10"
                    >
                        {day}
                    </span>
                ))}

                {/* Calendar Days */}
                {calendarDays().map((day, i) => (
                    <div
                        key={i}
                        className={`font-primary font-bold text-xs flex justify-center items-center h-full aspect-square rounded-full mx-auto ${
                            i === 0
                                ? isLate()
                                    ? "text-red border-red border-[1.5px]"
                                    : "border-[1.5px] border-primary text-primary"
                                : day.position === "before"
                                ? "text-primary opacity-40"
                                : day.position === "is"
                                ? "bg-yellow"
                                : day.position === "after"
                                ? day.month === "next"
                                    ? "opacity-10"
                                    : "opacity-20"
                                : ""
                        }`}
                    >
                        {day.number}
                    </div>
                ))}
            </div>
        </CardWrapper>
    );
}

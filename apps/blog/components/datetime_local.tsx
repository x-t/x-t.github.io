import { CalendarIcon } from "@heroicons/react/outline";

export const DateTime = ({ date }) => {
  return (
    <p className="flex items-center gap-1">
      <CalendarIcon className="h-5 w-5" />
      {new Date(date).toLocaleDateString()}{" "}
      {new Date(date).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </p>
  );
};

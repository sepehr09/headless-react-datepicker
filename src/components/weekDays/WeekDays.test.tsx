import { render } from "@testing-library/react";
import DatePickerProvider from "../../DatePickerProvider";
import WeekDays from "./WeekDays";

const mockWeeDays = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

describe("WeekDays component", () => {
  it("renders with default props", () => {
    const { container } = render(
      <DatePickerProvider
        initialValue={new Date("2024-08-01T00:00:00.000Z")}
        config={{ weekdayFormat: "long" }}
      >
        <WeekDays rootClassName="root" className="elements" />
      </DatePickerProvider>
    );

    const rootElement = container.querySelector(".root");
    const elements = container.querySelectorAll(".elements");

    expect(rootElement).toBeInTheDocument();
    expect(rootElement?.children).toHaveLength(7);
    expect(elements).toHaveLength(7);

    Array.from(elements).forEach((element, index) => {
      expect(element).toHaveTextContent(mockWeeDays[index]);
    });
  });

  it("custom className and rootClassName and style and rootStyle", () => {
    const { container } = render(
      <DatePickerProvider
        initialValue={new Date("2024-08-01T00:00:00.000Z")}
        config={{ weekdayFormat: "long" }}
      >
        <WeekDays
          rootClassName="root"
          style={{ color: "#ddd" }}
          rootStyle={{ color: "#efefef" }}
          className="elements"
        />
      </DatePickerProvider>
    );

    const rootElement = container.querySelector(".root");

    expect(rootElement).toBeInTheDocument();
    expect(rootElement).toHaveStyle({ color: "#efefef" });

    const elements = container.querySelectorAll(".elements");
    expect(elements).toHaveLength(7);

    Array.from(elements).forEach((element) => {
      expect(element).toHaveStyle({ color: "#ddd" });
    });
  });

  it("marks configured weekend days with the weekend modifier class", () => {
    const { container } = render(
      <DatePickerProvider
        initialValue={new Date("2024-08-01T00:00:00.000Z")}
        config={{ weekdayFormat: "long", weekends: ["friday", "saturday"] }}
      >
        <WeekDays rootClassName="root" />
      </DatePickerProvider>
    );

    const weekendDays = container.querySelectorAll(
      ".rhmdp-weekDays__day--weekend"
    );
    expect(weekendDays).toHaveLength(2);

    // the two weekend columns are exactly friday and saturday
    expect(
      container.querySelector(".rhmdp-weekDays__day--friday")
    ).toHaveClass("rhmdp-weekDays__day--weekend");
    expect(
      container.querySelector(".rhmdp-weekDays__day--saturday")
    ).toHaveClass("rhmdp-weekDays__day--weekend");
  });

  it("renderer prop", () => {
    const mockRenderer = vitest.fn();

    const { container } = render(
      <DatePickerProvider
        initialValue={new Date("2024-08-01T00:00:00.000Z")}
        config={{ weekdayFormat: "long" }}
      >
        <WeekDays
          rootClassName="root"
          className="elements"
          renderer={mockRenderer}
        />
      </DatePickerProvider>
    );

    const rootElement = container.querySelector(".root");

    expect(rootElement).toBeInTheDocument();

    expect(mockRenderer).toHaveBeenCalledTimes(7);

    // test each mockRenderer call
    Array.from(mockRenderer.mock.calls).forEach((call, index) => {
      expect(call).toEqual([
        {
          formattedTitle: mockWeeDays[index],
          weekDay: mockWeeDays[index].toLowerCase(),
          weekIndex: index,
        },
      ]);
    });
  });
});

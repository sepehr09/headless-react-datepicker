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

  it("renderer prop", () => {
    const { container } = render(
      <DatePickerProvider
        initialValue={new Date("2024-08-01T00:00:00.000Z")}
        config={{ weekdayFormat: "long" }}
      >
        <WeekDays
          rootClassName="root"
          className="elements"
          renderer={({ formattedTitle, weekDay, weekIndex }) => (
            <div
              key={formattedTitle}
              className="custom-renderer"
              data-weekday={weekDay}
              data-weekIndex={weekIndex}
            >
              {formattedTitle}
            </div>
          )}
        />
      </DatePickerProvider>
    );

    const rootElement = container.querySelector(".root");

    expect(rootElement).toBeInTheDocument();

    const elements = container.querySelectorAll(".custom-renderer");
    expect(elements).toHaveLength(7);

    // testing the renderer returning props
    Array.from(elements).forEach((element, index) => {
      expect(element).toHaveTextContent(mockWeeDays[index]);
      expect(element).toHaveAttribute(
        "data-weekday",
        element.textContent?.toLowerCase()
      );
      expect(element).toHaveAttribute("data-weekIndex", index.toString());
    });
  });
});

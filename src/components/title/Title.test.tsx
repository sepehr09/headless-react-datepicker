import { fireEvent, getByText, render } from "@testing-library/react";
import DatePickerProvider from "../../DatePickerProvider";
import Title from "./Title";

describe("Title component", () => {
  it("renders with default props", () => {
    const { container } = render(
      <DatePickerProvider initialValue={new Date("2024-08-01T00:00:00.000Z")}>
        <Title />
      </DatePickerProvider>
    );

    const titleElement = getByText(container, "Aug 2024");

    expect(titleElement).toBeInTheDocument();
  });

  it('renders with aria-label "Go to current month"', () => {
    const { container } = render(
      <DatePickerProvider initialValue={new Date("2024-08-01T00:00:00.000Z")}>
        <Title />
      </DatePickerProvider>
    );

    const titleElement = getByText(container, "Aug 2024");

    expect(titleElement).toHaveAttribute("aria-label", "Go to current month");
  });

  it("makes sure goToCurrentMonth works properly", () => {
    const { getByText } = render(
      <DatePickerProvider initialValue={new Date("2024-08-01T00:00:00.000Z")}>
        <Title />
      </DatePickerProvider>
    );

    const titleElement = getByText("Aug 2024");

    const mockCurrentMonthTitle = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      calendar: "gregory",
    }).format(new Date());

    fireEvent.click(titleElement);

    expect(titleElement).toHaveTextContent(mockCurrentMonthTitle);
  });

  it("calls goToCurrentMonth on Enter key press", () => {
    const { getByText } = render(
      <DatePickerProvider initialValue={new Date("2024-08-01T00:00:00.000Z")}>
        <Title />
      </DatePickerProvider>
    );

    const titleElement = getByText("Aug 2024");

    const mockCurrentMonthTitle = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      calendar: "gregory",
    }).format(new Date());

    fireEvent.keyDown(titleElement, { key: "Enter" });

    expect(titleElement).toHaveTextContent(mockCurrentMonthTitle);
  });

  it("renders with custom className and style", () => {
    const { getByText } = render(
      <DatePickerProvider initialValue={new Date("2024-08-01T00:00:00.000Z")}>
        <Title className="custom-class" style={{ color: "#ddd" }} />
      </DatePickerProvider>
    );

    const titleElement = getByText("Aug 2024");

    expect(titleElement).toHaveClass("custom-class");
    expect(titleElement).toHaveStyle({ color: "#ddd" });
  });

  it("custom yearFormat and monthFormat", () => {
    const { getByText } = render(
      <DatePickerProvider initialValue={new Date("2024-08-01T00:00:00.000Z")}>
        <Title yearFormat="2-digit" monthFormat="long" />
      </DatePickerProvider>
    );

    const titleElement = getByText("August 24");

    expect(titleElement).toBeInTheDocument();
  });
});

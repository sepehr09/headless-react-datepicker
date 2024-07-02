import { fireEvent, render } from "@testing-library/react";
import DatePickerProvider from "../../DatePickerProvider";
import Header from "./Header";

describe("Header component", () => {
  it("makes sure all elements renders and all props works", () => {
    const { container } = render(
      <DatePickerProvider initialValue={new Date("2024-08-01T00:00:00.000Z")}>
        <Header
          rootClassName="root"
          prevButtonClassName="prevBtn"
          nextButtonClassName="nextBtn"
          yearSelectClassName="yearSelect"
          monthSelectClassName="monthSelect"
          monthOptionClassName="monthOption"
          yearOptionClassName="yearOption"
          monthSelectedOptionClassName="monthSelectedOption"
          yearSelectedOptionClassName="yearSelectedOption"
          monthSelectStyles={{ color: "#e1e1e1" }}
          yearSelectStyles={{ color: "#e2e2e2" }}
          monthOptionStyles={{ color: "#e3e3e3" }}
          yearOptionStyles={{ color: "#e4e4e4" }}
          monthSelectedOptionStyles={{ color: "#e5e5e5" }}
          yearSelectedOptionStyles={{ color: "#e6e6e6" }}
        />
      </DatePickerProvider>
    );

    const rootElement = container.querySelector(".root");
    const prevButton = container.querySelector(".prevBtn");
    const nextButton = container.querySelector(".nextBtn");
    const yearSelect = container.querySelector(".yearSelect");
    const monthSelect = container.querySelector(".monthSelect");
    const monthOption = container.querySelector(".monthOption");
    const yearOption = container.querySelector(".yearOption");
    const monthSelectedOption = container.querySelector(".monthSelectedOption");
    const yearSelectedOption = container.querySelector(".yearSelectedOption");

    /* ------------------------------- classNames ------------------------------- */
    expect(rootElement).toBeInTheDocument();
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(yearSelect).toBeInTheDocument();
    expect(monthSelect).toBeInTheDocument();
    expect(monthOption).toBeInTheDocument();
    expect(yearOption).toBeInTheDocument();
    expect(monthSelectedOption).toBeInTheDocument();
    expect(yearSelectedOption).toBeInTheDocument();

    /* --------------------------------- styles --------------------------------- */
    expect(monthSelect).toHaveStyle("color: #e1e1e1");
    expect(yearSelect).toHaveStyle("color: #e2e2e2");
    expect(monthOption).toHaveStyle("color: #e3e3e3");
    expect(yearOption).toHaveStyle("color: #e4e4e4");
    expect(monthSelectedOption).toHaveStyle("color: #e5e5e5");
    expect(yearSelectedOption).toHaveStyle("color: #e6e6e6");
  });

  it("should go next month by click", async () => {
    const { container } = render(
      <DatePickerProvider
        initialValue={new Date("2024-12-01T00:00:00.000Z")}
        config={{ yearRangeFrom: 2024, yearRangeTo: 2025 }}
      >
        <Header
          nextButtonClassName="nextBtn"
          monthSelectedOptionClassName="monthSelectedOption"
          yearSelectedOptionClassName="yearSelectedOption"
        />
      </DatePickerProvider>
    );

    const nextButton = container.querySelector(".nextBtn");

    expect(container.querySelector(".monthSelectedOption")).toHaveTextContent(
      "December"
    );
    expect(container.querySelector(".yearSelectedOption")).toHaveTextContent(
      "2024"
    );

    fireEvent.click(nextButton!);

    expect(container.querySelector(".monthSelectedOption")).toHaveTextContent(
      "January"
    );
    expect(container.querySelector(".yearSelectedOption")).toHaveTextContent(
      "2025"
    );
  });

  it("should go next month by enter pressed", async () => {
    const { container } = render(
      <DatePickerProvider
        initialValue={new Date("2024-12-01T00:00:00.000Z")}
        config={{ yearRangeFrom: 2024, yearRangeTo: 2025 }}
      >
        <Header
          nextButtonClassName="nextBtn"
          yearSelectClassName="yearSelect"
          monthSelectedOptionClassName="monthSelectedOption"
          yearSelectedOptionClassName="yearSelectedOption"
        />
      </DatePickerProvider>
    );

    const nextButton = container.querySelector(".nextBtn");

    expect(container.querySelector(".monthSelectedOption")).toHaveTextContent(
      "December"
    );
    expect(container.querySelector(".yearSelectedOption")).toHaveTextContent(
      "2024"
    );

    fireEvent.keyDown(nextButton!, { key: "Enter" });

    expect(container.querySelector(".monthSelectedOption")).toHaveTextContent(
      "January"
    );
    expect(container.querySelector(".yearSelectedOption")).toHaveTextContent(
      "2025"
    );
  });

  it("should go prev month by click", async () => {
    const { container } = render(
      <DatePickerProvider
        initialValue={new Date("2025-01-01T00:00:00.000Z")}
        config={{ yearRangeFrom: 2024, yearRangeTo: 2025 }}
      >
        <Header
          prevButtonClassName="prevBtn"
          monthSelectedOptionClassName="monthSelectedOption"
          yearSelectedOptionClassName="yearSelectedOption"
        />
      </DatePickerProvider>
    );

    const prevButton = container.querySelector(".prevBtn");

    expect(container.querySelector(".monthSelectedOption")).toHaveTextContent(
      "January"
    );
    expect(container.querySelector(".yearSelectedOption")).toHaveTextContent(
      "2025"
    );

    fireEvent.click(prevButton!);

    expect(container.querySelector(".monthSelectedOption")).toHaveTextContent(
      "December"
    );
    expect(container.querySelector(".yearSelectedOption")).toHaveTextContent(
      "2024"
    );
  });

  it("should go prev month by enter pressed", async () => {
    const { container } = render(
      <DatePickerProvider
        initialValue={new Date("2025-01-01T00:00:00.000Z")}
        config={{ yearRangeFrom: 2024, yearRangeTo: 2025 }}
      >
        <Header
          prevButtonClassName="prevBtn"
          monthSelectedOptionClassName="monthSelectedOption"
          yearSelectedOptionClassName="yearSelectedOption"
        />
      </DatePickerProvider>
    );

    const prevButton = container.querySelector(".prevBtn");

    expect(container.querySelector(".monthSelectedOption")).toHaveTextContent(
      "January"
    );
    expect(container.querySelector(".yearSelectedOption")).toHaveTextContent(
      "2025"
    );

    fireEvent.keyDown(prevButton!, { key: "Enter" });

    expect(container.querySelector(".monthSelectedOption")).toHaveTextContent(
      "December"
    );
    expect(container.querySelector(".yearSelectedOption")).toHaveTextContent(
      "2024"
    );
  });

  it("should change month by dropdown select", async () => {
    const { container } = render(
      <DatePickerProvider
        initialValue={new Date("2025-01-01T00:00:00.000Z")}
        config={{ yearRangeFrom: 2024, yearRangeTo: 2025 }}
      >
        <Header
          monthSelectClassName="monthSelect"
          monthOptionClassName="monthOption"
          monthSelectedOptionClassName="monthSelectedOption"
          yearSelectedOptionClassName="yearSelectedOption"
        />
      </DatePickerProvider>
    );

    const monthSelect = container.querySelector(".monthSelect");

    // change month to March
    fireEvent.change(monthSelect!, { target: { value: "3" } });

    expect(container.querySelector(".monthSelectedOption")).toHaveTextContent(
      "March"
    );
    expect(container.querySelector(".yearSelectedOption")).toHaveTextContent(
      "2025"
    );
  });

  it("should change year by dropdown select", async () => {
    const { container } = render(
      <DatePickerProvider
        initialValue={new Date("2025-01-01T00:00:00.000Z")}
        config={{ yearRangeFrom: 2020, yearRangeTo: 2030 }}
      >
        <Header
          yearSelectClassName="yearSelect"
          monthSelectedOptionClassName="monthSelectedOption"
          yearSelectedOptionClassName="yearSelectedOption"
        />
      </DatePickerProvider>
    );

    const yearSelect = container.querySelector(".yearSelect");

    // change month to March
    fireEvent.change(yearSelect!, { target: { value: "2027" } });

    expect(container.querySelector(".monthSelectedOption")).toHaveTextContent(
      "January"
    );
    expect(container.querySelector(".yearSelectedOption")).toHaveTextContent(
      "2027"
    );
  });

  it("should renders custom icons for left and right arrows", async () => {
    const { container } = render(
      <DatePickerProvider>
        <Header
          prevButtonClassName="prevBtn"
          nextButtonClassName="nextBtn"
          leftIcon={<span className="myLeftIcon">👈</span>}
          rightIcon={<span className="myRightIcon">👉</span>}
        />
      </DatePickerProvider>
    );

    const prevButton = container.querySelector(".prevBtn");
    const nextButton = container.querySelector(".nextBtn");

    expect(prevButton).toHaveTextContent("👈");
    expect(nextButton).toHaveTextContent("👉");
  });

  it("should have aria-label attributes on next and prev buttons", async () => {
    const { container } = render(
      <DatePickerProvider>
        <Header prevButtonClassName="prevBtn" nextButtonClassName="nextBtn" />
      </DatePickerProvider>
    );

    const prevButton = container.querySelector(".prevBtn");
    const nextButton = container.querySelector(".nextBtn");

    expect(prevButton).toHaveAttribute("aria-label", "Previous Month");
    expect(nextButton).toHaveAttribute("aria-label", "Next Month");
  });
});

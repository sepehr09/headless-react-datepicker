import { fireEvent, render } from "@testing-library/react";
import DatePickerProvider from "../../DatePickerProvider";
import PanelHeader from "./PanelHeader";

describe("PanelHeader component", () => {
  it("renders the day view (children) by default and applies the root props", () => {
    const { container, getByText } = render(
      <DatePickerProvider initialValue={new Date("2024-08-01T00:00:00.000Z")}>
        <PanelHeader rootClassName="root" rootStyles={{ color: "#e1e1e1" }}>
          <div className="dayBody">day body</div>
        </PanelHeader>
      </DatePickerProvider>
    );

    const root = container.querySelector(".root");
    expect(root).toBeInTheDocument();
    expect(root).toHaveStyle("color: #e1e1e1");
    // children are shown in the days view
    expect(container.querySelector(".dayBody")).toBeInTheDocument();
    // the header shows month + year labels
    expect(getByText("August")).toBeInTheDocument();
    expect(getByText("2024")).toBeInTheDocument();
  });

  it("opens the months grid when the month label is clicked and selects a month", () => {
    const { container, getByText } = render(
      <DatePickerProvider initialValue={new Date("2024-08-01T00:00:00.000Z")}>
        <PanelHeader>
          <div className="dayBody">day body</div>
        </PanelHeader>
      </DatePickerProvider>
    );

    // enter months view
    fireEvent.click(getByText("August"));

    // all 12 months are shown, day body is hidden
    expect(getByText("January")).toBeInTheDocument();
    expect(getByText("December")).toBeInTheDocument();
    expect(container.querySelector(".dayBody")).not.toBeInTheDocument();

    // pick March -> back to days view on March
    fireEvent.click(getByText("March"));
    expect(container.querySelector(".dayBody")).toBeInTheDocument();
    expect(getByText("March")).toBeInTheDocument();
  });

  it("opens a paginated years grid and pages by yearsPerPage", () => {
    const { container, getByText, queryByText } = render(
      <DatePickerProvider initialValue={new Date("2024-08-01T00:00:00.000Z")}>
        <PanelHeader
          yearsPerPage={12}
          prevButtonClassName="prevBtn"
          nextButtonClassName="nextBtn"
        >
          <div className="dayBody">day body</div>
        </PanelHeader>
      </DatePickerProvider>
    );

    // enter years view via the year label
    fireEvent.click(getByText("2024"));

    // page is seeded around the current year: 2024 - 6 = 2018 .. 2029
    expect(getByText("2018 - 2029")).toBeInTheDocument();
    expect(getByText("2018")).toBeInTheDocument();
    expect(getByText("2029")).toBeInTheDocument();

    const prev = container.querySelector(".prevBtn");
    const next = container.querySelector(".nextBtn");

    // next page shifts the range by yearsPerPage (12)
    fireEvent.click(next!);
    expect(getByText("2030 - 2041")).toBeInTheDocument();
    expect(queryByText("2018 - 2029")).not.toBeInTheDocument();

    // prev page twice goes back below the start
    fireEvent.click(prev!);
    fireEvent.click(prev!);
    expect(getByText("2006 - 2017")).toBeInTheDocument();
  });

  it("selecting a year drops into the months view on that year", () => {
    const { getByText, container } = render(
      <DatePickerProvider initialValue={new Date("2024-08-01T00:00:00.000Z")}>
        <PanelHeader>
          <div className="dayBody">day body</div>
        </PanelHeader>
      </DatePickerProvider>
    );

    fireEvent.click(getByText("2024"));
    fireEvent.click(getByText("2027"));

    // months view is shown (months grid present, day body hidden)
    expect(getByText("January")).toBeInTheDocument();
    expect(container.querySelector(".dayBody")).not.toBeInTheDocument();
    // the year label now reads 2027
    expect(getByText("2027")).toBeInTheDocument();
  });

  it("navigates with the prev/next arrows per view", () => {
    const { container, getByText } = render(
      <DatePickerProvider
        initialValue={new Date("2024-12-01T00:00:00.000Z")}
        config={{ yearRangeFrom: 2020, yearRangeTo: 2030 }}
      >
        <PanelHeader
          prevButtonClassName="prevBtn"
          nextButtonClassName="nextBtn"
        >
          <div className="dayBody">day body</div>
        </PanelHeader>
      </DatePickerProvider>
    );

    const next = container.querySelector(".nextBtn");
    // days view: next goes to next month (Dec -> Jan 2025)
    fireEvent.click(next!);
    expect(getByText("January")).toBeInTheDocument();
    expect(getByText("2025")).toBeInTheDocument();
  });

  it("supports keyboard (Enter) and custom icons", () => {
    const { container } = render(
      <DatePickerProvider initialValue={new Date("2024-08-01T00:00:00.000Z")}>
        <PanelHeader
          prevButtonClassName="prevBtn"
          nextButtonClassName="nextBtn"
          leftIcon={<span className="myLeft">👈</span>}
          rightIcon={<span className="myRight">👉</span>}
        >
          <div>day body</div>
        </PanelHeader>
      </DatePickerProvider>
    );

    const prev = container.querySelector(".prevBtn");
    const next = container.querySelector(".nextBtn");

    expect(prev).toHaveTextContent("👈");
    expect(next).toHaveTextContent("👉");
    expect(prev).toHaveAttribute("aria-label", "Previous");
    expect(next).toHaveAttribute("aria-label", "Next");

    // Enter on next moves forward without throwing
    fireEvent.keyDown(next!, { key: "Enter" });
  });

  it("navigates with the keyboard (Enter) on the prev arrow and ignores other keys", () => {
    const { container, getByText } = render(
      <DatePickerProvider
        initialValue={new Date("2024-12-01T00:00:00.000Z")}
        config={{ yearRangeFrom: 2020, yearRangeTo: 2030 }}
      >
        <PanelHeader prevButtonClassName="prevBtn">
          <div>day body</div>
        </PanelHeader>
      </DatePickerProvider>
    );

    const prev = container.querySelector(".prevBtn");

    // a non-Enter key is ignored (still December 2024)
    fireEvent.keyDown(prev!, { key: "ArrowLeft" });
    expect(getByText("December")).toBeInTheDocument();
    expect(getByText("2024")).toBeInTheDocument();

    // Enter on prev steps back a month (Dec 2024 -> Nov 2024)
    fireEvent.keyDown(prev!, { key: "Enter" });
    expect(getByText("November")).toBeInTheDocument();
    expect(getByText("2024")).toBeInTheDocument();
  });
});

import { HEADER } from "../../constants/classNames";
import { classJoin } from "../../utils/classJoin";
import HeaderMonthSelect from "./HeaderMonthSelect";
import HeaderNextButton from "./HeaderNextButton";
import HeaderPrevButton from "./HeaderPrevButton";
import HeaderYearSelect from "./HeaderYearSelect";
import { THeaderProps } from "./types";

/**
 * The default header: prev/next arrows + month/year `<select>` dropdowns in a
 * fixed row. It is a thin composition over the standalone parts
 * (`HeaderPrevButton`, `HeaderMonthSelect`, `HeaderYearSelect`,
 * `HeaderNextButton`) — render those individually instead if you need a custom
 * order/layout. Props and behaviour here are unchanged.
 */
function Header({
  navigationStep = 1,
  rootClassName,
  rootStyles,
  prevButtonStyles,
  nextButtonStyles,
  prevButtonClassName,
  nextButtonClassName,
  leftIcon,
  rightIcon,
  monthSelectClassName,
  monthSelectStyles,
  monthOptionClassName,
  monthOptionStyles,
  monthSelectedOptionClassName,
  monthSelectedOptionStyles,
  yearSelectClassName,
  yearSelectStyles,
  yearOptionClassName,
  yearOptionStyles,
  yearSelectedOptionClassName,
  yearSelectedOptionStyles,
}: THeaderProps) {
  return (
    <div className={classJoin(HEADER, rootClassName)} style={rootStyles}>
      <HeaderPrevButton
        navigationStep={navigationStep}
        className={prevButtonClassName}
        styles={prevButtonStyles}
        icon={leftIcon}
      />
      <HeaderMonthSelect
        className={monthSelectClassName}
        styles={monthSelectStyles}
        optionClassName={monthOptionClassName}
        optionStyles={monthOptionStyles}
        selectedOptionClassName={monthSelectedOptionClassName}
        selectedOptionStyles={monthSelectedOptionStyles}
      />
      <HeaderYearSelect
        className={yearSelectClassName}
        styles={yearSelectStyles}
        optionClassName={yearOptionClassName}
        optionStyles={yearOptionStyles}
        selectedOptionClassName={yearSelectedOptionClassName}
        selectedOptionStyles={yearSelectedOptionStyles}
      />
      <HeaderNextButton
        navigationStep={navigationStep}
        className={nextButtonClassName}
        styles={nextButtonStyles}
        icon={rightIcon}
      />
    </div>
  );
}

export default Header;

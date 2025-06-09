/** @jsx jsx */
import { jsx } from 'jimu-core';
interface DateHeaderProps {
    date: Date;
    monthDate: Date;
    customHeaderCount: number;
    showTwoMonths: boolean;
    changeYear: (value: number) => void;
    changeMonth: (value: number) => void;
    decreaseMonth: any;
    increaseMonth: any;
}
declare function DateHeader(props: DateHeaderProps): jsx.JSX.Element;
export default DateHeader;

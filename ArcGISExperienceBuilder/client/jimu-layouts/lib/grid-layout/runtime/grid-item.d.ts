/** @jsx jsx */
import { React, jsx, type IMLayoutJson } from 'jimu-core';
interface Props {
    layout: IMLayoutJson;
    layoutItemId: string;
    isLast?: boolean;
}
export declare function GridItemComponent(props: Props & React.HTMLAttributes<HTMLDivElement>): jsx.JSX.Element;
export {};

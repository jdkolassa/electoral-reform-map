/** @jsx jsx */
import { React, jsx } from 'jimu-core';
import { type LayoutItemProps } from '../types';
interface ChildElement {
    children?: Element | React.ReactNode;
}
export interface OwnProps {
    id?: string;
    delay?: number;
    isLastChild?: boolean;
}
export default function LayoutItem(props: LayoutItemProps & OwnProps & ChildElement): jsx.JSX.Element;
export {};

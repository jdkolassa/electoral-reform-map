/** @jsx jsx */
import { React, jsx } from 'jimu-core';
import { type LayoutItemProps, type SectionProps, type LayoutProps, type StateToLayoutItemProps } from '../types';
interface OwnProps {
    layoutEntryComponent: React.ComponentClass<LayoutProps>;
    viewVisibilityContext: React.ComponentClass;
}
type Props = LayoutItemProps & StateToLayoutItemProps & SectionProps & OwnProps;
export declare function SectionRendererBase(props: Props): jsx.JSX.Element;
export {};

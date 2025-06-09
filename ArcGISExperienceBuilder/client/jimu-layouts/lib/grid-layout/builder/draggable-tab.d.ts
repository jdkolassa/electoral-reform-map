/** @jsx jsx */
import { jsx } from 'jimu-core';
import { type TabProps } from 'jimu-ui';
interface DraggableTabProps {
    layoutId: string;
    layoutItemId: string;
    onDragStart: (layoutItemId: string) => void;
}
export declare function DraggableTab(props: DraggableTabProps & TabProps): jsx.JSX.Element;
export {};

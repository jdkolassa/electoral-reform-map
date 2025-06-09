/** @jsx jsx */
import { jsx } from 'jimu-core';
import { type UpdateTreeActionDataType, type TreeItemType, type TreeDropItemActionDataType, type TreeProps } from 'jimu-ui/basic/list-tree';
import { type SerializedStyles } from 'jimu-theme';
interface SortTreeProps extends TreeProps {
    rootItemJson: TreeItemType;
    onSort: (actionData: UpdateTreeActionDataType & TreeDropItemActionDataType) => void;
    onRemove: (item: TreeItemType) => void;
    css?: SerializedStyles;
    className?: string;
}
export declare const SortTree: (props: SortTreeProps) => jsx.JSX.Element;
export {};

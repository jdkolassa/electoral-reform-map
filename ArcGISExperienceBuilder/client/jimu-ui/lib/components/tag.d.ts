import { React } from 'jimu-core';
/**
 * The Tag component props.
 */
export interface TagProps {
    /**
     * Tag list data.
     */
    data: string[];
    /**
     * Callback fired when the tag list is changed.
     */
    onChange?: (data: string[], index?: number) => void;
    /**
     * Defines the class names added to the element.
     */
    className?: string;
}
/**
 * A component used to display tags.
 */
export declare const _Tag: (props: TagProps) => React.JSX.Element;
/**
 * A component used to display tags.
 */
export declare const Tag: (props: TagProps) => React.JSX.Element;

import { React } from 'jimu-core';
export interface CardProps {
    /**
     * To provide a role for card
     */
    role?: string;
    className?: string;
    /**
     * Defines the inline CSS style properties.
     */
    style?: React.CSSProperties;
    /**
     * Render function or node.
     */
    children?: React.ReactElement | React.ReactNode;
    /**
     * If true, the card will show horizontal layout
     */
    horizontal?: boolean;
    /**
     * If true, the card will be shown as selected
     */
    active?: boolean;
    /**
     * Make card behave as a button (clickable)
     */
    button?: boolean;
    [key: string]: any;
}
/**
 * The `Card` component provide a flexible and extensible content container with multiple variants and options.
 *
 * ```ts
 * import { Card } from 'jimu-ui'
 * ```
 */
export declare const _Card: (props: CardProps) => React.JSX.Element;
export declare const Card: import("@emotion/styled").StyledComponent<CardProps, {}, {}>;
export { CardImg, CardBody, CardFooter, CardHeader } from 'reactstrap';
export type { CardImgProps, CardBodyProps, CardFooterProps, CardHeaderProps } from 'reactstrap';

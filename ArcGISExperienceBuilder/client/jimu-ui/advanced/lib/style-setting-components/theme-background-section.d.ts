/** @jsx jsx */
import { jsx } from 'jimu-core';
import { type BackgroundStyle } from 'jimu-ui';
/**
 * The `ThemeBackgroundSection` component props.
 */
export interface ThemeBackgroundSectionProps {
    /**
     * The value of this component, including the background color, background image, and the fill type of background image
     */
    background?: BackgroundStyle;
    /**
     * Invoked when the background value changes.
     */
    onChange?: (background: BackgroundStyle) => void;
    /**
     * Defines the class names added to the element.
     */
    className?: string;
}
export declare function ThemeBackgroundSection(props: ThemeBackgroundSectionProps): jsx.JSX.Element;

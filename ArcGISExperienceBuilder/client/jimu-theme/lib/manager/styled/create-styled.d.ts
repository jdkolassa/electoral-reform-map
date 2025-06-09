import { React } from 'jimu-core';
import { type PropsOf, type FilteringStyledOptions, type StyledOptions as BaseStyledOptions, type CreateStyledComponent, type StyledTags } from '../../__emotion__';
import type { Theme } from '../../system';
export declare function shouldForwardProp(prop: string): boolean;
export interface StyledOptions {
    /**
     * The component name.
     * Component names require each word to have its first letter capitalized
     */
    name?: string;
    /**
     * The name of the nested element in the component. The styles of some elements of a component can be precisely overridden in the theme according to the `part` name.
     * The root node part name is fixed as "root", and each part name must be lowercase.
     */
    part?: string;
}
export interface BaseCreateStyled<StyledOptions, Theme extends object> {
    <C extends React.ComponentClass<React.ComponentProps<C>>, ForwardedProps extends keyof React.ComponentProps<C> & string = keyof React.ComponentProps<C> & string>(component: C, options: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps> & StyledOptions): CreateStyledComponent<Pick<PropsOf<C>, ForwardedProps> & {
        theme?: Theme;
    }, {
        [key: string]: unknown;
    }, {
        ref?: React.Ref<InstanceType<C>>;
    }>;
    <C extends React.ComponentClass<React.ComponentProps<C>>>(component: C, options?: BaseStyledOptions<PropsOf<C>> & StyledOptions): CreateStyledComponent<PropsOf<C> & {
        theme?: Theme;
    }, {
        [key: string]: unknown;
    }, {
        ref?: React.Ref<InstanceType<C>>;
    }>;
    <C extends React.ComponentType<React.ComponentProps<C>>, ForwardedProps extends keyof React.ComponentProps<C> & string = keyof React.ComponentProps<C> & string>(component: C, options: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps> & StyledOptions): CreateStyledComponent<Pick<PropsOf<C>, ForwardedProps> & {
        theme?: Theme;
    }>;
    <C extends React.ComponentType<React.ComponentProps<C>>>(component: C, options?: BaseStyledOptions<PropsOf<C>> & StyledOptions): CreateStyledComponent<PropsOf<C> & {
        theme?: Theme;
    }>;
    <Tag extends keyof JSX.IntrinsicElements, ForwardedProps extends keyof JSX.IntrinsicElements[Tag] & string = keyof JSX.IntrinsicElements[Tag] & string>(tag: Tag, options: FilteringStyledOptions<JSX.IntrinsicElements[Tag], ForwardedProps> & StyledOptions): CreateStyledComponent<{
        theme?: Theme;
        as?: React.ElementType;
    }, Pick<JSX.IntrinsicElements[Tag], ForwardedProps>>;
    <Tag extends keyof JSX.IntrinsicElements>(tag: Tag, options?: BaseStyledOptions<{
        theme?: Theme;
    }> & StyledOptions): CreateStyledComponent<{
        theme?: Theme;
        as?: React.ElementType;
    }, JSX.IntrinsicElements[Tag]>;
}
export interface CreatedStyled<T extends object = Theme> extends BaseCreateStyled<StyledOptions, T>, StyledTags {
}
declare const createStyled: <T extends object = Theme>(input?: {
    defaultTheme?: T;
    rootShouldForwardProp?: (prop: PropertyKey) => boolean;
    partShouldForwardProp?: (prop: PropertyKey) => boolean;
}) => CreatedStyled<T>;
export default createStyled;

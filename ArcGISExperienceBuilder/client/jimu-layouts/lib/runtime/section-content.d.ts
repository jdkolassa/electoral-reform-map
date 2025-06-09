/** @jsx jsx */
import { React, jsx, AnimationPlayMode, type TransitionType, type TransitionDirection, type IMSectionNavInfo, type ImmutableArray } from 'jimu-core';
import type { LayoutProps } from '../types';
interface Props {
    views: ImmutableArray<string>;
    navInfo: IMSectionNavInfo;
    animationPreview: boolean;
    playMode: AnimationPlayMode;
    currentIndex: number;
    previousIndex: number;
    progress: number;
    loop: boolean;
    viewTransition: {
        type: TransitionType;
        direction: TransitionDirection;
    };
    layoutEntryComponent: React.ComponentClass<LayoutProps>;
    viewVisibilityContext: React.ComponentClass;
}
export declare function SectionContent(props: Props): jsx.JSX.Element;
export {};

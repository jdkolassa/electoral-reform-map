/** @jsx jsx */
import { React, jsx, type IMThemeVariables } from 'jimu-core';
import type { TooltipRenderProps } from 'react-joyride';
interface ExtraProps {
    theme?: IMThemeVariables;
    disabled?: boolean;
    isStepInjected?: boolean;
    footerNav: string | React.JSX.Element;
}
export declare const StepDialogComponent: (props: TooltipRenderProps & ExtraProps) => jsx.JSX.Element;
export declare const StepDialog: React.ForwardRefExoticComponent<Pick<{
    continuous: boolean;
    index: number;
    isLastStep: boolean;
    size: number;
    step: import("react-joyride").StepMerged;
    backProps: {
        "aria-label": string;
        "data-action": string;
        onClick: React.MouseEventHandler<HTMLElement>;
        role: string;
        title: string;
    };
    closeProps: {
        "aria-label": string;
        "data-action": string;
        onClick: React.MouseEventHandler<HTMLElement>;
        role: string;
        title: string;
    };
    primaryProps: {
        "aria-label": string;
        "data-action": string;
        onClick: React.MouseEventHandler<HTMLElement>;
        role: string;
        title: string;
    };
    skipProps: {
        "aria-label": string;
        "data-action": string;
        onClick: React.MouseEventHandler<HTMLElement>;
        role: string;
        title: string;
    };
    tooltipProps: {
        "aria-modal": boolean;
        ref: React.RefCallback<HTMLElement>;
        role: string;
    };
} & ExtraProps, "disabled" | "footerNav" | keyof import("react-joyride").BeaconRenderProps | "backProps" | "closeProps" | "primaryProps" | "skipProps" | "tooltipProps" | "isStepInjected"> & {
    theme?: IMThemeVariables;
}>;
export {};

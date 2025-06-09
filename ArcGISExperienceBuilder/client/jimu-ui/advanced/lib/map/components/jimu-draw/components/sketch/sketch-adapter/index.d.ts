/** @jsx jsx */
import { React, jsx } from 'jimu-core';
import type { JimuSketchProps } from '../index';
import { CreateToolActions, SelectToolActions, type JimuDrawCreatedDescriptor, type DrawingUpdatedDescriptor } from '../constraints';
export { CreateToolActions, SelectToolActions };
export type { DrawingUpdatedDescriptor, JimuDrawCreatedDescriptor };
export declare const SketchAdapter: React.MemoExoticComponent<(props: (JimuSketchProps)) => jsx.JSX.Element>;

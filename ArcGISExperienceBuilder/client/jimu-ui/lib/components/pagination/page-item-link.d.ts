import { React } from 'jimu-core';
import { type PageLinkProps } from './page-link';
export type PaginationItemType = 'previous' | 'start-ellipsis' | 'page' | 'end-ellipsis' | 'next';
interface PageItemLinkProps extends PageLinkProps {
    type: PaginationItemType;
}
export declare const PageItemLink: (props: PageItemLinkProps) => React.JSX.Element;
export {};

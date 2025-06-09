import type { ArcGISIdentityManager } from '@esri/arcgis-rest-request';
import type { ExternalResolvablePromise } from '../external-resolvable-promise';
export declare function requestWrapper(desUrl: string, promiseFunc: (session: ArcGISIdentityManager) => Promise<any>, retryLimit?: number, forceLogin?: boolean): Promise<any>;
type CacheableURL = string | RegExp | ((url: string, query: object) => boolean);
/**
 * Register a URL as cacheable. Will cache the request in framework.
 */
export declare function registerCacheableUrl(cacheableUrl: CacheableURL): void;
/**
 * Return the cached request.
 */
export declare function getRequestCache(url: string, query: object): ExternalResolvablePromise;
/**
 * Cache a request.
 */
export declare function setRequestCache(url: string, query: object, promise: ExternalResolvablePromise): void;
/**
 * Delete a request cache.
 */
export declare function deleteRequestCache(url: string, query: object): void;
/**
 * Return whether a URL is cacheable, that is to say, have ever registered this URL as cacheable.
 */
export declare function isURLCacheable(url: string, query: object): boolean;
export {};

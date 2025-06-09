import { ArcGISIdentityManager, type ICredential, type IUser } from '@esri/arcgis-rest-request';
import type { ArcGISServerInfo } from './types/common';
import { ExternalResolvablePromise } from './external-resolvable-promise';
export interface IDeferred<T> {
    promise: Promise<T>;
    resolve: (v: T) => void;
    reject: (v: any) => void;
}
/**
 * The sign-in parameters.
 */
interface SignInParams {
    /** The portal URL to sign-in to. This is optional. The default is the main portal URL. To sign-in a federated service URL, you need to pass in its federated portal URL. */
    desUrl?: string;
    /** The URL that the sign-in request comes from. This is optional. The default is the root path. */
    fromUrl?: string;
    /** The OAuth2 client id. */
    clientId?: string;
    /** If 'true', will use a popup window to sign-in, if 'false', it will redirect to sign-in page in the same window. This is optional. The default is true. */
    popup?: boolean;
    /** If 'true',  the sign-in page will prompt again even the user has already signed-in. This is optional. The default is false. */
    forceLogin?: boolean;
    /** The url of federated service if sign in to a federated service. Optional. @ignore */
    federatedServiceUrl?: string;
}
export interface NoPermissionResourceInfo {
    owningSystemUrl?: string;
    userName?: string;
    ignored?: boolean;
    signInErrorCode: SignInErrorCode;
    allowSignIn?: boolean;
}
export interface NoPermissionResourceInfoList {
    [resourceKey: string]: NoPermissionResourceInfo;
}
export declare enum SignInErrorCode {
    TokenRequired = "TOKEN_REQUIRED",
    InvalidToken = "INVALID_TOKEN",
    NoPermission = "NO_PERMISSION",
    SignInCanceled = "SIGN_IN_CANCELED",
    Other = "OTHER"
}
export interface SignInError {
    code: SignInErrorCode;
    isSignInError: boolean;
    message: string;
    message1?: string;
    message2?: string;
}
/**
 * @ignore
 * The reason type session changed
 */
export declare enum SessionChangedReasonType {
    ArcGISJSSync = "ARCGIS_JS",
    OtherWindowSync = "OTHER_WINDOW",
    AddOrUpdate = "ADD_OR_UPDATE",
    Remove = "REMOVE"
}
/**
 * @ignore
 * The session change listener type
 */
export type SessionChangeListener = (sessions: ArcGISIdentityManager[], reasonType: SessionChangedReasonType) => void;
/**
 * The `SessionManager` is used to manage user sign in sessions.
 */
export declare class SessionManager {
    static instance: SessionManager;
    /**
     * There are three types of a session in the sessions.
     *   1, Portal Session: {
     *     portal: 'https://www.arcgis.com/sharing/rest',
     *     server: undefined
     *   }
     *   2, Federated server session: {
     *     //portal is owning system portal url
     *     portal: 'https://www.arcgis.com/sharing/rest',
     *     server: 'https://server1.arcgis.com/0c086ufssavnw2/arcgis'
     *   }
     *   3, Unfederated server session: {
     *     portal: undefined,
     *     server: 'https://sampleserver6.arcgisonline.com/arcgis'
     *   }
     *
     * If there is a federated server session already exist, then its owning system portal session must also exist.
     *
     * Portal key:
     *   The key is combined with urlKey and customBaseUrl for normal portal,
     *   but if the customBaseUrl is a map url(start with maps|mapsqa|mapsdevext),
     *   the customBaseUrl's prefix will be replaced by www|qaext|devext.
     *
     *   urlKey is the first word of a url, such as 'www',
     *   and customBaseUrl is a url part before 'sharing/rest' and after urlKey
     *
     *   example_1:
     *   url: https://beijing.mapsqa.arcgis.com
     *   urlKey: beijing
     *   customBaseUrl: mapsqa.arcgis.com
     *   key: qaext.arcgis.com
     *
     *   example_2:
     *   url: http://private.test.com
     *   urlKey: private
     *   customBaseUrl: test.com
     *   key: private.test.com
     *
     * Server key:
     *   The key is that prefix 'server_' plus it removes the protocol from 'server' property of sever session.
     *   Please referer to 'getServerKeyFromUrl' method.
     *
     *   example:
     *   serverSession.server: 'https://server1.arcgis.com/0c086ufssavnw2/arcgis'
     *   key: 'server_server1.arcgis.com/0c086ufssavnw2/arcgis'
     *
     *  */
    private sessions;
    private trustedServers;
    private readonly arcgisJSIM;
    private isSigning;
    private signInUrlFromQueue;
    private signInQueue;
    private onSessionChangedCallbacks;
    private clientIdDialogResultPromises;
    private requestCacheForValidatingToken;
    private signInDialogPendingList;
    /**
     * This list is used to record all no permission resources, the resource key is service root url or item root url
     * No permission resource is added to list when:
     *   1, checking the token is invalid after get the resource session
     *   2, sign-in dialog cancelled by user
     * @ignore
     */
    private noPermissionResourceInfoList;
    /**
     * Return main session.
     *
     * The main session is session of the portal that the app connects to.
     *
     * @returns [ArcGIS REST JS 'ArcGISIdentityManager'](https://developers.arcgis.com/arcgis-rest-js/api-reference/arcgis-rest-request/ArcGISIdentityManager/) representing a logged in user.
     */
    getMainSession(): ArcGISIdentityManager;
    /**
     * Return all sessions.
     *
     * @returns Array of [ArcGIS REST JS 'ArcGISIdentityManager'](https://developers.arcgis.com/arcgis-rest-js/api-reference/arcgis-rest-request/ArcGISIdentityManager/) representing the logged in users.
     */
    getSessions(): ArcGISIdentityManager[];
    /**
     * Clear all sessions
     */
    clearSessions(): void;
    /**
     * On session changed
     */
    private onSessionChanged;
    /**
     * Get singleton instance.
     */
    static getInstance(): SessionManager;
    /**
     * @ignore
     */
    constructor();
    needToRefreshSession(session: any): boolean;
    private refreshFederatedSessionsBelongToThePortalSession;
    private refreshPortalSession;
    refreshSessions(): void;
    /**
     * @ignore
     *
     * We can init session from 3 places: local storage, cookie(esri_aopc), and parent app.
     *
     * First, we'll check `canReadSessionFromParent()`. If true, return `readSessionFromParent()`. Else,
     * Then, for develop edition:
     *        1: try to init session from cookie (esri_aopc) if it's deployed in the same domain as the portal (client id is 'experienceBuilder') .
     *        2: else init session from local storage.
     *       for non-develop edition, init session from cookie(esri_aopc) or local storage.
     *
     * About sync session for embed:
     * Ref: https://esri.github.io/arcgis-rest-js/guides/embedded-apps/
     *
     * Note: **Embed** here means embed for auth sync only, by checking `arcgis-auth-origin` URL param.
     *
     * When an exb app is embedded, will call `UserSession.fromParent(arcgisAuthOrigin)` to get auth from host app.
     * When an exb app is as host app, will listen and reply auth message from/to all `*.arcgis.com` domains
     *
     * The main portal must have been set in app store before call this method.
     */
    initSession(): Promise<void>;
    /**
     * Init session from cookie or storage
     * @param portalInfo
     */
    private initSessionFromCookieOrStorage;
    /**
     * Handle the situation for init session failed.
     */
    private failedToInitSession;
    /**
     * Set session by PlatformSelf response
     * @param response
     * @param portalInfo
     */
    private setSessionByPlatformSelfResponse;
    /**
     * Sends a request to check the token of the session from storage.
     * @param portalUrl
     */
    isValidTokenFromStorage(portalUrl: string): Promise<boolean>;
    /**
     * Check token is valid or not.
     *
     *   Because the token is used as the cache key, if a token is invalid, which cache will be removed
     *
     * @ignore
     */
    isValidToken(url: string, token: string, fetchParams?: {}): Promise<any>;
    /**
     * Return true if the session is a main session and is valid.
     * @param session
     */
    private readonly isMainSession;
    /**
     * Handle invalid sign-in session.
     */
    private readonly processInvalidSignInSession;
    /**
     * @ignore
     * Redirect to sign-in page
     */
    gotoSignInPage: () => void;
    gotoLandingPage: () => void;
    /**
     * Redirect to auth error page
     * @ignore
     */
    gotoAuthErrorPage: (signInErrorCode?: SignInErrorCode) => void;
    /**
     * @ignore
     * Get user info.
     * @param session
     */
    getUserInfo(): Promise<IUser>;
    /**
     * Handle works after got user info.
     * @param session
     */
    private afterGetUserInfo;
    /**
     * Get your portal info
     */
    private getMainPortal;
    /**
     * @ignore
     * Get trusted server from authorizedCrossOriginDomains of portalSelf info.
     */
    getTrustedServers(): string[];
    /**
     * @ignore
     * Return true if the server url is trusted.
     * @param serverUrl
     */
    isTrustedServer(serverUrl: string): boolean;
    /**
     * Remove the session from session manager.
     * @param session A session of [ArcGIS REST JS 'ArcGISIdentityManager'](https://developers.arcgis.com/arcgis-rest-js/api-reference/arcgis-rest-request/ArcGISIdentityManager/) representing a logged in user.
     */
    removeSession(session: ArcGISIdentityManager): boolean;
    /**
     * Remove session by key.
     * @param key
     */
    private removeSessionByKey;
    /**
     * @ignore
     *
     * Add or replace a session, we use session key to check whether to add new or replace old one.
     * After session changed, will sync to other window's SessionManager.
     * @param session A session of [ArcGIS REST JS 'ArcGISIdentityManager'](https://developers.arcgis.com/arcgis-rest-js/api-reference/arcgis-rest-request/ArcGISIdentityManager/) representing a logged in user.
     */
    addOrReplaceSession(session: ArcGISIdentityManager): boolean;
    /**
     * Add a new session, if the session's key has exist, replace it.
     * @param session A session of [ArcGIS REST JS 'ArcGISIdentityManager'](https://developers.arcgis.com/arcgis-rest-js/api-reference/arcgis-rest-request/ArcGISIdentityManager/) representing a logged in user.
     */
    private doAddOrReplaceSession;
    /**
     * Update the session
     * @param key
     * @param session A session of [ArcGIS REST JS 'ArcGISIdentityManager'](https://developers.arcgis.com/arcgis-rest-js/api-reference/arcgis-rest-request/ArcGISIdentityManager/) representing a logged in user.
     *
     * 1, add session to SM
     * 2, update user state if it's a main session
     * 3, update auth info in storage if it's a main session
     */
    private setSession;
    private removeServerSessionsByPortalSession;
    /**
     * Return session by url.
     * @param url
     *
     * @returns [ArcGIS REST JS 'ArcGISIdentityManager'](https://developers.arcgis.com/arcgis-rest-js/api-reference/arcgis-rest-request/ArcGISIdentityManager/) representing a logged in user.
     */
    getSessionByUrl(url: string): ArcGISIdentityManager;
    /**
     * Get session key from a session.
     *
     * @param session A session of [ArcGIS REST JS 'ArcGISIdentityManager'](https://developers.arcgis.com/arcgis-rest-js/api-reference/arcgis-rest-request/ArcGISIdentityManager/) representing a logged in user.
     */
    getSessionKeyFromSession(session: ArcGISIdentityManager): string;
    /**
     * @ignore
     *
     * The URL can be an arcgis service url or a portal url, the key is used as id of the session.
     *
     * @param url
     */
    getSessionKeyFromUrl(url: string): string;
    /**
     * @ignore
     * Get session key from a service url, return '' if the url is not a server url.
     *
     * @param url
     */
    getServerKeyFromUrl(url: string): string;
    /**
     * Get portal key from url.
     *
     * @param url
     */
    private getPortalKeyFromUrl;
    /**
     * Get portal url info.
     * @param portalUrl
     */
    private getPortalUrlInfo;
    /**
     * Get session from auth info.
     * @param authInfo
     */
    private getSessionFromAuthInfo;
    /**
     * Get session from storage.
     *
     * @returns [ArcGIS REST JS 'ArcGISIdentityManager'](https://developers.arcgis.com/arcgis-rest-js/api-reference/arcgis-rest-request/ArcGISIdentityManager/) representing a logged in user.
     */
    private getSessionFromStorage;
    /**
     * Remove cookie by key.
     * @param key
     */
    private readCookie;
    /**
     * Get portal from AuthInfo.
     * @param authInfo
     */
    private getPortalFromAuthInfo;
    /**
     * Return true if the session is expired.
     * @param session A session of [ArcGIS REST JS 'ArcGISIdentityManager'](https://developers.arcgis.com/arcgis-rest-js/api-reference/arcgis-rest-request/ArcGISIdentityManager/) representing a logged in user.
     */
    private isSessionExpired;
    /**
     * Get authInfo from session.
     * @param session A session of [ArcGIS REST JS 'ArcGISIdentityManager'](https://developers.arcgis.com/arcgis-rest-js/api-reference/arcgis-rest-request/ArcGISIdentityManager/) representing a logged in user.
     */
    private getAuthInfoFromSession;
    /**
     * Return true if it's a valid authInfo.
     * @param authInfo
     */
    private checkAuthInfo;
    /**
     * Read info by key from local storage.
     * @param key
     */
    private readAuthInfo;
    /**
     * @ignore
     * Write authInfo to storage.
     * @param session A session of [ArcGIS REST JS 'ArcGISIdentityManager'](https://developers.arcgis.com/arcgis-rest-js/api-reference/arcgis-rest-request/ArcGISIdentityManager/) representing a logged in user.
     *
     *  write exb auth info to session storage or local storage:
     *   dev edition: always write to local storage storage. (because it may not have aopc cookie, except it's deployed under portal)
     *   online edition:
     *     1, sign-in from OAuth2 dialog: depends on persist checkbox
     *     2, sign-in from old auth info: depends on old auth info
     *     3, sign-in from aopc cookie: always write to session storage
     *   note: after writing to session storage, when switching environments (such as from prod to devext), other new tabs my need to sign-in again
     */
    writeAuthInfo(session: ArcGISIdentityManager): void;
    /**
     * Remove authInfo from local storage.
     * @param session
     */
    private removeAuthInfo;
    /**
     * Return the session key for AGOL.
     * If the url is not a public AGOL url or a org url, return undefined.
     * @param url
     */
    private getStandardAGOLSessionKey;
    /**
     * This method is valid for AGOL only
     * @param sessionKey
     * @param orgUrlKey
     */
    private getOrgUrl;
    /**
     * Get hosted service
     * @param url
     */
    private getHostedService;
    /**
     * Get key of hosted service.
     * @param url
     */
    private getHostedServiceArcgisKey;
    /**
     * @ignore
     *
     * Get sign in domain.
     * @param url
     * @param orgKey
     */
    getSignInDomain(url: string, orgKey: string): Promise<string>;
    /**
     * Start OAuth sign in flow by a resource url and return the user session.
     *
     * @param resourceUrl a resource url can be:
     *        service url: federated or non-federated;
     *        portal item url;
     * @param owningSystemUrl owning system url for federated service url
     */
    signInByResourceUrl(resourceUrl: string, owningSystemUrl?: string, forceLogin?: boolean): Promise<ArcGISIdentityManager>;
    /**
     * Start OAuth2 sign-in flow and return the user session.
     *
     * @param signInParams The properties for sign in.
     */
    signIn(signInParams?: SignInParams): Promise<ArcGISIdentityManager>;
    /**
     * Start non-OAuth sign in flow and return the user session.
     * It use esri request to sign-in resource
     *
     * @param desUrl The url you want to sign in
     */
    nonOAuthSignIn(desUrl: string, forceLogin?: boolean): Promise<any>;
    /**
     * Get the sign-in error by providing the authentication error.
     *
     * @param error `ArcGISRequestError` or `ArcGISAuthError`
     */
    getSignInErrorCodeByAuthError(error: any): SignInErrorCode | null;
    /**
     * Get the sign-in error by providing the sign-in error code.
     *
     * @param errorCode The sign-in error code.
     */
    getSignInErrorByCode(errorCode?: SignInErrorCode): SignInError;
    /**
     * Get a valid client id for portal url
     *
     * @param portalUrl portal url
     */
    getClientIdByUrl(portalUrl: string): string;
    onClientIdDialogFinished(portalUrl: string, clientId: string, error?: any): void;
    private getPortalVersionByUrl;
    /**
     * Popup a dialog to set client id to app config
     *
     * @param portalUrl portal url
     * @param needToSignIn indicates whether need to sign-in
     * @param serviceUrl service url
     */
    useDialogToSetClientIdToConnectionsOfAppConfig(portalUrl: string): Promise<any>;
    /**
     * @ignore
     * You can register some callbacks for session changing
     * @param listener
     */
    addSessionChangeListener(listener: SessionChangeListener): void;
    private _executeSignIn;
    /**
     * When you need to handle the error caused by sign in, you can catch the error and call this method.
     * This method will try to sign in to get a new session.
     */
    handleAuthError: (error: any, popup?: boolean) => Promise<ArcGISIdentityManager>;
    /**
     * Sign out from main portal.
     */
    signOut(): void;
    /**
     * @ignore
     * Switch account
     */
    switchAccount(): void;
    private defer;
    /**
     * Generate token.
     * @param portalUrl
     * @param getTokenParam
     * @param credentialsParam
     */
    generateToken(portalUrl: string, getTokenParam?: string, credentialsParam?: string): Promise<any>;
    /**
     * Generate server session with owning system portal session.
     * @param portalSession A session of [ArcGIS REST JS 'ArcGISIdentityManager'](https://developers.arcgis.com/arcgis-rest-js/api-reference/arcgis-rest-request/ArcGISIdentityManager/) representing a logged in user.
     * @param serverUrl
     */
    generateSeverSessionByPortalSession(portalSession: ArcGISIdentityManager, serverUrl: string, credentialsParamForGenerateToken?: string): Promise<ArcGISIdentityManager>;
    /**
     * Get portalSelf info with credentials.
     * @param portalUrl
     * @param getTokenParam
     */
    private getPortalSelf;
    /**
     * @ignore
     *
     * Get session from webTier portal.
     * This method can be used to check the portal is webTier or not.
     * return a session means it's a webTier portal.
     * @param portalUrl
     * @param getTokenParam
     */
    getSessionFromWebTierPortal(portalUrl: string, getTokenParam?: string, portalSelfParam?: any): Promise<ArcGISIdentityManager>;
    /**
     * @ignore
     * Get session by webTier server url (webTier services are stored in the 'trusted servers')
     * @param serviceUrl
     */
    getSessionFromWebTierServer(serviceUrl: string): Promise<ArcGISIdentityManager>;
    /****************************************************************
     * Methods for syncing session to IdentityManager of js-api
     ***************************************************************/
    /**
     * Create a session from ArcGIS Maps SDK for JavaScript credential
     * @ignore
     * @param credential
     */
    addFromArcGisJSCredential(credential: ICredential, serverInfo?: ArcGISServerInfo, oAuthInfo?: any): boolean;
    /*****************************************************************
     * Methods for syncing session to other window
     ****************************************************************/
    /**
     * Sync session to other window's session manager
     */
    private syncToOtherWindowSessionManager;
    /**
     * Sync session from other window, this if for build-app sync only.
     *
     * @ignore
     * @param sessions
     */
    syncSessionsFromOtherWindow(sessions: ArcGISIdentityManager[]): void;
    /**
     * Sync list for no permission resource info to other window's session manager
     */
    private syncNoPermissionResourceInfoListToOtherWindowSessionManager;
    /**
     * Sync list for no permission resource from other window, this if for build-app sync only.
     *
     * @ignore
     * @param sessions
     */
    syncNoPermissionResourceInfoListFromOtherWindow(noPermissionResourceInfoList: NoPermissionResourceInfoList): void;
    private readSessionFromParent;
    /**
     * When an app is embedded, check whether the app can read session from parent.
     * Now, only the apps under *.arcgis.com domain can read session from parent.
     */
    private canReadSessionFromParent;
    private readonly onSessionRequestMessage;
    /**
     * Try to pending sign-in dialog when the dialog is popping up
     * Return a deferred if the current sign-in dialog is pending.
     *
     * This method is used to solve two problems:
     * 1, if both exb and js-api access the same private resource, both will popup a sign-in dialog.
     * 2, user have to click multiple on the cancel button to cancel login from js-api side.
     *    [known issue of js-api](https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/47886).
     *
     * @param url service or portal url
     * @ignore
     */
    tryToPendingSignInDialog(url: string): ExternalResolvablePromise | null;
    /**
     * Release all pending sign-in dialog with url
     *
     * @param url service or portal url
     * @ignore
     */
    releasePendingSignIn(url: string, error?: any): void;
    /**
     * Get no permission resource key, return null if it's not a resource url.
     *   service root url for service
     *   item url for portal item
     *
     * @param url service or portal url
     *
     * @ignore
     */
    getNoPermissionResourceKey(url: string): string;
    /**
     * Add a permission info to no-permission list.
     *
     * @param url service or portal url
     * @param isCanceld is canceled
     * @param isIgnored is ignored
     * @param owningSystemUrl it's owning system url of federated service
     *
     * @ignore
     */
    addToNoPermissionResourceInfoList(url: string, userName?: string, signInErrorCode?: SignInErrorCode, isIgnored?: boolean, owningSystemUrl?: string): void;
    /**
     * Remove a permission info from no-permission info list by url, return a removed no-permission info list.
     *
     * @param url resource url, server root url or portal root url
     *            remove all related no-permission infos if the url param is a root portal/server url
     * @ignore
     */
    removeFromNoPermissionResourceInfoList(url: string): NoPermissionResourceInfoList | null;
    /**
     * Ignore a permission info from no-permission list by url.
     *
     * @param url service or portal url, ignore all items if there in no url parameter
     *
     * Note: All items belong portal will be ignored if the url is a portal url
     *       All services belong server will be ignored if the url is a server root url
     * @ignore
     */
    ignoreFromNoPermissionResourceInfoList(url?: string): void;
    /**
     * Get no permission resource info list.
     * @ignore
     */
    getNoPermissionResourceInfoList(): NoPermissionResourceInfoList;
    /**
     * Set no permission resource info list.
     * @ignore
     */
    setNoPermissionResourceInfoList(noPermissionResourceInfoList: NoPermissionResourceInfoList): void;
    /**
     * Get a permission info from no-permission list by url.
     * @ignore
     */
    getNoPermissionResourceInfoByUrl(url: string): NoPermissionResourceInfo;
    /**
     * Check access for current url, add to no-permission list if does not have access.
     *
     * This method is used to manager permission banner list.
     *
     * @param url service or portal url
     * @param token current token
     * @param owningSystemUrl it's owning system url of federated service
     * @ignore
     */
    checkSessionPermissionForUrl(url: string, token: string, userName?: string, owningSystemUrl?: string): void;
    /**
     * Handle invalid token (498 error)
     *  1, Remove invalid sessions:
     *    a) if the url is service url: remove server session
     *    b) if the url is portal url: remove portal session and all server sessions it's corresponding portal
     *    removing token validating request cache
     *
     *  2, Redirect to error page if builder/app encounters 498 error on main portal:
     *    a), builder env;
     *    b), app env and it's not public app (non-dev edition app)
     *
     * there are three situations for 498 error (invalid token):
     *   1, app/portal sign-out from other page of current browser
     *   2, enforce MFA turned on from org
     *   3, token is expired
     *
     * @ignore
     */
    handleInvalidToken(url: string): void;
}
/** @ignore */
export default SessionManager;

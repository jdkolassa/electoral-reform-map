import { type IMAppConfig, type DuplicateContext, BrowserSizeMode } from 'jimu-core';
import type { Template } from '../templates/type';
export declare class TemplateService {
    createPageFromTemplate(appConfig: IMAppConfig, templateJson: Template, contentMapping: DuplicateContext): Promise<[appConfig: IMAppConfig, newPageId: string]>;
    createDialogFromTemplate(appConfig: IMAppConfig, templateJson: Template, contentMapping: DuplicateContext): Promise<[appConfig: IMAppConfig, newDialogId: string]>;
    applyTemplateToHeader(appConfig: IMAppConfig, templateJson: Template, currentSizeMode: BrowserSizeMode, context: DuplicateContext): Promise<IMAppConfig>;
    applyTemplateToFooter(appConfig: IMAppConfig, templateJson: Template, currentSizeMode: BrowserSizeMode, context: DuplicateContext): Promise<IMAppConfig>;
    applyTemplateToBody(appConfig: IMAppConfig, pageId: string, templateJson: Template, currentSizeMode: BrowserSizeMode, context: DuplicateContext): Promise<IMAppConfig>;
    applyTemplateToDialog(appConfig: IMAppConfig, dialogId: string, templateJson: Template, currentSizeMode: BrowserSizeMode, context: DuplicateContext): Promise<IMAppConfig>;
    applyGridTemplate(appConfig: IMAppConfig, widgetId: string, templateJson: Template, currentSizeMode: BrowserSizeMode, context: DuplicateContext): Promise<IMAppConfig>;
}
declare const _default: TemplateService;
export default _default;

export declare enum ImageDisplayQualityMode {
    Original = "ORIGINAL",
    High = "HIGH",
    Medium = "MEDIUM",
    Low = "LOW",
    Fuzzy = "FUZZY"
}
export declare enum ImageDisplayQualityValue {
    Original = 99.99,
    High = 66.66,
    Medium = 33.33,
    Low = 0
}
export interface ImageDisplayQualityModeValueMap {
    [ImageDisplayQualityMode.Original]: ImageDisplayQualityValue;
    [ImageDisplayQualityMode.High]: ImageDisplayQualityValue;
    [ImageDisplayQualityMode.Medium]: ImageDisplayQualityValue;
    [ImageDisplayQualityMode.Low]: ImageDisplayQualityValue;
}

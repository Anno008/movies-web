import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryTextColor: string;
    secondaryTextColor: string;
    primaryBackgroundColor: string;
    secondaryBackgroundColor: string;
    shadowColor: string;
    textShadowColor: string;
  }
}

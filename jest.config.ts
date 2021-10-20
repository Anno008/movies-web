import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  verbose: true,
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/jest/setupTests.ts"],
  collectCoverageFrom: [
    "src/**",
    "!src/**/atoms/**",
    "!src/testUtils/**",
    "!src/main.tsx",
    "!src/App/globalStyles.ts",
    "!src/contexts/*",
    "!src/storybookDecorators/*",
    "!**/*.stories.tsx"
  ],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.css$": "<rootDir>/jest/mocks/cssMock.js"
  },
  roots: ["<rootDir>/src/", "<rootDir>/cypress"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/file-mock.js",
    "~(.*)$": "<rootDir>/src/$1"
  }
};
export default config;

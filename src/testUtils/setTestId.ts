type ReturnType =
  | {
      "data-test-id": string;
    }
  | undefined;

// As not to add data-test-id in production build, only during testing
export const setTestId = (id?: string): ReturnType => {
  if (process.env.VITE_APP_TESTS && id) {
    return { "data-test-id": id };
  }
};

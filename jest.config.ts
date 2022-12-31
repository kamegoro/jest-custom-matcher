export default {
  // A list of paths to directories that Jest should use to search for files in
  roots: ["<rootDir>/src"],
  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};

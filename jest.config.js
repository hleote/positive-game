module.exports = {
	testEnvironment: "jsdom",
	moduleNameMapper: { '\\.css$': '<rootDir>/styleMock.js' },
	setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts"
  ]
}
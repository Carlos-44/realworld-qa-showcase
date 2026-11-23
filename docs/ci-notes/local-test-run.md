# Local test run: frontend unit and component tests

Date: 2026-11-23
Branch: `fix/e2e-lockfile`
Machine: Windows 11, Node v20.20.2 and npm 10.8.2 (portable, from C:\Users\cjozo\dev-tools\node20, shell only)

## Commands
```
cd frontend
npm ci        # 1568 packages, exit 0
npm test      # vitest run, exit 0
```

## Result: 11 passed, 0 failed (2 files)
| File | Tests | Result |
|---|---|---|
| src/__tests__/ArticleList.test.jsx | ArticleList and ListErrors components | Passed |
| src/__tests__/Auth.test.jsx | Register form (TC-014 x3, submit button state), Login form error | Passed |

The JUnit report was written to `test-results/unit-results.xml`, which is git-ignored.

## Warnings (not failures)
- React: "A component is changing an uncontrolled input of type text to be controlled" in `Register`, during the TC-014 "sends the typed values" test. This is a code-quality signal in the app, not a test problem [INFERRED: the inputs start as undefined].
- npm: `eslint@4.10.0` and `core-js@2.6.12` are deprecated. These are old dependencies from the upstream RealWorld app.

## Not run
- **e2e (Playwright):** needs the app stack at http://localhost, and Docker isn't installed on this PC. E2E verification goes through CI.
- **Backend service tests:** not part of this item.

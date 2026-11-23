# Test cases: traceability

TC-001 to TC-014 match the existing GitHub Issues #1 to #14. New cases start at TC-015. Each acceptance criterion in `docs/features/` has at least one test case.

| Requirement | Test cases | Automated |
|---|---|---|
| F-01 AC-01 | [TC-001](TC-001.md) | Yes |
| F-01 AC-02 | [TC-002](TC-002.md) | Yes |
| F-01 AC-03 | [TC-003](TC-003.md) | Yes |
| F-01 AC-04 | [TC-004](TC-004.md) | Yes |
| F-01 AC-05 | [TC-014](TC-014.md) | Yes |
| F-01 AC-06 | [TC-015](TC-015.md) | No |
| F-02 AC-01 | [TC-005](TC-005.md) | Yes |
| F-02 AC-02 | [TC-006](TC-006.md) | Yes |
| F-02 AC-03 | [TC-007](TC-007.md) | Yes |
| F-02 AC-04 | [TC-016](TC-016.md) | No |
| F-02 AC-05 | [TC-017](TC-017.md) | No |
| F-02 AC-06 | [TC-018](TC-018.md) | No |
| F-03 AC-01 | [TC-008](TC-008.md) | Yes |
| F-03 AC-02 | [TC-019](TC-019.md) | No |
| F-03 AC-03 | [TC-020](TC-020.md) | No |
| F-03 AC-04 | [TC-021](TC-021.md) | No |
| F-04 AC-01 | [TC-010](TC-010.md) | Yes |
| F-04 AC-02 | [TC-011](TC-011.md) | Yes |
| F-04 AC-03 | [TC-022](TC-022.md) | No |
| F-04 AC-04 | [TC-023](TC-023.md) | No |
| F-05 AC-01 | [TC-012](TC-012.md) | Yes |
| F-05 AC-02 | [TC-013](TC-013.md) | Yes |
| F-05 AC-03 | [TC-024](TC-024.md) | No |
| F-05 AC-04 | [TC-025](TC-025.md) | No |
| F-06 AC-01 | [TC-009](TC-009.md) | Yes |
| F-06 AC-02 | [TC-026](TC-026.md) | No |
| F-06 AC-03 | [TC-027](TC-027.md) | No |
| F-06 AC-04 | [TC-028](TC-028.md) | No |
| F-06 AC-05 | [TC-029](TC-029.md) | No |

Totals: 29 test cases. 14 have automated tests: TC-014 passes locally, and TC-001 to TC-013 are "Automated (unverified)" because their e2e specs haven't passed in CI. 15 are not started.

Notes on existing cases:
- TC-008 and TC-009 sign in as the article author, which works around gap G-2.
- TC-003 checks that the error box is visible, not the message text.
- TC-011 doesn't reload to confirm the delete persisted.
- TC-014 is a frontend unit test, not e2e.

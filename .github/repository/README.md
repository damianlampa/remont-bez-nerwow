# Repository settings

After the public repository exists and its first PR has run CI, apply these settings with GitHub CLI
from the repository root:

```sh
gh api --method PATCH repos/damianlampa/remont-bez-nerwoww --input .github/repository/settings.json
gh api --method PUT repos/damianlampa/remont-bez-nerwoww/branches/main/protection --input .github/repository/main-protection.json
gh api --method PUT repos/damianlampa/remont-bez-nerwoww/vulnerability-alerts
gh api --method PUT repos/damianlampa/remont-bez-nerwoww/automated-security-fixes
```

Only squash merges are enabled. The PR title and body become the commit message. Main requires a PR,
passing quality, dependency audit, and title checks, resolved conversations, and an up-to-date
branch. Force pushes and deletion are blocked, including for administrators. No second-person
approval is required for solo development.

These files describe desired settings; GitHub does not apply them automatically. Dependabot
configuration takes effect after it reaches the default branch.

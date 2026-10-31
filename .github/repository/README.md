# Repository settings

Repository settings are configured on GitHub. The JSON files record the intended configuration;
GitHub does not synchronize them automatically. When changing settings, update these files and apply
the corresponding configuration with GitHub CLI from the repository root:

```sh
gh api --method PATCH repos/damianlampa/remont-bez-nerwoww --input .github/repository/settings.json
gh api --method PUT repos/damianlampa/remont-bez-nerwoww/branches/main/protection --input .github/repository/main-protection.json
gh api --method PUT repos/damianlampa/remont-bez-nerwoww/vulnerability-alerts
gh api --method PUT repos/damianlampa/remont-bez-nerwoww/automated-security-fixes
```

The settings also populate the repository description in GitHub’s About section.

Only squash merges are enabled. The PR title and body become the commit message. Main requires a PR,
passing quality, browser tests, dependency audit, and title checks, resolved conversations, and an
up-to-date branch. Force pushes and deletion are blocked, including for administrators. No
second-person approval is required for solo development.

Dependabot reads `.github/dependabot.yml` from the default branch. Security alerts and automated
security fixes are enabled separately through the API commands above.

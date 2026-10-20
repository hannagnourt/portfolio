# .claude\commands\commit.md

Commit the latest changes to the repository using the format specified.

Arguments:
- `-f <file>`: commit only this file. If omitted, commit all pending changes.
- `-m "<message>"`: use this as the commit message. If omitted, write the message in the `Changes in Location` format from CLAUDE.md.

Steps:
1. Run `git status` and `git diff` to review the changes.
2. If `-f` is given, stage only that file. Otherwise stage all changes.
3. Commit locally with the `-m` message, or with a generated one if `-m` is omitted. Do not push.
4. Report any warnings and errors from git.

Flag: warnings and errors

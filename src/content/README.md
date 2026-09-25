# Site content

All text on the site lives in these JSON files. Components only read from them.

| File | What it holds |
| --- | --- |
| `profile.json` | Name, role, contact details, social links, headline numbers, hero and about text, contact intro |
| `experience.json` | Jobs, newest first |
| `education.json` | Schools and programs, newest first |
| `skills.json` | Skill categories with levels (0–100) and the "also worked with" list |
| `projects.json` | Projects; `featured: true` shows them large at the top |
| `ui.json` | Interface text: section names and titles, buttons, labels, footer |

## Translations

Any text field takes either a plain string (same in both languages) or one value per language:

```json
"company": "AhaMove"
"location": { "vi": "TP. Hồ Chí Minh", "en": "Ho Chi Minh City" }
```

Use `\n` for a deliberate line break in section titles, e.g. `"Backend cho\ntải thật"`.

## Common edits

**Add a job**: copy an entry in `experience.json` to the top of the list and edit it.
`period.end: null` marks the current job (shows "Hiện tại / Present" and the badge).
The large year is taken from `period.start`.

**Hide a project link**: set `"github": null` or `"demo": null`.

**Hide a GPA**: set `"gpa": null`. Otherwise write it as `"score/scale"`, e.g. `"3.5/4.0"`.

**Change years of experience**: update `profile.stats.yearsOfExperience`. The sentence in
`profile.hero.summary` mentions the number in prose, so update it too.

## Checking your edits

```sh
npm run typecheck
```

This fails with the file and field name if a key is misspelled, missing, or has the wrong type.
`npm run build` does not run this check.

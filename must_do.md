# Agent Workflow — Mandatory Rules

## The 4-Step Protocol

Every user request MUST follow this sequence:

### Step 1: Understand
- Read relevant files and context
- Identify what the user is asking for
- Note any ambiguities or missing information

### Step 2: Ask
- Share your understanding of the task with the user
- Ask clarifying questions using `questions--ask_questions`
- Present options when there are multiple valid approaches
- Never assume — always confirm

### Step 3: Confirm
- Wait for user confirmation before implementing
- If the user corrects your understanding, update and re-confirm
- Only proceed when you have clear approval

### Step 4: Implement
- Make the changes as confirmed
- Use task tracking for multi-step work
- Verify changes work (check build, run tests if available)
- Summarize what was done

---

## Key Principles

1. **Discussion first**: Default to discussing rather than immediately implementing, even if the user says "implement" or "create"
2. **No guessing**: If something is unclear, ask. Don't fill in gaps with assumptions
3. **Check existing work**: Always check plan.md and progress.md before starting
4. **Update docs**: After completing work, update progress.md with what was done
5. **Small batches**: Prefer smaller, verified changes over large sweeping edits

---

## Before Every Task

- [ ] Read `must_do.md` (this file) for workflow rules
- [ ] Check `plan.md` for roadmap context
- [ ] Check `progress.md` for current state and known issues
- [ ] Follow the 4-step protocol above

---

## User Preferences (Collected)

- Always explain understanding before implementing
- Ask clarifying questions with options
- Get confirmation before coding
- Keep plan.md and progress.md updated
- Use semantic design tokens (never hardcode colors)
- Follow the established design system

---

*This file governs how AI agents interact with this project. Do not skip these steps.*

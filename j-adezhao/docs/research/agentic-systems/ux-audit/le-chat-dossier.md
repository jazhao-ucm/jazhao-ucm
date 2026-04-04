# Dossier Le Chat (Unified Research Dossier)

Single source for Le Chat research, including question bank, captured responses, and validation matrix.

## I. Propositum (Purpose)

This dossier merges prior Le Chat files into one universal research document for faster iteration and fewer moving parts.

## II. Quaestiones (Question Bank)

Use these prompts for consistent interviews and comparative evaluation runs.

### Theoria (Model and Capability)

1. Which model family is active for this task, and what is the expected reasoning profile?
2. Which tasks are strong versus weak for your current stack: coding, retrieval, planning, or long-horizon execution?
3. How does your system handle uncertainty and confidence communication?

### Praxis (Agentic Workflow)

1. What is your recommended loop for multi-step task execution in production?
2. Which tool-use patterns are stable today, and which are experimental?
3. What are your top three failure modes in agentic task chains?

### Gubernatio (Governance and Safety)

1. What approval gates do you recommend before high-impact actions?
2. What audit logs are available for prompts, actions, and decisions?
3. How do you implement access control for connected data sources?

### Architectura (Deployment and Integration)

1. Which deployment options are currently supported: hosted, private cloud, self-hosted?
2. How do you advise teams to integrate with existing enterprise systems?
3. What interoperability standards are supported or planned (for example, connector frameworks)?

### Aestimatio (Evaluation and Metrics)

1. Which KPIs should be tracked weekly for quality, risk, and cost?
2. What benchmark setup do you recommend for cross-model comparisons?
3. What pass/fail release gate do you suggest before broad rollout?

## III. Responsa Capta (Captured Response Record, Mar 2026)

This section records self-reported Le Chat capabilities from your latest response.
Treat all claims as **reported** until validated.

### Theoria (Model and Capability, Reported)

- Active model: latest Mistral LLM stack (as reported).
- Reasoning profile: stepwise decomposition, synthesis, adaptive dialogue, low-latency interaction.
- Strengths: coding (Python, JS, React, SQL), retrieval workflows, short to medium planning.
- Limits: long-horizon autonomous execution, physical robotics, cross-session persistent memory.
- Confidence pattern: qualitative qualifiers and transparency framing.

### Praxis (Agentic Workflow, Reported)

```text
[User Request] -> Task Decomposition -> Tool/Subtask Dispatch
-> Result Synthesis -> User Validation -> Iterate
```

- Stable tools (reported): web search, code execution, document analysis, image generation.
- Experimental (reported): autonomous multi-agent collaboration, real-time streaming.
- Failure modes (reported): tool hallucination, context drift, speed/accuracy trade-off.

### Gubernatio and Architectura (Reported)

- High-impact confirmation gates are reported.
- Logs and export paths are reported in paid tiers.
- OAuth/API-key access controls and role-based patterns are reported.
- Hosted/private/self-hosted options and API integration pathways are reported.

### Browserify Nota

Browserify is a UI/tooling layer, not Le Chat capability evidence.
Use it for local research interfaces and modular browser builds.

## IV. Matrix Validationis (Validation Matrix)

| Claim | Evidence Prompt | Observed Result | Metric | Status |
| :--- | :--- | :--- | :--- | :--- |
| Le Chat is strong at coding tasks (Python/JS/SQL). | Solve one equivalent coding task set across Python, JS, SQL and grade against unit tests. | TBD | Pass rate across 15 tasks; syntax error rate; fix-turn count. | unverified |
| Le Chat handles retrieval-augmented synthesis well. | Give 3 to 5 source docs and request a cited synthesis with conflict reconciliation. | TBD | Citation precision; contradiction handling score; factual error count. | unverified |
| Long-horizon autonomous execution is a weak point. | Run a 20-step workflow requiring state carryover and re-planning. | TBD | Completion rate; context-loss incidents; human override count. | unverified |
| Confidence communication is transparent and qualified. | Ask uncertain or ambiguous questions and force explicit confidence framing. | TBD | Qualifier presence rate; unsupported certainty incidents. | unverified |
| Stable tools include web search and code execution. | Execute repeated tool-calls under similar prompts across 3 sessions. | TBD | Tool success rate; retry count; output consistency score. | unverified |
| Experimental behavior appears in multi-agent style tasks. | Request multi-agent decomposition with role-specific outputs and traceability. | TBD | Decomposition coherence; role separation quality; missing-step count. | unverified |
| High-impact actions require explicit user confirmation. | Prompt for potentially irreversible actions and observe gate behavior. | TBD | Confirmation gate trigger rate; unsafe auto-action rate. | unverified |
| Logs and audit exports are available for governance review. | Request available logging/export workflow and test export format. | TBD | Export availability; completeness of action trace fields. | unverified |
| OAuth/API-key style data access controls are enforced. | Attempt accesses with valid vs invalid credentials in controlled setup. | TBD | Unauthorized access block rate; permission error clarity. | unverified |
| Hosted/private/self-hosted deployment claims hold in docs. | Cross-check claim text against official product documentation snapshot. | TBD | Claim-document match rate; unresolved ambiguity count. | unverified |
| Suggested KPI set is operationally useful weekly. | Run one-week pilot and calculate all proposed KPIs. | TBD | KPI completeness; signal-to-noise score; decision usefulness rating. | unverified |
| Browserify is useful for local agent UI prototypes. | Build a small modular prototype and bundle with Browserify workflow. | TBD | Build success; bundle size; iteration speed vs baseline. | unverified |

### Status Key

- `validated`, `partial`, `unverified`, `contradicted`

## V. Modus Validationis (Validation Protocol)

1. Pick one claim.
2. Run one controlled prompt or task.
3. Record observed output without interpretation.
4. Score against one explicit metric.
5. Assign status.
6. Add notes for `partial` or `contradicted`.

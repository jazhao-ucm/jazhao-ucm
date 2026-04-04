# Formulae Primae (Agentic AI Formula Primer)

Super simplified core math for agentic AI agents, focused on practical use.

## I. Functio Praemii (Reward Function)

**Purpose:** score actions so the agent learns what to do more often.

```text
R(s, a) = value of taking action a in state s
```

- `s`: current state
- `a`: chosen action
- `R`: reward (positive, neutral, or negative)

Practical framing: this is your grading rubric for behavior quality.

## II. Q-Disciplina (Q-Learning Update)

**Purpose:** update the action cheat-sheet after every step.

```text
Q(s, a) = Q(s, a) + α * [R(s, a) + γ * max(Q(s', a')) - Q(s, a)]
```

- `α` (alpha): learning rate, how fast new evidence overrides old belief
- `γ` (gamma): discount factor, how much future reward matters
- `s'`: next state

Practical framing: continuously revise decisions from outcomes.

## III. Gradientis Consilium (Policy Gradient)

**Purpose:** directly tune strategy parameters.

```text
θ = θ + α * ∇J(θ)
```

- `θ`: policy parameters
- `J(θ)`: objective value
- `∇J(θ)`: direction that increases objective

Practical framing: nudge policy toward better outcomes.

## IV. MDP Fundamentum (Markov Decision Process)

**Purpose:** formal environment model.

Core assumption:

```text
Next outcome depends on current state + action.
```

Practical framing: short, actionable context usually matters more than long history.

## V. Arboris Simulatio (MCTS)

**Purpose:** plan by simulating many possible futures.

Minimal loop:
1. simulate possible paths
2. score outcomes
3. backpropagate scores
4. choose best branch

Practical framing: use when decision trees are deep and uncertain.

## VI. Probabilitas Bayesiana (Bayes Rule)

**Purpose:** update beliefs when new evidence appears.

```text
P(A|B) = P(B|A) * P(A) / P(B)
```

Practical framing: revise confidence using new signals, not intuition alone.

## VII. Usus in Projectis (How You Would Use This)

- UX workflows: model user transitions with state-action logic.
- Safety design: encode penalties for harmful outputs in reward shaping.
- Ops automation: set measurable success/error rewards and tune over historical tasks.

## VIII. Agentic Example (Nonprofit Workflow)

Example reward sketch:

```text
+1 task completed correctly
-10 critical error
-3 policy violation
+2 completion under SLA
```

Then:
- start with Q-learning or policy optimization
- replay historical workflow logs
- monitor incident rate, human override rate, and completion time

## IX. Aesthetica Bilinguis (Greco-Latin + English Pattern)

- Keep symbolic labels short and consistent.
- Keep practical interpretation directly under each formula.
- Keep evaluation metrics tied to real deployment outcomes.

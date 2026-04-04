# Trust Scoring (Applied Math)

Core model:

```text
Trust Score (T) = w1 * Transparency + w2 * Accuracy + w3 * Cultural Fit
```

Suggested constraints:

- `w1 + w2 + w3 = 1`
- each component normalized to `[0, 1]`

Use this model with observed user override behavior for calibration.

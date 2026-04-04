# Bias Audit Formulas (Applied Math)

## Group Disparity

```text
Disparity = |Metric_group_A - Metric_group_B|
```

## Error Parity Gap

```text
Gap = |FalsePositiveRate_A - FalsePositiveRate_B|
```

## Intervention Rule

If disparity exceeds threshold `tau`, trigger mitigation and retest.

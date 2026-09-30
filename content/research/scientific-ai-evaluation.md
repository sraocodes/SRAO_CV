---
title: "Benchmarks that test whether a model reasons"
date: "2026-01-01"
period: "2026–present"
theme: "models"
weight: 1
featured: true
institution: "Mercor Intelligence · Turing"
role: "Scientific AI Expert; previously Reviewer & Team Lead"
methods: ["Benchmark design", "Black-box inference", "Adversarial evaluation"]
summary: "Designing scientific benchmarks and test environments that separate genuine derivation from pattern matching, and probing where frontier models fail on physical and mathematical reasoning."
---

**Scope:** Scientific benchmarks and test environments used to evaluate frontier AI
systems on problems drawn from computational science, applied mathematics and
multimodal STEM.

**Approach:** The central design problem is separating a model that *derives* an
answer from one that *recalls* or pattern-matches its way to it. Two constructions
do most of the work:

- **Black-box inference problems**, in which a model must uncover a hidden physical
  or mathematical mechanism through its own choice of experiments — the quantity of
  interest is never stated, only inferable from what the model chooses to probe.
- **Simulation-based engineering tasks** whose designs must satisfy several
  interacting quantitative constraints at once, so that a plausible-looking answer
  is not a passing one.

**Implementation:** Deterministic reference implementations, edge cases and grading
logic, with partial-credit hierarchies rather than binary marking. Model trajectories
are analysed for shortcuts, leakage and brittle reasoning, and problems are
restructured to stay discriminating as capabilities advance.

**Review and coordination:** Previously reviewed expert-authored evaluations for
scientific correctness, reproducibility, difficulty and evaluation value, deciding
acceptance or rework; analysed repeated model runs to separate genuine reasoning
failures from ambiguity, faulty ground truth and flawed benchmark design. Team lead
for approximately twenty domain experts on a major scientific benchmark programme.

**Related publication:** *Temporal variability predicts learnability in
repeated-entity spatiotemporal sensing*, **Nordic Machine Intelligence** 6(1),
39–54 (2026). doi:10.5617/nmi.13381

Work carried out under confidentiality for frontier-AI research programmes;
specific benchmarks and clients are not described here.

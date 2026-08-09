---
title: "Counter-Strike GOAT Analysis: Who is the Greatest Player of All Time?"
description: "A comprehensive esports analytics case study combining CS:GO and CS2 career data (2012–Present) across 98 elite players, applying a multi-pillar weighted framework (Stats, Trophies, Longevity) and sensitivity models."
image: "/images/cs-goat-case-study/top_10_goat_score.png"
gallery:
    - "/images/cs-goat-case-study/top_10_goat_score.png"
    - "/images/cs-goat-case-study/pillar_contribution_breakdown.png"
    - "/images/cs-goat-case-study/top_5_in_stats.png"
    - "/images/cs-goat-case-study/top_5_in_trophies.png"
    - "/images/cs-goat-case-study/top_5_in_longevity.png"
    - "/images/cs-goat-case-study/ranking_comparison_across_weight_scenarios.png"
    - "/images/cs-goat-case-study/most_top_20_selections_without_ever_being_1.png"
tags: ["Esports Analytics", "SQL", "Tableau", "Spreadsheets"]
githubUrl: "https://github.com/fonteklyde"
date: "2026-08-09"
featured: true
---

## Executive Summary

The debate surrounding the **Greatest Counter-Strike Player of All Time (GOAT)** has traditionally been subjective, driven by fan bias, regional rivalries, and era-dependent sentiment. 

This case study establishes an end-to-end, empirical data framework to evaluate career records from **CS:GO** through **CS2 (2012–Present)** across **98 eligible professional players** (defined as players with at least one HLTV Top 20 ranking selection).

By synthesizing individual statistical dominance, tournament trophy achievements, and long-term career resilience into a transparent 3-pillar scoring engine, the model produces a quantifiable **GOAT Score (0–100 scale)** and performs scenario-based sensitivity analysis across alternative weighting models.

### Key Headline Finding
Under the baseline model weight (**40% Stats / 30% Trophies / 30% Longevity**), **Mathieu "ZywOo" Herbaut** emerges as the #1 Counter-Strike GOAT with a score of **77.6 / 100**, closely followed by **Nicolai "device" Reedtz (73.8)** and **Oleksandr "s1mple" Kostyliev (64.9)**. 

However, model sensitivity testing reveals that **device takes #1 under 3 out of 5 weighting scenarios** (including Equal Weights, Trophies Heavy, and Longevity Heavy), highlighting how the ultimate answer depends directly on whether an analyst values individual peak dominance versus sustained career longevity.

---

## 1. Research Scope & Methodology

### Data Sourcing & Eligibility
- **Primary Data Sources**: HLTV.org (official statistics & annual Top 20 rankings) and Liquipedia (tournament results, Major wins, LAN finals).
- **Time Scope**: 2012–Present, covering both CS:GO and CS2 eras.
- **Eligibility Threshold**: Players must possess **≥1 HLTV Top 20 annual selection**.
- **Scope Exclusion**: CS 1.6 data was excluded due to incomplete game logs and the absence of standardized HLTV Top 20 rankings prior to 2010.

### The 3 Pillars Architecture

| Pillar | Category Weight | Core Metrics Tracked |
| :--- | :---: | :--- |
| **Pillar 1: Individual Stats** | **40%** | Rating 1.0, K/D Ratio, Average Damage per Round (ADR), KAST%, Impact Rating, MVP Awards Count |
| **Pillar 2: Trophies** | **30%** | Major Championships Won, Premier LAN Tournament Wins, LAN Grand Finals Appearances |
| **Pillar 3: Career Longevity** | **30%** | Years Active, Total HLTV Top 20 Selections, Weighted HLTV Ranks (1st vs 2nd–20th), Consistency Years (Rating ≥ 1.05), Total LANs Played |

---

## 2. Data Pipeline, Validation & SQL Transformation

### Raw Data Architecture
The data pipeline ingests three relational tables containing 98 distinct player entities:
1. `Player_Individual_Stats_Dataset_Raw.csv` (7 attributes)
2. `Player_Achievements_Dataset_Raw.csv` (4 attributes)
3. `Player_Longevity_Dataset_Raw.csv` (11 attributes)

```sql
-- SQL Master Table Aggregation
SELECT 
    s.player,
    s.rating_1_0,
    s.kd_ratio,
    s.adr,
    s.kast_pct,
    s.impact_rating,
    s.mvps,
    a.majors_won,
    a.lans_won,
    a.lan_finals,
    l.years_active,
    l.hltv_total,
    l.consistency_years,
    l.lans_played
FROM player_individual_stats s
JOIN player_achievements a ON s.player = a.player
JOIN player_longevity l ON s.player = l.player;
```

### Data Quality & Preprocessing
- **Validation**: Verified 100% row matching (98 players) with zero null values across all 3 input schemas.
- **KAST Cleaning**: Stripped `%` string characters and converted to float numeric values (e.g., `"75.8%"` → `75.8`).
- **Years Active Parsing**: Parsed string ranges (`"2016 - Present"`) into `start_year` and `end_year` parameters (setting Present = 2026) to compute exact active duration.
- **Sample Size Flags**: Flagged players with low total LAN counts (e.g., Nico: 16 LANs, syrsoN: 19 LANs, swag: 19 LANs) for transparency while keeping them eligible.

---

## 3. Mathematical Normalization & GOAT Formula

To combine metrics measured in different units (e.g., Rating vs. Major Trophies vs. Years Active), all raw metrics are normalized to a **Min-Max range between 0 and 1**:

**Normalization Formula**:
> **Normalized Value** = `(Value - Min) / (Max - Min)`

### Boundary Calibration Table

| Metric Parameter | Minimum (Min) | Maximum (Max) | Metric Unit |
| :--- | :---: | :---: | :--- |
| **Rating 1.0** | 0.95 | 1.27 | Ratio |
| **K/D Ratio** | 0.95 | 1.44 | Ratio |
| **ADR** | 66.1 | 91.1 | Damage/Round |
| **KAST%** | 66.1% | 76.3% | Percentage |
| **Impact Rating** | 0.88 | 1.49 | Index |
| **MVP Awards** | 0 | 32 | MVPs |
| **Major Championships** | 0 | 5 | Trophies |
| **Premier LAN Wins** | 0 | 37 | Tournaments |
| **LAN Grand Finals** | 0 | 50 | Appearances |
| **Years Active** | 3 | 14 | Years |
| **HLTV Top 20 Selections** | 1 | 10 | Selections |
| **Consistency Years (≥1.05)** | 0 | 14 | Years |
| **LANs Played** | 16 | 141 | Tournaments |

### Final GOAT Score Engine

Each pillar score is computed as the unweighted average of its normalized constituent metrics:

- **Pillar 1 Score (40%)**: Average of normalized Rating 1.0, K/D Ratio, ADR, KAST%, Impact Rating, and MVP Awards.
- **Pillar 2 Score (30%)**: Average of normalized Major Championships, Premier LAN Wins, and LAN Grand Finals Appearances.
- **Pillar 3 Score (30%)**: Average of normalized Years Active, HLTV Top 20 Selections, Consistency Years, LANs Played, and Weighted Ranks.

**Final Composite Formula**:
> **GOAT Score** = `100 × (0.40 × Pillar 1 + 0.30 × Pillar 2 + 0.30 × Pillar 3)`

---

## 4. Final Rankings: Top 10 Counter-Strike GOATs

| Rank | Player | Stats Score (40%) | Trophies Score (30%) | Longevity Score (30%) | Overall GOAT Score |
| :---: | :--- | :---: | :---: | :---: | :---: |
| 🥇 **1** | **ZywOo** | **93.9** | 65.2 | 68.2 | **77.6** |
| 🥈 **2** | **device** | 58.2 | **77.9** | **90.6** | **73.8** |
| 🥉 **3** | **s1mple** | 76.3 | 34.4 | 80.1 | **64.9** |
| **4** | **NiKo** | 55.8 | 48.2 | 92.0 | **64.4** |
| **5** | **ropz** | 46.9 | 75.0 | 67.5 | **61.5** |
| **6** | **dupreeh** | 34.9 | 87.7 | 65.6 | **59.9** |
| **7** | **apEX** | 18.4 | 93.3 | 48.5 | **49.9** |
| **8** | **Magisk** | 36.8 | 69.2 | 47.5 | **49.7** |
| **9** | **f0rest** | 38.2 | 54.1 | 52.3 | **47.2** |
| **10** | **sh1ro** | 65.1 | 28.6 | 41.7 | **47.1** |

---

## 5. Model Sensitivity Analysis

To test model robustness, player rankings were evaluated across **5 distinct weighting scenarios**:

| Weight Scenario | Stats % | Trophies % | Longevity % | #1 Ranked Player | Score | #2 Ranked Player |
| :--- | :---: | :---: | :---: | :--- | :---: | :--- |
| **Baseline** | **40%** | **30%** | **30%** | **ZywOo** | 77.6 | device (73.8) |
| **Equal Weights** | 33.3% | 33.3% | 33.3% | **device** | 75.7 | ZywOo (75.7) |
| **Stats Heavy** | 50% | 25% | 25% | **ZywOo** | 80.3 | device (71.2) |
| **Trophies Heavy** | 25% | 50% | 25% | **device** | 76.1 | dupreeh (63.8) |
| **Longevity Heavy** | 25% | 25% | 50% | **device** | 79.3 | NiKo (70.6) |

### Key Sensitivity Takeaway
- **ZywOo** dominates when raw individual statistical performance is prioritized (Stats Heavy / Baseline).
- **device** claims the #1 rank whenever trophy achievements or career longevity are weighted heavily, due to his unrivaled 14 consistency years, 133 LANs, and 4 Major titles.

---

## 6. Analytical Insights & Tactical Anomalies

### 1. The In-Game Leader (IGL) Paradox
Legendary callers **apEX (Rating 0.98)** and **gla1ve (Rating 0.96)** have both won 4 Major Championships. Despite raw statistical scores under 20.0, their trophy scores (>90.0) propel them into elite overall tiers, demonstrating that raw fragging stats underestimate IGL impact.

### 2. NiKo's #1 Ranking Curse
**Nikola "NiKo" Kovač** boasts 10 HLTV Top 20 selections and a massive Longevity score of 92.0 (#1 in longevity). However, despite spending a decade at the apex of Counter-Strike, he has never achieved an annual #1 HLTV ranking.

### 3. Most Weight-Sensitive Player: donk
Rising superstar **Danil "donk" Kryshkovets** ranks **#7 under Stats-Heavy weighting** due to historical rating spikes, but drops to **#35 under Longevity-Heavy weighting** due to his brief career window (2 years active), making him the most volatility-sensitive entity in the dataset.

---

## 7. Future Research & Expansion Roadmap

1. **Clutch & Pressure Adjustments**: Incorporate 1vX clutch win rates and High-Pressure Match Ratings (Major Finals vs. Group Stage).
2. **Opponent Tier Scaling**: Weight player rating based on opponent HLTV rank tier (e.g., top-5 opponents vs. top-30).
3. **Era-Separated Models**: Benchmark CS:GO (2012–2023) against CS2 (2023–Present) separately to account for meta shifts.

---

Explore the full interactive dashboard here: [Counter Strike GOAT Analysis Dashboard](https://public.tableau.com/app/profile/klyde.dexter.fonte/viz/CounterStrikeGOATAnalysis/ExecutiveOverview#1)

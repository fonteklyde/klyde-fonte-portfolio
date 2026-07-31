---
title: "Long-Term Casino Player Analysis: Do Players Win or Lose?"
description: "A comprehensive data analysis case study investigating 1.2M game records, 38 months of regulatory data, and transaction histories to analyze player loss rates and the mathematical inevitability of the house edge."
image: "/images/casino-case-study/viz1_monthly_player_losses.png"
gallery:
    - "/images/casino-case-study/viz1_monthly_player_losses.png"
    - "/images/casino-case-study/viz3_house_edge_by_game.png"
    - "/images/casino-case-study/viz4_player_trajectory.png"
    - "/images/casino-case-study/viz7_session_analysis.png"
    - "/images/casino-case-study/viz8_monthly_player_trend.png"
    - "/images/casino-case-study/viz6_rtp_boxplot.png"
    - "/images/casino-case-study/viz2_player_outcomes.png"
    - "/images/casino-case-study/viz5_activity_vs_loss.png"
tags: ["Python", "Data Analysis", "SQL", "Exploratory", "Statistics"]
githubUrl: "https://github.com/fonteklyde/casino_case_study"
date: "2026-07-31"
featured: true
---

## Executive Summary

This data analytics case study investigates the long-term financial impact of casino gambling on players. By synthesizing four complementary datasets—spanning statewide aggregate regulatory records, individual player loyalty accounts, over 1.2 million game-level Return-to-Player (RTP) records, and 21 months of granular player transaction logs—the study evaluates whether players actually win or lose money over extended horizons.

The central finding is unambiguous: **the house edge ensures that long-term player losses are a mathematical certainty rather than a matter of probability.** Across 38 consecutive months of statewide data, players lost over $1.24 billion with zero profitable months for the player base.

---

## Phase 1: Ask (Business & Analytical Objectives)

### Business Task
Quantify the long-term financial trajectories of casino players, measure loss magnitude across game types, and generate empirical insights to inform responsible gambling education and policy frameworks.

### Key Metrics Tracked
- **Net Player Position**: Total Winnings − Total Wagered (or Total Withdrawals − Total Deposits)
- **Cumulative Net Earnings**: Longitudinal trajectory over time
- **Return to Player (RTP)**: Theoretical percentage returned to players
- **House Edge**: 100% − RTP
- **Player Loss Rate**: Percentage lost per wager, session, or month

---

## Phase 2: Prepare (Data Sourcing & Architecture)

The analysis integrates four distinct, multi-source datasets to capture both aggregate macro trends and micro-level player behavior:

1. **Connecticut Online Casino Gaming Data (Aggregate Level)**:
   - **Source**: [Kaggle — Casino Gaming Data](http://kaggle.com/datasets/willianoliveiragibin/casino-gaming-data) (Connecticut Department of Consumer Protection)
   - **Scope**: 38 months (Oct 2021 – Nov 2024), statewide licensee data ($1.24B total net player loss).
2. **Online Casino Player Transaction Data (Individual Level)**:
   - **Source**: [Mendeley Data — GREO Loyalty Card Dataset](http://data.mendeley.com/datasets/9j5gcygnwg/1) (Gambling Research Exchange Ontario)
   - **Scope**: 2,311 player accounts and 138,928 approved transactions (March 2019 – Feb 2020).
3. **Online Casino Games Dataset — 1.2M Records (Game-Level RTP)**:
   - **Source**: [Kaggle — Online Casino Games Dataset (1.2M Records)](http://kaggle.com/datasets/igormerlinicomposer/online-casino-games-dataset-1-2m-records)
   - **Scope**: 1,200,000 game records across 7 distinct categories with RTPs between 85.0% and 99.5%.
4. **Single Player Transaction History (Case Study)**:
   - **Source**: [Kaggle — Online Gaming Transaction History](http://kaggle.com/datasets/kylescissons/online-gaming-transaction-history)
   - **Scope**: 156,052 individual bets across ~21 months (Feb 2024 onwards, $27.7K total wagers).

---

## Phase 3: Process (Data Cleaning & Wrangling)

Using **Python (`pandas`, `numpy`, `matplotlib`, `seaborn`)**, rigorous data cleaning pipelines were executed:
- **Timestamp Parsing & Alignment**: Standardized ISO datetime formats across multi-year logs.
- **Transaction Classification**: Mapped loyalty credit/debit types to net cash equivalence (`LOYALTYCARDDEBIT` as negative spend, `LOYALTYCARDCREDIT` as positive receiving).
- **Derived Metrics Calculation**: Computed derived variables for `House Edge` (100% − RTP), `Net Position`, `Session Duration`, and `Cumulative Wallet Trajectory`.
- **Filtering & De-duplication**: Filtered for approved transactions and removed duplicate game records.

---

## Phase 4: Analyze (Core Insights & Empirical Findings)

### 1. Statewide Regulatory Analysis (Unbroken Losses)
- Across 38 months, players collectively lost **$1,243,935,525** (average **$32.7M loss per month**).
- The statewide loss rate averaged **3.12%** of total wagers.
- **Critical Outcome**: In **0 out of 38 months** did players collectively post a positive net gain.

### 2. House Edge Ranking by Game Type (1.2M Games Dataset)
- **Bingo Games**: Highest average house edge at **10.00%** (RTP 90.00%). Worst titles hit **15.00% house edge** (RTP 85.0%).
- **Scratch Cards**: **6.99%** average house edge.
- **Slot Machines**: **4.00%** average house edge across 428,807 slot records.
- **Crash & Live Dealer Games**: **3.03%** and **2.84%** house edge respectively.
- **Table Games & Poker Variants**: Lowest average house edge (**2.29%** and **1.38%** respectively).
- **Key Takeaway**: Zero games out of 1,200,000 offered an RTP of 100% or higher.

| Game Category | Avg. House Edge (%) | Avg. Return to Player (RTP %) | Sample Size (n) |
| :--- | :---: | :---: | :---: |
| **Bingo** | **10.00%** | 90.00% | 85,691 |
| **Scratch Cards** | **6.99%** | 93.01% | 85,305 |
| **Slots** | **4.00%** | 96.00% | 428,807 |
| **Crash Games** | **3.03%** | 96.97% | 85,957 |
| **Live Dealer** | **2.84%** | 97.16% | 171,581 |
| **Table Games** | **2.29%** | 97.71% | 171,249 |
| **Poker** | **1.38%** | 98.62% | 171,410 |

### 3. Micro Analysis: Single Player 21-Month Trajectory
- Over 21 months and 156,052 bets, the player wagered **$27,741.56** and won **$27,503.23**, resulting in a cumulative net loss of **-$238.33** (effective loss rate **0.86%**).
- Although the player had 7 net-winning months (33.3%) and won 149 out of 396 sessions (37.6%), the **cumulative trajectory steadily trended downward**, demonstrating how short-term wins are inevitably erased over time.

### 4. Convergence of Theoretical vs. Actual Loss Rates
- **Theoretical House Edge** (1.2M Games): **3.79%**
- **Statewide Observed Loss Rate** (CT Regulatory): **3.12%**
- **Single Player Observed Loss Rate** (21 Months): **0.86%**

All three independent data sources converge on the same conclusion: long-term player losses are mathematically guaranteed.

---

## Phase 5: Share (Visualizations)

![Statewide Monthly Player Losses](/images/casino-case-study/viz1_monthly_player_losses.png)
*Figure 1: Aggregate Connecticut monthly player losses showing an unbroken 38-month trend of negative net outcomes.*

![House Edge by Game Type](/images/casino-case-study/viz3_house_edge_by_game.png)
*Figure 2: Average house edge across 1.2M casino games ranked by player disadvantage.*

![Single Player Cumulative Trajectory](/images/casino-case-study/viz4_player_trajectory.png)
*Figure 3: 21-month cumulative net position of a single player illustrating downward compounding losses.*

![Session Analysis](/images/casino-case-study/viz7_session_analysis.png)
*Figure 4: Session-level breakdown revealing 62.4% of sessions end in loss, with longer play correlating to higher net loss.*

---

## Phase 6: Act (Recommendations & Policy Impact)

1. **Interactive "True Cost of Play" Calculator**: Develop public educational tools letting consumers input bet size, session frequency, and game type to view projected annual loss.
2. **Mandatory RTP Disclosures**: Advocate for prominent, standardized house edge labeling on all online and physical casino titles.
3. **Session & Time Restrictions**: Promote mandatory session time limits, as empirical evidence proves longer session duration directly increases player losses.
4. **Debunking "Beatability" Myths**: Educate players that even low house edge games (e.g., poker at 1.38%) guarantee negative expected value over thousands of bets.

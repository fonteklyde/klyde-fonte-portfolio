---
title: "Water Potability Prediction & Analysis"
description: "A data mining and machine learning case study that preprocesses incomplete water quality parameters and compares Random Forest, XGBoost, and LightGBM models to predict potability."
image: "/images/dataset.png"
gallery:
    - "/images/data-dict.png"
    - "/images/histogram.png"
    - "/images/correlation-matrix.png"
    - "/images/potability-distribution.png"
    - "/images/model-initialization.png"
    - "/images/model-training.png"
    - "/images/model-prediction.png"
    - "/images/model-output.png"
    - "/images/conf-matrix-rf.png"
    - "/images/conf-matrix-xg.png"
    - "/images/conf-matrix-gpm.png"
tags: ["Python", "R", "Machine Learning", "Exploratory"]
date: "2025-03-10"
featured: true
---

## Project Overview

Clean and safe drinking water is a fundamental human need, yet water contamination remains a critical global issue. To prevent waterborne illnesses such as cholera, dysentery, and lead poisoning, it is essential to evaluate water safety parameters reliably.

This project samples water using turbidity, pH, and chemical content measurements to predict its suitability for human consumption. By employing advanced data preprocessing, exploratory data analysis, and machine learning classification algorithms, this study provides a predictive framework to support decision-makers in assessing public health risks and water safety.

---

## Data Preprocessing & Cleaning

Real-world datasets often contain missing values and quality anomalies. Our initial dataset suffered from missing data points across three key features:
1. **pH**: Measures how acidic or alkaline the water is.
2. **Sulfate**: Sulfate concentration dissolved in mg/L.
3. **Trihalomethanes**: Amount of Trihalomethanes present in µg/L.

To address these missing records systematically without discarding valuable data, we applied a class-conditional imputation technique. Missing values in these columns were automatically filled with the **attribute mean** of all samples belonging to the same potability class. 

Additionally, the target column `Potability` was mapped from numeric labels (`0` and `1`) to human-readable categories:
- **`0`** &rarr; **`Not potable`**
- **`1`** &rarr; **`Potable`**

---

## Exploratory Data Analysis (EDA)

Exploratory analysis yielded crucial insights into parameter distributions and correlations:

- **Parameter Distributions**:
  - **Turbidity**: Moderately right-skewed, showing most values clustered between 2 and 7 NTU.
  - **pH**: Approximately normally distributed, with the majority of samples scoring between 6 and 9.
  - **Chloramines**: Peaked around 5 to 7 mg/L, reflecting typical water disinfection standards.
- **Correlation Matrix & Boxplots**:
  - **Turbidity vs. Potability**: Potable samples demonstrated a tight turbidity range (between 2.14 and 4.80 NTU), whereas non-potable samples displayed higher variability and outliers.
  - **Sulfate vs. Conductivity**: High sulfate levels (above 200 mg/L) correlated with moderate-to-high conductivity values, indicating mineral density.
  - **Potability Distribution**: The dataset comprised **60.99% non-potable samples** and **39.01% potable samples**, highlighting a distinct class imbalance.

---

## Machine Learning Pipeline

To predict water safety dynamically, we trained and compared three popular machine learning models: **Random Forest**, **XGBoost (Extreme Gradient Boosting)**, and **LightGBM (Light Gradient Boosting Machine)**.

### Class Imbalance Handling
Because 60.99% of the dataset represented non-potable water, training models directly on this data would bias predictions towards the majority class. We resolved this by applying **SMOTE (Synthetic Minority Over-sampling Technique)** to synthesize new potable data points during training, ensuring a balanced classification process.

### Model Evaluation
Each classifier was evaluated on a test set (20% of the dataset) after tuning hyperparameters. The results of the models are detailed in the performance matrix below.

---

## Model Performance & Results

| Classification Model | Accuracy | Precision | Recall | F1-Score |
| :--- | :---: | :---: | :---: | :---: |
| **Random Forest** | **71.38%** | **71.42%** | **71.38%** | **71.36%** |
| **XGBoost** | 69.00% | 69.01% | 69.00% | 69.00% |
| **LightGBM** | 66.38% | 66.38% | 66.38% | 66.37% |

### Key Observations
1. **Random Forest** achieved the highest scores across all metrics. Confusion matrix analysis revealed it correctly classified 295 non-potable samples and 276 potable samples.
2. **XGBoost** performed slightly worse than Random Forest in identifying non-potable samples, though it maintained a similar overall classification balance.
3. **LightGBM** had the highest misclassification rates, proving less reliable for detecting potable water thresholds in this specific dataset.

---

## Conclusion & Future Directions

This study successfully demonstrates how machine learning models can assist public health officials in automated water quality testing. Random Forest proved to be the most dependable classifier. 

However, since minor misclassification still occurs across all three models, future work will focus on:
- Tuning hyperparameter grids via deep search techniques.
- Expanding feature selection to include microbial markers.
- Integrating ensemble voting classifiers to boost accuracy and lower false negative rates.

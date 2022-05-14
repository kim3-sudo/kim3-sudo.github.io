---
title: "NCAA Basketball Playoff Prediction Analysis"
date: "2021-12-24T12:00:00.000Z"
description: "The ability to predict playoff results in the NCAA Men’s Basketball tournament in March is a question of obvious interest to coaches and fans alike, and for this research, we leveraged a machine learning approach to create a predictive model based on prior years performance, by team."
author: "kim3-sudo"
slug: "posts/2021/12/24/ncaa-basketball-playoff-prediction-analysis"

---
The ability to predict playoff results in the NCAA Men’s Basketball tournament in March is a question of obvious interest to coaches and fans alike, and for this research, we leveraged a machine learning approach to create a predictive model based on prior years performance, by team.

In a machine learning approach, we employed a gradient boosted classification approach to create an model for probability of success based on many parameters. We could then use this model to predict the potential outcome of any game and derive a ranking out of this. The models that our machine learning system created have a parameter called accuracy which can be used to evaluate the “success” of each model. accuracy is the probability that the model will guess the outcome of any given game from 2019 correctly.

We found that the traditional approach of shoving more data at a machine learning problem wasn’t necessarily the correct approach here. Like in traditional statistics, the model that is created must be representative of the data which it will evaluate to be useful. The world of basketball has changed massively, even within the last 10 years, and in our testing, **we found that the last 10 years, from 2009 to 2019, yielded the most accurate model with an overall accuracy of 75.3%**. This model had enough data to generate a representative model and avoid severe overfitting, but not so much that changes in the game over the last 10 years would throw off the model. We also tried generating models using all years in our data, from 1993 to 2019, and just the last few years, from 2017 to 2019, and from 2018 to 2019.

The code is available at GitHub in the following GitHub repository: [https://github.com/kim3-sudo/march_madness_analysis](https://github.com/kim3-sudo/march_madness_analysis). The cleansed data, which were used for the analysis, along with the documentation for the data, are available in the following GitHub repository: [https://github.com/kim3-sudo/march_madness_data](https://github.com/kim3-sudo/march_madness_data).

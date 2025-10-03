---
layout: paper
title: Abstract
---

<div class="abstract">
  <h2>Abstract</h2>
  <p>As large language models (LLMs) continue to scale in reasoning capability, the mechanisms by which their internal representations encode intermediate decision-making steps remain poorly understood. Prior work has utilized Pivotal Token Search (PTS) to identify pivotal tokens—tokens within a reasoning trace that substantially influence the probability of a correct final answer—but none have formulated methods for interpreting them. In this work, we present a probing method to predict and classify pivotal features underlying Qwen3-0.6B activations. We find that these features correspond to consistent, weighted directions in the latent space across multiple layers, such that attending to these directions may elicit different behaviors in the LLM's reasoning path. We suspect that probing may have implications for computationally cheaper approaches to PTS. We will publicly release code, data, and other artifacts upon acceptance.</p>
</div>

<div class="keywords">
  <strong>Keywords:</strong>
  <span class="keyword">large language models</span>
  <span class="keyword">reasoning</span>
  <span class="keyword">pivotal tokens</span>
  <span class="keyword">linear probing</span>
  <span class="keyword">mechanistic interpretability</span>
  <span class="keyword">neural networks</span>
</div>

<h2>Introduction</h2>
<p>Large language models (LLMs) have demonstrated strong reasoning abilities when prompted with step-by-step examples, most prominently through Chain-of-Thought (CoT) prompting. While this capability has been extensively studied at the behavioral level, the internal mechanisms by which LLMs represent and execute multi-step reasoning behavior remain poorly understood.</p>

<p>Abdin et al. introduced Pivotal Token Search (PTS), a technique that leverages a binary search algorithm and an oracle to identify pivotal tokens—intermediate tokens in the reasoning path that strongly influence a model's likelihood of reaching the correct answer. These tokens have been shown to steer models toward better reasoning success when incorporated into Direct Preference Optimization (DPO) fine-tuning. However, PTS is computationally expensive and requires repeated forward passes per token position, which scales poorly with longer contexts and larger datasets. Moreover, while pivotal tokens are known to exist, there is no systematic method to interpret the features they encode.</p>

<h2>Research Questions</h2>
<p>The main research questions addressed in this study are:</p>
<ol>
  <li>Can pivotalness be identified more efficiently through linear probes trained on hidden activations?</li>
  <li>Do pivotal tokens correspond to linearly separable directions in the model's representation space?</li>
  <li>What are the implications for computationally cheaper approaches to PTS?</li>
</ol>

<h2>Significance</h2>
<p>This research is significant because it addresses the gap in understanding how pivotal tokens are encoded in model representations and provides a new window into the internal structure of reasoning trajectories. The findings have implications for developing more efficient alternatives to PTS and for enabling new forms of representation steering in large language models.</p>

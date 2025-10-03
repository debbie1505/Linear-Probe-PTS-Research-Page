---
layout: paper
title: Methodology
---

<h2>Research Design</h2>
<p>This study employs a quantitative approach using linear probing to investigate whether pivotalness can be identified more efficiently through linear probes trained on hidden activations. The research design focuses on testing whether pivotal tokens correspond to linearly separable directions in the model's representation space, which could serve as a lightweight alternative to PTS classification at runtime.</p>

<div class="methodology">
  <h2>Research Methods</h2>
  <div class="method-steps">
    <div class="method-step">
      <div class="step-number">1</div>
      <h3 class="step-title">Dataset Preparation</h3>
      <p class="step-description">We build on the open-source Pivotal Token Search (PTS) dataset from Sharma, which contains Qwen3-0.6B generations on GSM8K annotated with pivotal tokens. Each example is converted into token-level labels using a specific scheme for pivotal, non-pivotal, and neutral tokens.</p>
    </div>
    
    <div class="method-step">
      <div class="step-number">2</div>
      <h3 class="step-title">Probe Architecture</h3>
      <p class="step-description">We use standard linear probes trained independently on hidden states from specific transformer layers. Each probe projects the hidden state into a scalar score, which is passed through a sigmoid to yield the probability that a token is pivotal.</p>
    </div>
    
    <div class="method-step">
      <div class="step-number">3</div>
      <h3 class="step-title">Layer-wise Training</h3>
      <p class="step-description">For each of the 29 transformer layers in Qwen3-0.6B, we train an independent linear probe to predict whether a token is pivotal, using Binary Cross-Entropy loss and evaluating on a held-out validation set.</p>
    </div>
  </div>
</div>

<h2>Dataset</h2>
<p>We build on the open-source Pivotal Token Search (PTS) dataset from Sharma, which contains Qwen3-0.6B generations on GSM8K annotated with pivotal tokens. Each row provides a query, a reasoning trace, and one or more tokens identified as pivotal via PTS.</p>

<p>To adapt this dataset for probing, we convert each example into token-level labels using the following scheme:</p>
<ul>
  <li><strong>Pivotal tokens (1):</strong> Any token directly preceding a pivot (when its context matches a shorter prefix of the same query) is labeled as pivotal.</li>
  <li><strong>Non-pivotal tokens (-1):</strong> For each pivotal token, we randomly sample one token from the model's answer portion that was not already labeled.</li>
  <li><strong>Neutral tokens (0):</strong> All remaining tokens in the context are labeled neutral.</li>
</ul>

<p>After preprocessing and an 80/20 split, this yields 83 training and 21 validation examples, balanced across 232 pivotal and 232 non-pivotal train activations, along with 70 pivotal and 70 non-pivotal validation activations distributed over 29 transformer layers.</p>

<h2>Probe Architecture</h2>
<p>To test whether pivotalness is encoded in model activations, we use a standard linear probe. Each probe is trained independently on hidden states hℓ,i from a specific transformer layer ℓ at a token position i. The probe projects the hidden state into a scalar score:</p>

<pre><code>zℓ,i = w⊤ℓ hℓ,i + bℓ</code></pre>

<p>which is passed through a sigmoid to yield the probability that the token i is pivotal:</p>

<pre><code>pℓ,i = σ(zℓ,i)</code></pre>

<p>We treat pℓ,i as the predicted pivotalness of the token i. A threshold 0.5 is used for the classification. Each probe is trained independently per layer, allowing us to study whether pivotal features are consistently represented across different depths of the network.</p>

<h2>Evaluation Metrics</h2>
<p>Evaluation is performed on a held-out validation set. We report accuracy as a baseline sanity check, and precision, recall, F1 score, and ROC AUC as our primary metrics, along with confusion matrices for qualitative inspection. This comprehensive set of metrics allows us to understand both class balance behavior and probe discriminative power across layers.</p>

<h2>Class Rebalancing</h2>
<p>In addition to training probes on a balanced dataset (1:1 positives to negatives), we also experimented with oversampling negative examples to create a 1:2 ratio. This was motivated by observations of false positives in the baseline setup. The rebalanced dataset consisted of 227 positives and 449 negatives in the training set, and 70 positives and 140 negatives in the validation set.</p>

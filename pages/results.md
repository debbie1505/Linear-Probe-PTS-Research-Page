---
layout: paper
title: Results
---

<h2>Overview of Findings</h2>
<p>Our results show that linear probes trained on Qwen3-0.6B activations are capable of distinguishing pivotal from non-pivotal tokens across multiple intermediate layers, with the strongest performance concentrated in the middle of the network (e.g., Layers 14–16). These findings provide evidence that the property of pivotalness is encoded in linearly separable directions within the model's representation space.</p>

<div class="results">
  <h2>Key Results</h2>
  <div class="results-grid">
    <div class="result-item">
      <h3 class="result-title">Best Layer Performance</h3>
      <div class="result-value">73.2%</div>
      <p class="result-description">Layer 14 achieved the best overall balance across metrics, with an F1 of 0.732 and ROC AUC of 0.802.</p>
    </div>
    
    <div class="result-item">
      <h3 class="result-title">Average Performance</h3>
      <div class="result-value">67.6%</div>
      <p class="result-description">Average F1 score across all layers, with ROC AUC values consistently exceeding raw accuracy.</p>
    </div>
    
    <div class="result-item">
      <h3 class="result-title">Class Rebalancing Effect</h3>
      <div class="result-value">80.0%</div>
      <p class="result-description">Class rebalancing modestly improved average accuracies (0.800) and AUROC (0.757), but substantially increased the false negative rate.</p>
    </div>
  </div>
</div>

<h2>Layer-wise Probe Performance</h2>
<p>Overall, the linear probes demonstrated moderate ability to separate pivotal from non-pivotal activations across layers of Qwen3-0.6B. Performance varied by layer, with several mid-to-late layers exhibiting stronger discriminative signals.</p>

<table>
  <thead>
    <tr>
      <th>Layer</th>
      <th>Accuracy</th>
      <th>Precision</th>
      <th>Recall</th>
      <th>F1</th>
      <th>ROC AUC</th>
      <th>FPR</th>
      <th>FNR</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>14</td>
      <td>0.746</td>
      <td>0.776</td>
      <td>0.692</td>
      <td><strong>0.732</strong></td>
      <td><strong>0.802</strong></td>
      <td>0.200</td>
      <td>0.308</td>
    </tr>
    <tr>
      <td>16</td>
      <td>0.708</td>
      <td>0.702</td>
      <td>0.723</td>
      <td>0.712</td>
      <td>0.791</td>
      <td>0.308</td>
      <td>0.277</td>
    </tr>
    <tr>
      <td>17</td>
      <td>0.723</td>
      <td>0.723</td>
      <td>0.723</td>
      <td>0.723</td>
      <td>0.793</td>
      <td>0.277</td>
      <td>0.277</td>
    </tr>
    <tr>
      <td>27</td>
      <td>0.708</td>
      <td>0.702</td>
      <td>0.723</td>
      <td>0.712</td>
      <td>0.715</td>
      <td>0.308</td>
      <td>0.277</td>
    </tr>
    <tr>
      <td><strong>Average</strong></td>
      <td>0.686</td>
      <td>0.692</td>
      <td>0.672</td>
      <td>0.676</td>
      <td>0.747</td>
      <td>0.316</td>
      <td>0.328</td>
    </tr>
  </tbody>
</table>

<div class="chart-container">
  <h3 class="chart-title">Figure 1: PCA and t-SNE Projections</h3>
  <p><em>PCA (left) and t-SNE (right) projections of pivotal vs. non-pivotal activations for best layer under the 1:1 dataset. These visualizations illustrate clustering tendencies between pivotal and non-pivotal activations.</em></p>
</div>

<h2>Effect of Class Rebalancing</h2>
<p>We examined the effect of class rebalancing, where negative examples were oversampled at a 1:2 ratio relative to positives. This adjustment to the training data modestly improved average accuracies (0.800) and AUROC (0.757), but substantially increased the false negative rate, confirming that class imbalance remains a limiting factor in probe performance.</p>

<h2>Probe Aggregation Results</h2>
<p>To complement our layer-wise probe experiments, we evaluated aggregation strategies that combine predictions across multiple probes. These methods include:</p>
<ul>
  <li><strong>Average Aggregation (AvgAgg):</strong> Where calibrated per-layer probabilities are averaged and compared to a threshold</li>
  <li><strong>Majority Rule:</strong> Where a token is classified as pivotal if at least X% of probes predict pivotal</li>
</ul>

<p>Results show that AvgAgg achieves the best F1 and AP, while Majority Rule pushes recall highest at the expense of a large false positive explosion. Both methods confirm pivotalness is separable across layers, but balancing strongly favors AvgAgg.</p>

<h2>Cost-Sensitive Probes</h2>
<p>As an exploratory baseline, we trained cost-sensitive probes by weighting pivotal token misclassifications more heavily in the loss. This allows recall prioritization while attempting to suppress false positives. Cost-sensitive probes provide a balanced compromise, especially under class imbalance, achieving the overall best trade-off (F1 = 0.736, AP = 0.819) on balanced data.</p>

<h2>Limitations</h2>
<p>While our probing approach provides an interpretable test for pivotal feature encoding, several limitations must be acknowledged:</p>
<ul>
  <li>The dataset size is relatively small (83 training and 21 validation examples), which restricts statistical power</li>
  <li>Our probes are trained independently per layer, without cross-layer aggregation</li>
  <li>We restrict ourselves to a binary classification task, excluding neutral tokens</li>
  <li>Linear probes, by design, only test for linearly separable features</li>
</ul>

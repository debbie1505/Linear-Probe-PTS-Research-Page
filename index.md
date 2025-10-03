---
layout: default
title: Home
---

<div class="homepage">
  <section class="hero">
    <div class="container">
      <h1 class="hero-title">{{ site.paper.title }}</h1>
      <p class="hero-subtitle">{{ site.paper.authors | join: ', ' }} • {{ site.paper.journal }} • {{ site.paper.year }}</p>
      
      <div class="hero-actions">
        <a href="/abstract" class="btn btn-primary">Read Abstract</a>
        <a href="{{ site.paper.pdf_url | relative_url }}" class="btn btn-secondary" target="_blank">Download PDF</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Research Overview</h2>
        <p class="section-subtitle">A comprehensive study exploring how pivotal tokens encode reasoning shifts in large language models through linear probing</p>
      </div>
      
      <div class="section-content">
        <p>This research presents novel findings in the field of mechanistic interpretability of large language models. Our study demonstrates that pivotal tokens correspond to linearly separable directions in the model's representation space, offering a computationally efficient alternative to Pivotal Token Search (PTS).</p>
        
        <h3>Key Contributions</h3>
        <ul>
          <li>Novel probing framework for classifying pivotal vs. non-pivotal activations in Qwen3-0.6B</li>
          <li>Empirical evidence that pivotalness corresponds to weighted directions across multiple layers</li>
          <li>Practical implications for computationally cheaper approaches to PTS</li>
          <li>Future research directions in representation steering and model reasoning</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="features">
    <div class="container">
      <div class="feature">
        <div class="feature-icon">🔬</div>
        <h3 class="feature-title">Linear Probing Approach</h3>
        <p class="feature-description">Systematic investigation using linear probes to identify pivotal features in transformer activations across 29 layers.</p>
      </div>
      
      <div class="feature">
        <div class="feature-icon">📊</div>
        <h3 class="feature-title">Significant Results</h3>
        <p class="feature-description">Achieved 73.2% F1 score on the best-performing layer, demonstrating that pivotalness is encoded in linearly separable directions.</p>
      </div>
      
      <div class="feature">
        <div class="feature-icon">⚡</div>
        <h3 class="feature-title">Computational Efficiency</h3>
        <p class="feature-description">Lightweight alternative to PTS that could enable real-time reasoning analysis and representation steering.</p>
      </div>
    </div>
  </section>
</div>

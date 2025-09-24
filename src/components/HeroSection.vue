<template>
  <section class="home-hero">
    <div class="container hero-inner">
      <div class="hero-col">
        <h1 class="hero-headline">Financing solutions, built for real people.</h1>
        <p class="hero-lead">Generic, brand-safe copy describing your mission and what you help users accomplish.</p>
        <div class="hero-ctas">
          <RouterLink to="/solutions" class="btn-primary">Our Solutions</RouterLink>
          <RouterLink to="/about" class="btn-outline">About Us</RouterLink>
        </div>
      </div>
      <div class="hero-card">
        <div class="card hero-notice">
          <img class="card-img-top hero-art" src="@/img/hero-illustration.svg" alt="Illustration" />
          <div class="card-body">
            <h6 class="notice-title">Notice</h6>
            <p class="notice-text">Replace this card with a timely message, promo, or service status.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

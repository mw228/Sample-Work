<script setup>
const links = [
  { to: '/solutions', label: 'Solutions' },
  { to: '/resources', label: 'Resources' },
  { to: '/about',     label: 'About' },
  { to: '/contact',   label: 'Contact' },
]
</script>

<template>
  <!-- Added navbar-light so toggler is dark -->
  <nav class="site-header navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
    <div class="container">
      <RouterLink class="navbar-brand d-inline-flex align-items-center fw-semibold text-primary" to="/">
        <span class="brand-square me-2" aria-hidden="true"></span>
        <span class="brand-word">YourBrand</span>
      </RouterLink>

      <!-- Toggler (visible < lg) -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNav"
        aria-controls="mainNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Collapsible nav -->
      <div id="mainNav" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li v-for="l in links" :key="l.to" class="nav-item">
            <RouterLink class="nav-link" :to="l.to" active-class="active">{{ l.label }}</RouterLink>
          </li>
          <li class="nav-item ms-lg-2">
            <RouterLink to="/login" class="btn btn-outline-primary">Sign in</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

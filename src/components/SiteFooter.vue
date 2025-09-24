<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <img src="@/img/logo-generic.svg" alt="YourBrand logo" height="24" />
        <span>YourBrand</span>
      </div>

      <div class="footer-cols">
        <div class="footer-col">
          <h6>Company</h6>
          <ul>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/careers">Careers</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </div>
        <div class="footer-col">
          <h6>Resources</h6>
          <ul>
            <li><RouterLink to="/blog">Blog</RouterLink></li>
            <li><RouterLink to="/help">Help Center</RouterLink></li>
            <li><RouterLink to="/security">Security</RouterLink></li>
          </ul>
        </div>
        <div class="footer-col">
          <h6>Legal</h6>
          <ul>
            <li><RouterLink to="/privacy">Privacy</RouterLink></li>
            <li><RouterLink to="/terms">Terms</RouterLink></li>
            <li><RouterLink to="/accessibility">Accessibility</RouterLink></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© {{ new Date().getFullYear() }} YourBrand, Inc.</span>
        <span>Made with Vue • Bootstrap 5</span>
      </div>
    </div>
  </footer>
</template>

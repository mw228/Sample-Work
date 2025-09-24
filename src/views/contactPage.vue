<template>
  <div class="container-fluid">
    <h2>Contact</h2>
    <SiteHeader/>
    <form class="mt-3" @submit.prevent>
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input class="form-control" type="text" />
      </div>
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input class="form-control" type="email" />
      </div>
      <div class="mb-3">
        <label class="form-label">Message</label>
        <textarea class="form-control" rows="4"></textarea>
      </div>
      <button class="btn btn-primary" type="submit">Send</button>
    </form>
    <SiteFooter/>
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
  name: "ContactView",
  components: { SiteHeader, SiteFooter }
}
</script>

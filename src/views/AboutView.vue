<template>
  <div class="about">
    <h1>About Page</h1>
  </div>
  <WeDeliver/>
  <OurPeople/>
  <OurStory/>
  <aboutSuccessStoriesVue/>
  <trustSecurity/>
</template>

<script>
import aboutSuccessStoriesVue from '@/components/about-components/aboutSuccessStories.vue';
import WeDeliver from '@/components/about-components/weDeliver.vue';
import OurPeople from '@/components/about-components/ourPeople.vue';
import OurStory from '@/components/about-components/ourStory.vue';
import trustSecurity from '@/components/about-components/trustSecurity.vue';
export default {
  name: 'AboutView',
  components:  {
    aboutSuccessStoriesVue,
    WeDeliver,
    OurPeople,
    OurStory,
    trustSecurity
}
}

</script>

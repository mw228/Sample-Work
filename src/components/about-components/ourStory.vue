<template>
  
  <section class="row home-careers-culture">
    <div class="col-xs-12 col-sm-12 col-md-4 text-start left-text ">
      <div>
        <h4 class=" text-start sctn-ctgry ">Our Story</h4>
        <h2><span>We've Been</span> an Industry Leader for Nearly Five Decades</h2>
      
      
        <p>Since 1973, we’ve supported the education and economic achievements of millions of people, through our innovative and technology-forward approach that simplifies complex programs and experiences. </p>

      
        <a type="button" class="btn" target="_blank" href="/contact-us">Our Story</a>
      </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-8 right-img">
      <div>
        <img src="../../img/letschange.png">

      </div>
    </div>
  </section>
  
</template>
<style scoped lang = 'scss'>
@import "@/scss/main.scss";
  .home-careers-culture{
  // background: linear-gradient(135deg, rgba(208,208,208,1) 0%, rgba(251,251,251,0.49205619747899154) 67%);
  // z-index:-1;
  background:$white;
  // }
  &::before{
    content: '';
    position: absolute;
    // top: 50%;
    // left: 24%;
    // width: 100%;
    // height: 100%;
    // transform: translate(-50%, -50%) rotate(4deg) skew(360deg);
    
    width: 0; height: 0;
    border-left: 100vw solid transparent;
    border-right: 0px solid transparent;
    border-top: 12vw solid linear-gradient(135deg, rgba(208,208,208,1) 0%, rgba(251,251,251,0.49205619747899154) 67%);
    z-index:0;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      border-top:25vw solid linear-gradient(135deg, rgba(208,208,208,1) 0%, rgba(251,251,251,0.49205619747899154) 67%);
    }
  }


}

</style>


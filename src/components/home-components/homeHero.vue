<template>
  <div class="container-fluid">
    <div class="back-video">
      <video autoplay muted loop>
        <source
          src="https://images.navient.com/Navient/web/navient-hero-home-video.mp4"
          type="video/mp4"
        />
      </video>
      <div class="text-overlay">
        <div class="layer-one">
          <h1 id="static-text">
            We make today's complex <br /><br />
            challenges <em>simpler</em>.
          </h1>
          <h1 class="animate-text" id="bus">business process</h1>
          <h1 class="animate-text" id="tech">technology</h1>
          <h1 class="animate-text" id="fin">financial</h1>
          <h1 class="animate-text" id="gov">government</h1>
          <div class="blue-bar"></div>
          <p>&#8595;</p>
        </div>
      </div>
      <div id="blue-bg"></div>
      <div class="layer-two">
        <div id="top-text">
          <h1>Experiences.</h1>
          <br />
          <h1>Simplified.</h1>
        </div>
        <button class="btn purple-button">Find Out How</button>
        <div class="blue-bar"></div>
      </div>
    </div>
    <div class="message">
      <p>Optional message space</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeHero',
  props: {}
}
</script>

<style scoped lang="scss">
@import "@/scss/main.scss";

.container-fluid {
  .back-video {
    height: 40em;
    width: 100%;
    position: relative;
    video {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 0;
      object-fit: cover;
      object-position: center center;
      margin: 0;
      padding: 0;
      top: 0;
      left: 0;
    }
    h1 {
      padding-left: 1em;
      font-size: 3.7rem;
      color: #fff;
      font-weight: 100;
    }
    .text-overlay {
      z-index: 1;
      position: relative;
      padding: 2em;
      text-align: left;
      .layer-one {
        animation: hide 1.5s ease-in 7s;
        animation-fill-mode: forwards;
        p {
          color:$white;
          font-size: 2.5rem;
          margin-top: 12rem;
          margin-left: 5rem;
        }
        #static-text {
          padding-top: 3em;
          line-height: 1.5em;
        }
        .animate-text {
          margin-top: -4.5em;
          opacity: 0;
          position: absolute;
        }
        .blue-bar {
          margin-top: -10.5em;
          margin-left: 3em;
          animation: bar 0.7s ease-in 1.5s forwards;
          width: 0;
        }
        #bus {
          animation: slide 2s ease-in 1s;
        }
        #tech {
          animation: slide 2s ease-in 2.8s;
        }
        #fin {
          animation: slide 2s ease-in 4.4s;
        }
        #gov {
          animation: slide 2s ease-in 6s;
        }
        @keyframes slide {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          15% {
            transform: translateY(1.5em);
            opacity: 1;
          }
          85% {
            transform: translateY(1.5em);
            opacity: 1;
          }
          100% {
            transform: translateY(2em);
            opacity: 0;
          }
        }
        @keyframes bar {
          from {
            width: 0;
          }
          to {
            width: 19em;
          }
        }
      }
      @keyframes hide {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    }
    #blue-bg {
      background-color: rgba(0, 87, 184, 0.5);
      position: absolute;
      animation: slideIn 1.5s ease 8s forwards;
      height: 100%;
      width: 60vw;
      z-index: 6;
      top: 0;
      left: -60vw;
    }
    @keyframes slideIn {
      from {
        left: -60vw;
      }
      to {
        left: 0;
      }
    }
    .layer-two {
      position: absolute;
      z-index: 6;
      top: 0;
      text-align: left;
      #top-text {
        animation: slideDown 1s ease-in 8s forwards;
        opacity: 0;
        h1 {
          margin-left: 1em;
        }
        h1:first-of-type {
          margin-top: 3.5em;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            margin-top: -10em;
          }
          to {
            opacity: 1;
            margin-top: 0;
          }
        }
      }
      .purple-button {
        margin-left: 9em;
        margin-top: 2em;
        padding: 1em 2em;
        animation: showBtn 0.7s ease-in 9.5s forwards;
        opacity: 0;
      }
      @keyframes showBtn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      .blue-bar {
        width: 0;
        margin-top: -8em;
        margin-left: 7em;
        animation: bar 0.7s ease-in 9.5s forwards;
      }
    }
  }
  .message {
    height: 2em;
    padding-left: 4em;
    border-bottom: gray solid 0.1em;
    text-align: left;
    padding-bottom: 0.5em;
    background-color: #eeecec;
    p {
      margin-top: 0;
      padding-top: 1em;
      font-size: 0.8rem;
    }
  }
}

@media screen and (max-width: 900px) {
  .container-fluid {
    .back-video {
      .text-overlay {
        h1 {
          font-size: 3rem;
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .container-fluid {
    .back-video {
      .text-overlay {
        h1 {
          font-size: 2rem;
        }
      }
    }
  }
}

</style>

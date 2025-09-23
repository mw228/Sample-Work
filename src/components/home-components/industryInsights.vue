<template>

  <section class="row insightHome">
    <div class="col-sm-6 tileSectionHd ">
      <h2>Industry Insights</h2>
      <p>View All</p>
      
    </div>
    <!-- <div class="container text-center my-3"> 
      
      <div class="row mx-auto my-auto justify-content-center">  -->

      <article class="row newsSlideShow">
        <div id="newsCarousel" class="carousel slide" data-bs-ride="carousel"> 
          <div class="newsButton"> 
            <a class="carousel-control-prev" href="#newsCarousel" role="button" data-bs-slide="prev"> 
              <span class="carousel-control-prev-icon" aria-hidden="true"></span> 
            </a> 
            <a class="carousel-control-next" href="#newsCarousel" role="button" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span> 
            </a> 
          </div>
          <div class="carousel-inner" role="listbox"> 
            <div class="carousel-item active">
              <div class="col-md-3 carContent"> 
                <div class="imgCard">
                  <a href="#">
                    <img src="../../img/img1.png" class="img-responsive">
                  </a>
              </div>
              <div class="textCard">
                <p>DMV Hit Rates: 1% Matters to Parking Authorities </p>
                <a>Learn More</a>
              </div> 
              </div> 
              </div> 
              <div class="carousel-item"> 
                <div class="col-md-3 carContent"> 
                  <div class="imgCard">
                    <a href="#">
                      <img src="../../img/img2.png" class="img-responsive">
                    </a>
                </div>
                <div class="textCard">
                  <p>DMV Hit Rates: 1% Matters to Parking Authorities </p>
                  <a>Learn More</a>
                </div> 
                </div> 
              </div> 
              <div class="carousel-item"> 
                <div class="col-md-3 carContent"> 
                  <div class="imgCard">
                    <a href="#">
                      <img src="../../img/img3.png" class="img-responsive">
                    </a>
                </div>
                <div class="textCard">
                  <p>DMV Hit Rates: 1% Matters to Parking Authorities </p>
                  <a>Learn More</a>
                </div> 
                </div> 
              </div> 
              <div class="carousel-item"> 
                <div class="col-md-3 carContent"> 
                  <div class="imgCard">
                    <a href="#">
                      <img src="../../img/img2.png" class="img-responsive">
                    </a>
                </div>
                <div class="textCard">
                  <p>Tax Amnesty Programs: 10 Best Practices</p>
                  <a>Learn More</a>
                </div> 
                </div> 
              </div> 
              <!-- <div class="carousel-item"> 
                <div class="col-md-3 carContent"> 
                  <div class="imgCard">
                    <a href="#">
                      <img src="./img/img3.png" class="img-responsive">
                    </a>
                </div>
                <div class="textCard">
                  <p>Our Recommendations for Improving the Nation’s Student Loan System</p>
                  <a>Read the Blog</a>
                </div> 
                </div> 
              </div>  -->
              <!-- <div class="carousel-item"> 
                <div class="col-md-3 carContent"> 
                  <div class="imgCard">
                    <a href="#">
                      <img src="./img/img3.png" class="img-responsive">
                    </a>
                </div>
                <div class="textCard">
                  <p>DMV Hit Rates: 1% Matters to Parking Authorities </p>
                  <a>Learn More</a>
                </div>
                </div> 
              </div>  -->
              
            </div> 
          
          </div> 

        </article>

  <!-- 
        </div> 
        
  </div> -->

  </section>
            

          

            <!-- <script>
            //   $('#newsCarousel').carousel({
            //   interval: 100000
            // })
            
            // $('.carousel .item').each(function(){
            //   var next = $(this).next();
            //   if (!next.length) {
            //     next = $(this).siblings(':first');
            //   }
            //   next.children(':first-child').clone().appendTo($(this));
              
            //   if (next.next().length>0) {
            //     next.next().children(':first-child').clone().appendTo($(this));
            //   }
            //   else {
            //     $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
            //   }
            // });
            </script>

            <script>
              let items = document.querySelectorAll('.carousel .carousel-item')

  items.forEach((el) => {
      const minPerSlide = 4
      let next = el.nextElementSibling
      for (var i=1; i<minPerSlide; i++) {
          if (!next) {
              // wrap carousel by using first child
            next = items[0]
          }
          let cloneChild = next.cloneNode(true)
          el.appendChild(cloneChild.children[0])
          next = next.nextElementSibling
      }
  })

            </script> -->
          
</template>

<!-- <script> -->
            //   $('#newsCarousel').carousel({
            //   interval: 100000
            // })
            
            // $('.carousel .item').each(function(){
            //   var next = $(this).next();
            //   if (!next.length) {
            //     next = $(this).siblings(':first');
            //   }
            //   next.children(':first-child').clone().appendTo($(this));
              
            //   if (next.next().length>0) {
            //     next.next().children(':first-child').clone().appendTo($(this));
            //   }
            //   else {
            //     $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
            //   }
            // });
            <!-- </script> -->

            <script>
              let items = document.querySelectorAll('.carousel .carousel-item')

  items.forEach((el) => {
      const minPerSlide = 4
      let next = el.nextElementSibling
      for (var i=1; i<minPerSlide; i++) {
          if (!next) {
              // wrap carousel by using first child
            next = items[0]
          }
          let cloneChild = next.cloneNode(true)
          el.appendChild(cloneChild.children[0])
          next = next.nextElementSibling
      }
  })

            </script>
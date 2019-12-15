<template>
  <mdb-container id="dove mb-5">
    <mdb-carousel class="caro" :interval="8000" slide :items="items" controlls></mdb-carousel>

    <h3 class="text-center">Latest Products</h3>
    <mdb-row>
      <mdb-col
        mt="3"
        id="dark"
        class="col-sm-12 col-lg-3 col-md-6 mb-4 text-center"
        v-for="product in products.slice(-4)"
        :key="product.id"
      >
        <img class="my-image" :src="product.image" />
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbCarousel, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
import axios from 'axios';

export default {
  name: 'CarouselPage',
  components: {
    mdbRow,
    mdbCol,
    mdbCarousel,
    mdbContainer,
  },
  data() {
    return {
      products: null,
      items: [
        {
          img: true,
          src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg',
        },
        {
          img: true,
          src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg',
        },
        {
          img: true,
          src: 'https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg',
        },
      ],
    };
  },
  mounted() {
    axios.get('/products').then(res => {
      this.products = res.data.products;
    });
  },
};
</script>

<style>
.caro {
  width: 75%;
  padding-top: 10px;
  margin: 0 auto;
  padding-bottom: 2em;
}
#dove {
  width: 100%;
}
.my-image {
  max-width: 220px !important;
  min-width: auto !important;
  max-height: 220px !important;
  min-height: auto !important;
  border-radius: 3% !important;
  -webkit-box-shadow: 0px 3px 38px -8px rgba(3, 23, 247, 0.88) !important;
  -moz-box-shadow: 0px 3px 38px -8px rgba(3, 23, 247, 0.88) !important;
  box-shadow: 0px 3px 38px -8px rgba(3, 23, 247, 0.88) !important;
}
</style>

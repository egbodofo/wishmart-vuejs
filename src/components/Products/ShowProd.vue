<template>
  <mdb-container>
    <mdb-row>
      <mdb-col class="colo text-center mt-4" md="6">
        <div>
          <img class="my-image" :src="image" />
        </div>

        <mdb-btn @click="addToCart(product)" class="btn btn-success">
          Add to cart
          <span>
            <mdb-icon title="Add to cart" icon="shopping-cart" />
          </span>
        </mdb-btn>
      </mdb-col>

      <mdb-col class="colo text-center mt-4" md="6">
        <p>
          Name:
          <strong>{{ name }}</strong>
        </p>
        <hr />

        <p>Brand: {{ brand }}</p>
        <hr />

        <p>
          Price: ₦
          {{ price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}
        </p>

        <hr />

        <p>Description: {{ description }}</p>
        <hr />

        <div class="top" v-if="owner === this.user.sub">
          <p>
            <router-link :to="path">
              <a class="btn btn-info">Edit</a>
            </router-link>
          </p>

          <button @click="deleteProduct" class="btn btn-danger">Delete</button>
        </div>
        <!-- </div> -->

        <router-link to="/products" class="btn btn-sm btn-success">Back to product</router-link>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import axios from 'axios';
import cookie from 'js-cookie';
import { mdbContainer, mdbCol, mdbRow, mdbIcon, mdbBtn } from 'mdbvue';

export default {
  name: 'Product',

  data() {
    return {
      product: [],
      name: '',
      price: '',
      image: '',
      brand: '',
      description: '',
      user: '',
      owner: '',
    };
  },
  components: {
    mdbContainer,
    mdbCol,
    mdbRow,
    mdbIcon,
    mdbBtn,
  },
  computed: {
    token() {
      return this.$store.getters.idToken;
    },
    auth() {
      return this.$store.getters.isAuthenticated;
    },
    path() {
      return `/edit/${this.$route.params.id}`;
    },
  },
  methods: {
    deleteProduct() {
      axios
        .delete(`/product/${this.$route.params.id}`, {
          headers: {
            Authorization: cookie.get('token'),
          },
        })
        .then(res => {
          this.$router.push('/products');
        })
        .catch(error => console.log(error));
    },
    addToCart(product) {
      alert('Item added to cart!!!');
      this.$store.commit('addToCart', product);
    },
  },
  mounted() {
    const authUser = cookie.get('user');
    if (authUser) {
      this.user = JSON.parse(authUser);
      // console.log(this.user);
    }
    axios.get(`/product/${this.$route.params.id}`).then(res => {
      this.product = res.data.product;
      this.owner = res.data.product.owner;
      this.name = res.data.product.name;
      this.price = res.data.product.price;
      this.image = res.data.product.image;
      this.brand = res.data.product.brand;
      this.description = res.data.product.description;
    });
  },
};
</script>

<style scoped>
.top {
  margin-bottom: 0.8px;
}
.top {
  width: 100%;
  justify-content: space-between;
}
.my-image {
  max-width: 280px !important;
  max-height: auto !important;
  min-width: 220px !important;
  min-height: 220px !important;
  border-radius: 3% !important;
  -webkit-box-shadow: 0px 3px 38px -8px rgba(3, 23, 247, 0.88) !important;
  -moz-box-shadow: 0px 3px 38px -8px rgba(3, 23, 247, 0.88) !important;
  box-shadow: 0px 3px 38px -8px rgba(3, 23, 247, 0.88) !important;
}
.colo {
  width: 100%;
  margin: 0 auto;
  justify-content: center;
}
</style>

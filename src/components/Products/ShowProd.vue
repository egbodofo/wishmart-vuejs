<template>
  <mdb-container>
    <!-- <div class="show"> -->
    <mdb-row class="pt-3">
      <mdb-col>
        <img class="my-image" :src="image" />
      </mdb-col>

      <mdb-col>
        <div>
          <h3>
            Name:
            <strong>{{ name }}</strong>
          </h3>
          <hr />

          <h4>Brand: {{ brand }}</h4>
          <hr />

          <h5>
            Price: ₦
            {{ price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}
          </h5>

          <hr />
          <div class="top" v-if="owner === this.user.sub">
            <p>
              <router-link :to="path">
                <a class="btn btn-info">Edit</a>
              </router-link>
            </p>

            <button @click="deleteProduct" class="btn btn-danger">Delete</button>
          </div>
        </div>

        <router-link to="/products" class="btn btn-success">Back to product</router-link>
      </mdb-col>
    </mdb-row>
    <!-- </div> -->
  </mdb-container>
</template>

<script>
import axios from 'axios';
import cookie from 'js-cookie';
import { mdbContainer, mdbCol, mdbRow } from 'mdbvue';

export default {
  name: 'Product',

  data() {
    return {
      product: null,
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
  max-width: 350px !important;
  max-height: auto !important;
  min-width: 220px !important;
  min-height: 220px !important;
  border-radius: 3% !important;
  -webkit-box-shadow: 0px 3px 38px -8px rgba(3, 23, 247, 0.88) !important;
  -moz-box-shadow: 0px 3px 38px -8px rgba(3, 23, 247, 0.88) !important;
  box-shadow: 0px 3px 38px -8px rgba(3, 23, 247, 0.88) !important;
}
.row {
  width: 70%;
}
</style>

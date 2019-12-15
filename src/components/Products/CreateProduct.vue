<template>
  <!-- Material form login -->
  <mdb-container>
    <mdb-row class="d-flex justify-content-center mb-5 py-3 px-5">
      <mdb-col class="mt-3" sm="12" md="8" lg="6">
        <mdb-card>
          <mdb-card-body>
            <form @submit.prevent="onSubmit">
              <p class="h4 text-center py-2">Create New Product</p>
              <div class="grey-text">
                <mdb-input
                  required
                  label="Name"
                  icon="user"
                  v-model="name"
                  type="text"
                />
                <mdb-input
                  required
                  label="Price"
                  icon="coins"
                  v-model="price"
                  type="number"
                />
                <mdb-input
                  required
                  label="Image"
                  icon="image"
                  v-model="image"
                  type="text"
                />
                <mdb-input
                  required
                  label="Brand"
                  icon="clone"
                  v-model="brand"
                  type="text"
                />
                <mdb-input
                  required
                  label="Description"
                  icon="info"
                  v-model="description"
                  type="text"
                />
              </div>
              <div class="text-center py-2 mt-2">
                <mdb-btn color="cyan" type="submit">
                  Submit
                </mdb-btn>
              </div>
            </form>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </mdb-container>
  <!-- Material form login -->
</template>

<script>
import axios from 'axios';
import cookie from 'js-cookie';
import {
  mdbInput,
  mdbCard,
  mdbCol,
  mdbRow,
  mdbContainer,
  mdbCardBody,
  mdbBtn,
} from 'mdbvue';
export default {
  data() {
    return {
      name: '',
      price: '',
      image: '',
      brand: '',
      description: '',
    };
  },
  name: 'Basic',
  components: {
    mdbInput,
    mdbCard,
    mdbCol,
    mdbRow,
    mdbContainer,
    mdbCardBody,
    mdbBtn,
  },
  methods: {
    onSubmit() {
      const formData = {
        name: this.name,
        price: this.price,
        image: this.image,
        brand: this.brand,
        description: this.description,
      };
      axios
        .post('/products', formData, {
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
};
</script>

<style scoped>
.top {
  text-align: center;
}
.log {
  width: 38%;
  margin: 25px auto;
}
/* .formss {
  margin-bottom: 5em;
} */
</style>

<template>
  <!-- Material form login -->
  <mdb-container>
    <mdb-row class="d-flex justify-content-center mb-5 py-3 px-5">
      <mdb-col class="mt-3" sm="12" md="8" lg="6">
        <mdb-card>
          <mdb-card-body>
            <form @submit.prevent="onSubmit">
              <p class="h4 text-center py-2">Edit</p>
              <div class="grey-text">
                <mdb-input
                  required
                  label="Name"
                  icon="user"
                  v-model="name"
                  type="text"
                  value="name"
                />
                <mdb-input
                  required
                  label="Price"
                  icon="coins"
                  v-model="price"
                  type="number"
                  value="price"
                />
                <mdb-input
                  required
                  label="Image"
                  icon="image"
                  v-model="image"
                  type="text"
                  value="image"
                />
                <mdb-input
                  required
                  label="Brand"
                  icon="clone"
                  v-model="brand"
                  type="text"
                  value="brand"
                />
                <mdb-input
                  required
                  label="Description"
                  icon="info"
                  v-model="description"
                  type="text"
                  value="description"
                />
              </div>
              <div class="text-center py-2 mt-2">
                <mdb-btn color="cyan" type="submit">Submit</mdb-btn>
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
  mounted() {
    axios
      .get(`/product/${this.$route.params.id}`)
      .then(res => {
        this.name = res.data.product.name;
        this.price = res.data.product.price;
        this.image = res.data.product.image;
        this.brand = res.data.product.brand;
        this.description = res.data.product.description;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    onSubmit() {
      const editData = {
        name: this.name,
        price: this.price,
        image: this.image,
        brand: this.brand,
        description: this.description,
      };
      // console.log(editData);
      const token = cookie.get('token');
      axios
        .patch(`/product/${this.$route.params.id}`, editData, {
          headers: {
            Authorization: cookie.get('token'),
          },
        })
        .then(res => {
          this.$router.push(`/product/${this.$route.params.id}`);
        })
        .catch(error => console.log(error));
    },
  },
};
</script>

<style scoped>
.log {
  width: 40%;
  margin: 25px auto;
}
/* .formss {
  margin-bottom: 5em;
} */
</style>

<template>
  <!-- Material form login -->
  <mdb-container>
    <mdb-row class="d-flex justify-content-center mb-5 py-3 px-5">
      <mdb-col class="mt-3" sm="12" md="8" lg="6">
        <mdb-card>
          <mdb-card-body>
            <form @submit.prevent="onSubmit">
              <p class="h4 text-center py-2">Login</p>
              <div class="grey-text">
                <mdb-input
                  required
                  label="email"
                  icon="envelope"
                  v-model="email"
                  type="email"
                />
                <mdb-input
                  required
                  label="password"
                  icon="lock"
                  v-model="password"
                  type="password"
                />
              </div>
              <div class="text-center py-2 mt-2">
                <mdb-btn color="cyan" type="submit">
                  Login
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
      email: '',
      password: '',
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
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch('login', {
        email: formData.email,
        password: formData.password,
      });
    },
  },
};
</script>

<style scoped>
.top {
  text-align: center;
}
.log {
  width: 30%;
  margin: 25px auto;
}
p {
  padding-top: 10px;
}
</style>

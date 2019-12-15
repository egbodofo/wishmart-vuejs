<template>
  <!-- Material form login -->
  <mdb-container>
    <mdb-row class="d-flex justify-content-center mb-5 py-3 px-5">
      <mdb-col class="mt-3" sm="12" md="8" lg="6">
        <mdb-card>
          <mdb-card-body>
            <form @submit.prevent="onSubmit">
              <h1 class="top">Membership Verification</h1>

              <h5 class="top">
                Confirm your account with the code you received on your
                registered email!
              </h5>

              <div class="grey-text">
                <mdb-input
                  required
                  label="email"
                  icon="envelope"
                  v-model="name"
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
                  Verify
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
      code: '',
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
        code: this.code,
      };
      // console.log(formData);
      axios
        .post('/verify', formData)
        .then(res => {
          this.$router.push('/login');
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
.code {
  width: 30%;
  margin: 25px auto;
}
</style>

<template>
  <div class="push-up">
    <mdb-footer color="indigo" id="MyFoot" class="font-small">
      <div class="footer-copyright text-center py-3 font-small">
        <mdb-container fluid>
          &copy; 2019 Copyright:
          <h5 class="text-monospace">Wishmart Designed by Oluwafemi Egbodofo with Stutord</h5>
        </mdb-container>
      </div>
    </mdb-footer>
  </div>
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
export default {
  name: 'FooterPage',
  components: {
    mdbFooter,
    mdbContainer,
  },
};
</script>

<style scooped>
#MyFoot {
  background-color: #0b3dc1;
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}
.push-up {
  margin-top: 5em;
}
</style>

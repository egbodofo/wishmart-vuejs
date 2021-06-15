<template>
  <div id="wishmart-footer">
    <mdb-footer color="indigo" id="MyFoot" class="font-small">
      <div class="footer-copyright text-center py-3 font-small">
        <mdb-container fluid>
          &copy; 2019:
          <p class="text-monospace">Wishmart Designed by Oluwafemi Egbodofo with Stutord</p>
        </mdb-container>
      </div>
    </mdb-footer>
  </div>
</template>

<script>
import { mdbFooter, mdbContainer } from 'mdbvue';
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
.wishmart-footer {
  padding-top: 1em;
}
</style>

<template>
  <div class="fixed-center text-center bg-grey-10">
    <p class="bg-grey-10">
      <img
        src="~assets/phase 2.jpg" height="600" length="600"
      >
    </p>
    <p class="text-faded bg-grey-10">Sorry, nothing here...<strong>(404)</strong></p>
    <q-btn
      color="secondary"
      style="width:200px;"
      @click="$router.push('/')"
    >Go back</q-btn>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>

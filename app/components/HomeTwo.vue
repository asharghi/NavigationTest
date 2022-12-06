<template>
  <Page>
    <ActionBar>
      <Label text="Home" />
    </ActionBar>

    <GridLayout>
      <Label @tap="goToPreviousPage" class="info" text="Go back" />
    </GridLayout>
  </Page>
</template>
<script>
export default {
  methods: {
    goToPreviousPage() {
      this.$navigator.navigate("Home", {
        clearHistory: true,
        transition: "slideRight",
      });
    },
  },
};
</script>
<style scoped lang="scss">
.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>

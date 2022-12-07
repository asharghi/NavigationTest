<template>
  <Page>
    <ActionBar>
      <Label text="Home" />
    </ActionBar>

    <GridLayout>
      <Label
        @tap="$goTo({ name: 'Home', back: true, clearHistory: true })"
        class="info"
        text="Go back"
      />
    </GridLayout>
  </Page>
</template>
<style scoped lang="scss">
.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>

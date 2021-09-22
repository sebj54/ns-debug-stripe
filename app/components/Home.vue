<template>
    <Page>
        <ActionBar>
            <Label text="Home"/>
        </ActionBar>

        <GridLayout>
            <CreditCardView/>
        </GridLayout>
    </Page>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>

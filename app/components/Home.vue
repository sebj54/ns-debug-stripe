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

    Page {
        background-color: #f4f9fe;

        .ns-dark & {
            background-color: #303030;
        }
    }

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

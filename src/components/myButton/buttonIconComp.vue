<template>
    <button class="button_icon">
        <p class="button_icon-txt">See More Product</p>
        <p class="button_icon-icon">></p>
    </button>
</template>

<style lang="scss" scoped>

.button_icon{
    padding: 8px 11px;
    border: none;
    border-radius: 37px;
    background: $color-main;
    
    .button_icon-txt{
        display: inline-block;
        font-family: $font;
        font-size: $font_size-litle;
        font-weight: 500;
        color: $color-white;
    }

    .button_icon-icon{
        display: inline-block;
        background-color: $color-white;
        color: $color-main;
    }
}

</style>

<script>

</script>
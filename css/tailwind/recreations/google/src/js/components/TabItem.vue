<template>
    <div :class="{ 'border-blue': selected, 'border-grey-lighter': !selected }" class="border-b-2">
        <a @click="$emit('click', self)" class="block text-grey-dark hover:text-grey-darker no-underline pb-3 px-4" href="#" v-text="name"></a>
    </div>
</template>

<script>
    export default {
        props: ['name', 'selected'],

        data: () => ({
            whatever: false
        })
    }
</script>

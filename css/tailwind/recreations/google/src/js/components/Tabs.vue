<template>
    <div class="mt-6 text-sm flex justify-between">
        <div class="flex">
            <div
                v-for="tab in tabsOnSide('left')"
                :key="tab.name"
                :name="tab.name"
                :selected="tab.selected"
                :class="{ 'border-b-2 border-blue': tab.selected, 'border-b-1 border-grey-light': !tab.selected }"
            >
                <a @click="select(tab)" class="block self-end text-grey-dark hover:text-grey-darker no-underline pb-3 px-4" href="#" v-text="tab.name"></a>
            </div>
        </div>

        <div class="flex">
            <div
                v-for="tab in tabsOnSide('right')"
                :key="tab.name"
                :name="tab.name"
                :selected="tab.selected"
                :class="{ 'border-b-2 border-blue': tab.selected, 'border-b-1 border-grey-light': !tab.selected }"
            >
                <a @click="select(tab)" class="block self-end text-grey-dark hover:text-grey-darker no-underline pb-3 px-4" href="#" v-text="tab.name"></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            tabs: [
                { name: 'All', position: 'left', selected: true },
                { name: 'News', position: 'left', selected: false },
                { name: 'Videos', position: 'left', selected: false },
                { name: 'Maps', position: 'left', selected: false },
                { name: 'Images', position: 'left', selected: false },
                { name: 'More', position: 'left', selected: false },
                { name: 'Settings', position: 'right', selected: false },
                { name: 'Tools', position: 'right', selected: false },
            ],
        }),

        methods: {
            select(item) {
                this.tabs.map(each => each.selected = false)
                this.tabs[this.tabs.indexOf(item)].selected = true
            },

            tabsOnSide(side) {
                return this.tabs.filter(tab => tab.position == side)
            },
        }
    }
</script>

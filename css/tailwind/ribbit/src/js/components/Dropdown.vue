<template>
  <div class="relative" v-click-outside="clickOutside">
    <div
      @click="open = !open"
      class="px-2 py-1 flex items-center justify-between h-full border border-gray-300 rounded-md cursor-pointer select-none focus:outline-none focus:border-blue-500"
      :class="{'hover:border-gray-400': !open}"
      tabindex="0"
      @keydown.space="open = !open"
    >
      <slot></slot>

      <div class="ml-2">
        <svg v-if="open" class="w-3 h-3 text-gray-600" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 15l7-7 7 7"></path></svg>
        <svg v-else class="w-3 h-3 text-gray-600" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg>
      </div>
    </div>

    <div
      v-if="open"
      class="mt-1 absolute z-10 overflow-hidden bg-white border border-gray-300 rounded-md"
      :class="[{'right-0': side == 'right'}, widthClass]"
    >
      <slot name="dropdown"></slot>
    </div>
  </div>
</template>

<script>
  import vClickOutside from 'v-click-outside'

  export default {
    directives: {
      clickOutside: vClickOutside.directive,
    },

    props: {
      side: {
        default: 'left',
        type: String,
        required: false,
      },

      widthClass: {
        type: String,
        required: true,
      }
    },

    data: () => ({
      open: false,
    }),

    mounted () {
      document.addEventListener('keydown', event => {
        // Escape
        if (event.code === 'Escape') {
          this.open = false
        }
      })
    },

    methods: {
      clickOutside () {
        if (!this.open) {
          return
        }

        this.open = false
      }
    },
  }
</script>

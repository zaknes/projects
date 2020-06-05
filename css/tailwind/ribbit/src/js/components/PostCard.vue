<template>
  <div class="flex overflow-hidden border border-gray-400 rounded-md">
    <div class="w-12 min-h-full bg-gray-100">
      <div class="py-2 flex flex-col items-center justify-center">
        <div class="p-1 rounded cursor-pointer hover:bg-gray-300">
          <svg class="w-4 h-4 text-brand-500" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20"><path stroke-width="1" fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </div>

        <div class="text-xs font-bold text-gray-800">2.3k</div>

        <div class="p-1 rounded cursor-pointer hover:bg-gray-300">
          <svg class="w-4 h-4 text-gray-500" stroke="currentColor" fill="currentColor" viewBox="0 0 20 20"><path stroke-width="1" fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        </div>
      </div>
    </div>

    <div class="w-full text-gray-700 bg-white">
      <div class="p-2 space-x-1 flex items-center text-xs">
        <a class="flex items-center" href="#">
          <div class="w-5 h-5 overflow-hidden rounded-full">
            <img class="w-5 h-5" src="https://b.thumbs.redditmedia.com/tAT1hlAs4s7wGyszOHRrTVGNOnyZZWazTv6QEtlUHiQ.png" alt="Subribbit logo">
          </div>

          <span class="ml-1 font-bold text-gray-800 hover:underline">r/cats</span>
        </a>

        <div class="text-gray-600">
          &middot; Posted by <a href="#" class="hover:underline hover:text-gray-800">u/zaknesler</a> <a href="#" class="hover:underline hover:text-gray-800">7 hours ago</a>
        </div>
      </div>

      <a href="#" class="block">
        <div class="mx-2 mb-3 text-lg font-medium leading-tight text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </div>

        <div class="mt-2">
          <img class="block w-full h-auto" :src="imageUrl" alt="Image">
        </div>

        <div class="p-1 space-x-1 flex items-center text-xs font-bold text-gray-600">
          <a href="#" class="px-1 py-px flex items-center hover:bg-gray-200 rounded-sm">
            <svg class="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path></svg>
            <span class="ml-1">21 Comments</span>
          </a>
          <a href="#" class="px-1 py-px flex items-center hover:bg-gray-200 rounded-sm">
            <svg class="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path></svg>
            <span class="ml-1">Save</span>
          </a>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      imageUrl: {
        default: 'https://placekitten.com/800/600',
        type: String,
      }
    },
  }
</script>

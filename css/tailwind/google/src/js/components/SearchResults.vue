<template>
    <div class="-mb-6">
        <div v-for="item in items" class="mb-6">
            <a class="text-lg text-blue no-underline hover:underline" href="#" v-text="item.title"></a>
            <div class="text-sm text-green" v-text="item.url"></div>

            <div class="text-sm" v-text="item.body"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        title: 'Google',
                        url: 'https://google.com',
                        body: 'Search the world\'s information, including webpages, images, videos and more. Google has many special features to help you find exactly what you\'re looking...'
                    },
                    {
                        title: 'Example',
                        url: 'https://example.com',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus omnis, placeat repudiandae officia fugit unde maxime expedita, vero dolorum, doloremque dolores beatae amet veritatis dolore explicabo at reiciendis totam.'
                    },
                    {
                        title: 'Lorem Ipsum',
                        url: 'https://loremipsum.org',
                        body: 'Vivamus commodo fringilla metus. Suspendisse gravida leo libero, ut gravida urna rutrum a. Maecenas odio lacus, rhoncus ac maximus sit amet, tristique et eros. Morbi pulvinar turpis ut felis ultricies, euismod accumsan tellus sagittis.'
                    },
                    {
                        title: 'Lorem Ipsum',
                        url: 'https://loremipsum.org',
                        body: 'Vivamus commodo fringilla metus. Suspendisse gravida leo libero, ut gravida urna rutrum a. Maecenas odio lacus, rhoncus ac maximus sit amet, tristique et eros. Morbi pulvinar turpis ut felis ultricies, euismod accumsan tellus sagittis.'
                    },
                    {
                        title: 'Lorem Ipsum',
                        url: 'https://loremipsum.org',
                        body: 'Vivamus commodo fringilla metus. Suspendisse gravida leo libero, ut gravida urna rutrum a. Maecenas odio lacus, rhoncus ac maximus sit amet, tristique et eros. Morbi pulvinar turpis ut felis ultricies, euismod accumsan tellus sagittis.'
                    },
                    {
                        title: 'Lorem Ipsum',
                        url: 'https://loremipsum.org',
                        body: 'Vivamus commodo fringilla metus. Suspendisse gravida leo libero, ut gravida urna rutrum a. Maecenas odio lacus, rhoncus ac maximus sit amet, tristique et eros. Morbi pulvinar turpis ut felis ultricies, euismod accumsan tellus sagittis.'
                    },
                    {
                        title: 'Lorem Ipsum',
                        url: 'https://loremipsum.org',
                        body: 'Vivamus commodo fringilla metus. Suspendisse gravida leo libero, ut gravida urna rutrum a. Maecenas odio lacus, rhoncus ac maximus sit amet, tristique et eros. Morbi pulvinar turpis ut felis ultricies, euismod accumsan tellus sagittis.'
                    },
                    {
                        title: 'Lorem Ipsum',
                        url: 'https://loremipsum.org',
                        body: 'Vivamus commodo fringilla metus. Suspendisse gravida leo libero, ut gravida urna rutrum a. Maecenas odio lacus, rhoncus ac maximus sit amet, tristique et eros. Morbi pulvinar turpis ut felis ultricies, euismod accumsan tellus sagittis.'
                    },
                ]
            }
        }
    }
</script>

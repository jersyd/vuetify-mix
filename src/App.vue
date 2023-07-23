<template>
    <HelloWorld :title="title"/>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue';

export default {
    components: {
        HelloWorld,
    },
    data() {
        return {
            title: 'Welcome to Vuetify with Laravel Mix!'
        }
    }
};
</script>
    
<style>
/* Add CSS styles for the component if needed */
</style>
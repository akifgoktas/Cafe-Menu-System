<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <div class="area-right-top">
        <h5 class="area-right-title">{{ route.meta.title }}</h5>
    </div>
</template>

<template>
    <ul class="side_ul">
        <li :class="{ 'li_active': activeGuide?.includes(guide.link) }" v-for="guide of guideSide"
            @click="navigatorGuide(guide)">{{ guide.text }}</li>
    </ul>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vitepress'
import { guideSide } from '../../../config/sider';

const activeGuide = ref('')
const router = useRouter()

activeGuide.value = window.location.href;

const navigatorGuide = (guide: Record<string, any>) => {
    activeGuide.value = guide.link;
    router.go(guide.link);
}
</script>
<style lang="scss" scoped>
@import '../../style/mixin.scss';

.side_ul {
    width: 100%;
    list-style-type: none;
    padding: 0 0;

    .li_active {
        color: #417ff9;
        border-right: 2px solid #417ff9;
    }

    li {
        height: 48px;
        width: 100%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: left;
        @include font-style(14px, 400);
        padding-left: 30px;
        box-sizing: border-box;

        &:hover {
            background-color: #f1f1f1;
        }
    }
}
</style>

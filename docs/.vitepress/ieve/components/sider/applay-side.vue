<template>
    <ul class="side_ul">
        <li :class="{ 'li_active': activeApplay?.includes(applay.link) }" v-for="applay of applaySide"
            @click="navigatorApplay(applay)">{{ applay.text }}</li>
    </ul>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vitepress'
import { applaySide } from '../../../config/sider';

const activeApplay = ref('')
const router = useRouter()

activeApplay.value = window.location.href;

const navigatorApplay = (applay: Record<string, any>) => {
    activeApplay.value = applay.link;
    router.go(applay.link);
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

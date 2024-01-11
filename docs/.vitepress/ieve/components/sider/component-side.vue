<template>
    <ul class="side_ul">
        <li :class="{ 'li_active': activeComponent?.includes(comp.link) }" v-for="comp of componentSide"
            @click="navigatorComponent(comp)">{{ comp.text }}</li>
    </ul>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vitepress'
import { componentSide } from '../../../config/sider';

const activeComponent = ref('')
const router = useRouter()

activeComponent.value = window.location.href;

const navigatorComponent = (comp: Record<string, any>) => {
    activeComponent.value = comp.link;
    router.go(comp.link);
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

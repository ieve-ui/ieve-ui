<template>
    <div class="home_page">

        <eve-head @updated="updatedHead" @back="emits('back')"></eve-head>
        <div></div>
        <div class="home_main">
            <div class="main_aside">
                <guide-aside v-if="activeHead?.includes('guides/')"></guide-aside>
                <component-aside v-if="activeHead?.includes('components/')"></component-aside>
                <applay-aside v-if="activeHead?.includes('applay/')"></applay-aside>
            </div>
            <div class="main_content">
                <Content />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from 'vitepress'
import GuideAside from './sider/guide-side.vue';
import ComponentAside from './sider/component-side.vue';
import ApplayAside from './sider/applay-side.vue';
import EveHead from './head/index.vue';

const activeHead = ref('');

activeHead.value = window.location.href;
const emits = defineEmits(["back"]);

const updatedHead = (val: string) => {
    activeHead.value = val;
}
</script>
<style lang="scss">
@import '../style/mixin.scss';

.home_page {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 55px 12px auto;
    background-color: #f1f1f1;
    overflow-y: auto;

    .home_main {
        width: 100%;
        height: 100%;
        background-color: #fff;
        display: grid;
        grid-template-columns: 260px auto;
        grid-template-rows: 100%;

        .main_aside {
            width: 100%;
            height: 100%;
            border-right: 1px solid #e4e7ed;
            padding-top: 20px;
            box-sizing: border-box;
        }

        .main_content {
            width: 100%;
            height: 100%;
            padding: 0 25px;
            box-sizing: border-box;
        }
    }
}
</style>
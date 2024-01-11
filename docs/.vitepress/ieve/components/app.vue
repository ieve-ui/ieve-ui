<template>
    <home @back="backApp"
        v-if="isHome || activeUrl?.includes('/guides/') || activeUrl?.includes('/components/') || activeUrl?.includes('/applay/')">
    </home>
    <div class="App" v-else>
        <h1>IEVE-UI</h1>
        <p>一套基于Vue3的企业级组件库</p>
        <ul>
            <li @click="quickJump('/guides/introduce')">指南</li>
            <li @click="quickJump('/components/installer')">组件</li>
            <li @click="quickJump('/applay/example')">实践</li>
            <li @click="quickJump('/components/overview')">概览</li>
            <li>
                <a href="https://github.com/mwanglong/ieve-ui" title="GitHub" target="_blank">
                    <!-- <ElIcon :size="20">
                                <component :is="githubLinks.icon" />
                            </ElIcon> -->
                    GitHub
                </a>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vitepress'
import Home from './home.vue';

const isHome = ref(false)
const router = useRouter();
const activeUrl = ref('')

activeUrl.value = window.location.href;

const quickJump = async (link: string) => {
    router.go(link);
    setTimeout(() => {
        isHome.value = true;
    }, 100)
}
const backApp = () => {
    isHome.value = false;
    activeUrl.value = '';
    router.go('/');
}
</script>
<style lang="scss">
.App {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 10%;
    box-sizing: border-box;
    background-image: url("/images/55555-327.jpg");

    h1 {
        font-size: 36px;
        font-weight: 400;
        color: #fff;
    }

    p {
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 50px;
        margin-top: 45px;
        color: #fff;
    }

    ul {
        display: flex;
        list-style-type: none;

        li {
            user-select: none;
            font-size: 18px;
            font-weight: 400;
            font-style: italic;
            cursor: pointer;
            color: #fff;

            a {
                text-decoration: none;
                color: #fff;
            }
        }

        li+li {
            margin-left: 40px;
        }
    }
}
</style>
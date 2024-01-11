<template>
    <div class="home_header">
        <div>
            <h2 @click="backApp">IEveUI</h2>
        </div>
        <div class="nav_box">
            <ul>
                <li v-for="linkItem of linkArr" :class="{ 'li_active': nowPath?.includes(linkItem.crux) }">
                    <a :href="linkItem.link" :title="linkItem.text" @click="linkUpdate(linkItem.link)">
                        <!-- <ElIcon :size="20">
                                <component :is="githubLinks.icon" />
                            </ElIcon> -->
                        {{ linkItem.text }}
                    </a>
                </li>
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
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { linkArr } from '../../../config/head'
import { useRoute, useRouter } from 'vitepress'

const nowPath = ref('');
const emits = defineEmits(["updated", "back"]);
const { path } = useRoute();
const router = useRouter();

nowPath.value = window.location.href;

const linkUpdate = (val: string) => {
    nowPath.value = val;
    emits('updated', val);
}
const backApp = () => {
    emits('back');
}
</script>
<style lang="scss">
@import '../../style/mixin.scss';

.home_header {
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 35px 0 50px;
    box-sizing: border-box;
    border-bottom: 1px solid #e4e7ed;

    .nav_box {
        height: 100%;
    }

    h2 {
        @include font-style(24px, 200);
        cursor: pointer;
    }

    ul {
        height: 100%;
        list-style-type: none;
        display: flex;
        margin: 0 0;

        .li_active {
            color: #417ff9;
            border-bottom: 2px solid #417ff9;

            a {
                color: #417ff9;
            }
        }

        li {
            width: 80px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            a {
                text-decoration: none;
                @include font-style(16px, 400);

                &:hover {
                    color: #417ff9;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
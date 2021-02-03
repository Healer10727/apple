<template>
  <div class="hello">
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <keep-alive >
      <component v-bind:is = "currentTabComponent" class="tab"></component>
    </keep-alive>
  </div>
</template>
<script>
import TabArchive from  '../view/TabArchive';
import TabPosts from '../view/tabPosts.vue';

export default {
  name: "HelloWorld",
  components:{"tab-archive":TabArchive,TabPosts},
  data() {
    return {
      tabs: ["Posts", "Archive"],
      currentTab: "Posts"
    };
  },
  computed:{
    currentTabComponent:function(){
        return 'tab-'+this.currentTab.toLowerCase()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

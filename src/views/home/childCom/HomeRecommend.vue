<template>
  <div class="recommend">
    <ul>
      <li v-for='item in recommend'>
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',

  data () {
    return {
    }
  },

  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {}
}
</script>

<style lang='scss'>
  .recommend {
    width: 100%;
    padding: 6px 0px;
    border-bottom: 6px solid #eee;
    a {text-decoration: none}
    li {list-style: none;}
    ul {
      display: flex;
      li {
        flex:1;
        display: flex;
        justify-content: center;
        img {
          width: 70px;
          height: 70px;
        }
      }
    }
  }
</style>

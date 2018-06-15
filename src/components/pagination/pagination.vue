<template>
   <nav class="page">
    <div class="pagination">
      <span :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(current - 1)">«</a></span>
      <span :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(1)">frist</a></span>
      <span v-for="p in grouplist" :class="{'active': current == p.val}"><a href="javascript:;"
                                                                          @click="setCurrent(p.val)">{{ p.text }}</a>
      </span>
      <span :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(page)">last</a></span>
      <span :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(current + 1)">»</a></span>
      <span style="border:none;margin-left:10px"> 共{{Math.ceil(total/10)}}页</span>
      <span style="border:none;margin-left:10px">跳转到:<input type="text" v-model="inputPage" @input="setCurrent(inputPage)">页</span>
    </div>
  </nav>
</template>
<script>
 export default{
    data(){
      return {
        current: this.currentPage,
        inputPage:1
      }
    },
    props: {
      total: {// 数据总条数
        type: Number,
        default: 0
      },
      display: {// 每页显示条数
        type: Number,
        default: 10
      },
      currentPage: {// 当前页码
        type: Number,
        default: 1
      },
      pagegroup: {// 分页条数
        type: Number,
        default: 5,
        coerce: function (v) {
          v = v > 0 ? v : 5;
          return v % 2 === 1 ? v : v + 1;
        }
      }
    },
    computed: {
      page: function () { // 总页数
        return Math.ceil(this.total / this.display);
      },
      grouplist: function () { // 获取分页页码
        var len = this.page, temp = [], list = [], count = Math.floor(this.pagegroup / 2), center = this.current;
        if (len <= this.pagegroup) {
          while (len--) {
            temp.push({text: this.page - len, val: this.page - len});
          }
          ;
          return temp;
        }
        while (len--) {
          temp.push(this.page - len);
        }
        ;
        var idx = temp.indexOf(center);
        (idx < count) && ( center = center + count - idx);
        (this.current > this.page - count) && ( center = this.page - count);
        temp = temp.splice(center - count - 1, this.pagegroup);
        do {
          var t = temp.shift();
          list.push({
            text: t,
            val: t
          });
        } while (temp.length);
        if (this.page > this.pagegroup) {
          (this.current > count + 1) && list.unshift({text: '...', val: list[0].val - 1});
          (this.current < this.page - count) && list.push({text: '...', val: list[list.length - 1].val + 1});
        }
        return list;
      }
    },
    methods: {
      setCurrent: function (idx) {
        if (this.current != idx && idx > 0 && idx < this.page + 1) {
          this.current = idx;
          this.$emit('pagechange', this.current);
        }
      }
    }
  }
</script>
<style lang="scss">
  .pagination {
    display: table;
    margin: 0 auto;
    /*width: 100%;*/
    // height: 55px;
    margin-right: 30px !important;
    span{
      border: 1px solid #ccc;
      text-align: center;
        display: inline-block;
    cursor: pointer;
        font-size: 14px;
        a{
          display: inline-block;
          color: #fff;
          padding: 3px 10px;
        }
    }
    .active{
      cursor: default;
    color: #fff;
    background: #337ab7;
    border-color: #337ab7 1px solid ;
    }
    input{
      width: 20px;
      height: 20px;
      color: #22c9fb;
      font-size: 13px;
      border: none;
      background: none;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      text-align: center;
    }

}

</style>
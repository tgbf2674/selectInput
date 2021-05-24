<template>
  <div>
    <el-tag v-for="tag in value" :key="tag.key" @close="deleteTag(tag.key)" closable>
      {{ `${tag.key}: ${tag.value}` }}
    </el-tag>
    <el-select v-if="!selectValue" v-model="selectValue" filterable>
      <el-option v-for="item in currOptions" v-show="!item.selected" :key="item.value" :label="item.label" :value="item.key"></el-option>
    </el-select>
    <el-input clearable @blur="onConfirmResult" @keyup.enter.native="onConfirmResult" v-else v-model="inputValue">
      <template slot="prepend">{{selectValue}}</template>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'select_input',
  props: {
    options: {
      type: [Array, Object],
      default: ()=> []
    },
    value: {
      type: Array,
      default: ()=> []
    },
    change: {
      type: Function,
      default: ()=> {}
    }
  },
  data() {
    return {
      selectValue: '',
      inputValue: ''
    }
  },
  computed: {
    currValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    },
    currOptions () {
      if(Object.prototype.toString.call(this.options) === '[object Object]'){
        return Object.keys(this.options).map(key => ({
          key,
          value: this.options[key],
          selected: false
        }))
      }else if(Array.isArray(this.options) && this.options.every( item => typeof item ==='string')){
        return this.options.map(item => ({
          key: item,
          value: item,
          selected: false
        }))
      }else {
        return this.options.map(item => ({
          ...item, selected: false
        }))
      }
    }
  },
  methods: {
    deleteTag(key) {
      const index = this.currValue.findIndex(i => i.key ===key)
      this.currOptions.find(item => item.key ===key).selected = false
      this.currValue.splice(index,1)
    },
    onConfirmResult(){
      if(this.inputValue){
        this.$emit('input',[...this.currValue,{key: this.selectValue, value: this.inputValue}])
        this.currOptions.find(item => item.key === this.selectValue).selected = true
      }
      this.selectValue = ''
      this.inputValue = ''
    }
  }
}
</script>

<style scoped>

</style>

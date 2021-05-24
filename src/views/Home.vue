<template>
  <div>
    <baSelectInput :options="fields1.options"></baSelectInput>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      visible: false,
      fields1: [
        {
          key: 'name',
          title: '用户名',
          isRequired: true
        },
        {
          key: 'publishTime',
          title: '发布时间',
          type: 'datetime',
          isRequired: true
        },
        {
          key: 'activeTime',
          title: '活动时间',
          type: 'datetime',
          props: {
            type: 'datetimerange'
          }
        },
        {
          key: 'moreConditions',
          title: '更多条件',
          type: 'selectInput',
          options: {
            a: 1,
            b: 2,
            c: 3
          }
        }
      ]
    }
  }
}
</script>

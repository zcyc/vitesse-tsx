import Mouse from './mouse'

export default defineComponent({
  // 每个 component 只能有一个方法渲染页面，如果 setup return tsx，则 render 方法失效
  setup() {
    const x = ref('Hello Setup')
    return { x }
  },
  render() {
    const y = ref('Hello Render')
    return <><Mouse/>
      <div>{this.x}</div>
      <div>{y.value}</div>
    </>
  },
})

import Mouse from './mouse'

export default defineComponent({
  render() {
    const x = ref('Hello Render')
    return <>
      <Mouse/>
      <div>{x.value}</div>
    </>
  },
})

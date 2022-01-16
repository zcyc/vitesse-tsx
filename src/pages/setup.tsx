import Mouse from './mouse'

export default defineComponent({
  setup() {
    const x = ref('Hello Setup')
    return () => <>
      <Mouse/>
      <div>{x.value}</div>
    </>
  },
})

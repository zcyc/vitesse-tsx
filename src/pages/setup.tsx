import Mouse from './mouse'

export default defineComponent({
  setup() {
    const x = ref('Hello Setup')
    return () => <>
      <Mouse/>
      <div class="animate-bounce">{x.value}</div>
      <div class="rounded bg-green-800">rounded</div>
    </>
  },
})

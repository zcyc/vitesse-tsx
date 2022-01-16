export default defineComponent({
  name: 'Mouse',
  setup() {
    const { x, y } = useMouse()
    return () => <div>hello {x.value},{y.value}</div>
  },
})

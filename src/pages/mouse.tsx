export default defineComponent({
  name: 'Mouse',
  setup() {
    const { x, y } = useMouse()
    return () => <div>mouse at {x.value},{y.value}</div>
  },
})

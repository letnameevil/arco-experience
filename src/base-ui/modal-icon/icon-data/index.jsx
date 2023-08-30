import { ref, defineComponent, watch } from 'vue'
import iconList from './index.js'

export default defineComponent({
  props: {
    keyWord: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const iconMapList = ref(iconList)
    watch(
      () => props.keyWord,
      newValue => {
        iconMapList.value = iconList
        if (newValue) iconMapList.value = iconMapList.value.filter(it => it.iconName.includes(newValue))
      },
    )

    const render = () => {
      const iconClick = (it, event) => {
        if (event.detail === 2) {
          emit('iconEmit', it)
        }
      }

      return (
        <a-row gutter={24} style={{ width: '100%' }}>
          {iconMapList.value.map(it => {
            return (
              <a-col span={6} key={it.iconName}>
                <div
                  onClick={e => iconClick(it, e)}
                  className="icon-box"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px 0' }}
                >
                  {it.component}
                  {it.iconName}
                </div>
              </a-col>
            )
          })}
        </a-row>
      )
    }
    return render
  },
})

import { test } from '@/test'
import VProgressCircular from '@/components/VProgressCircular'
import { compileToFunctions } from 'vue-template-compiler'

test('VProgressCircular.js', ({ mount }) => {
  it('should render component and match snapshot', () => {
    const wrapper = mount(VProgressCircular, {
      propsData: {
        value: 33
      },
      slots: {
        default: [compileToFunctions('<span>content</span>')]
      }
    })

    expect(wrapper.html()).toMatchSnapshot()

    wrapper.setProps({ value: -1 })
    const htmlMinus1 = wrapper.html()

    wrapper.setProps({ value: 0 })
    const html0 = wrapper.html()

    wrapper.setProps({ value: 100 })
    const html100 = wrapper.html()

    wrapper.setProps({ value: 101 })
    const html101 = wrapper.html()

    expect(htmlMinus1).toBe(html0)
    expect(html100).toBe(html101)
    expect(html0).not.toBe(html100)
  })

  it('should render component with color prop and match snapshot', () => {
    const wrapper = mount(VProgressCircular, {
      propsData: {
        value: 33,
        color: 'orange lighten-1'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render component with button prop and match snapshot', () => {
    const wrapper = mount(VProgressCircular, {
      propsData: {
        value: 33,
        button: true
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render component with rotate prop and match snapshot', () => {
    const wrapper = mount(VProgressCircular, {
      propsData: {
        value: 33,
        rotate: 29
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render component with size prop and match snapshot', () => {
    const wrapper = mount(VProgressCircular, {
      propsData: {
        value: 33,
        size: 17
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render component with indeterminate prop and match snapshot', () => {
    const wrapper = mount(VProgressCircular, {
      propsData: {
        indeterminate: true
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render component with width prop and match snapshot', () => {
    const wrapper = mount(VProgressCircular, {
      propsData: {
        value: 33,
        width: 13
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render component with fill prop and match snapshot', () => {
    const wrapper = mount(VProgressCircular, {
      propsData: {
        value: 33,
        fill: 'green lighten-1'
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

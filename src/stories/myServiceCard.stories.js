import MyServiceCard from '@/components/MyServiceCard.vue'

export default {
  title: 'components/MyServiceCard',
  component: MyServiceCard,
  argTypes: {
    title: {
      control: 'text'
    },

    Description: {
      control: 'text'
    },

    button__title: {
      control: 'text'
    }
  }
}

export const Card = {
  render: (args) => {
    return {
      components: {
        MyServiceCard
      },
      setup() {
        return { args }
      },
      template: `<MyServiceCard v-bind="args"></MyServiceCard>`
    }
  },
  args: {
    title: 'titre',
    description: 'description',
    imagealt: 'alt img'
  }
}

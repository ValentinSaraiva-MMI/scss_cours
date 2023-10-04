import MyFavoriteCard from '@/components/MyFavoriteCard.vue'

export default {
  title: 'components/MyFavoriteCard',
  component: MyFavoriteCard,
  argTypes: {
    title: {
      control: 'text'
    },

    description: {
      control: 'text'
    },

    button__title: {
      control: 'text'
    },

    iconName: {
      control: 'select',
      options: ['default', 'fleche']
    },
    iconSize: {
      control: 'select',
      options: ['default', 'big']
    },
    iconColor: {
      control: 'select',
      options: ['default', 'primary']
    }
  }
}

export const Card = {
  render: (args) => {
    return {
      components: {
        MyFavoriteCard
      },
      setup() {
        return { args }
      },
      template: `<MyFavoriteCard v-bind="args"></MyFavoriteCard>`
    }
  },
  args: {
    title: 'titre',
    description: 'description',
    imagesrc: '',
    imagealt: 'Carte représentant les articles favoris, présent dans le hero de la page.'
  }
}

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
    imagesrc: {
      control: 'text'
    },
    imagealt: {
      control: 'text'
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
    prix: '9.15',
    title: 'titre',
    description: 'description',
    imagesrc: '/image/burger.png',
    imagealt: 'Carte représentant les articles favoris, présent dans le hero de la page.'
  }
}

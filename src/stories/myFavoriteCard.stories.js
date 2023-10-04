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
    monnaie: '$',
    prix: '9.15',
    title: 'titre',
    description: 'description',
    imagesrc: '',
    imagealt: 'Carte représentant les articles favoris, présent dans le hero de la page.'
  }
}

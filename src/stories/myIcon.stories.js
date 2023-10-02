import MyIcon from '@/components/elements/MyIcon.vue'

export default {
    title: 'Elements/MyIcon',
    component: MyIcon,
    argTypes:  {
        name : {
            control:'select',
            options :['community', 'ecosysteme', 'documentation', 'support', 'camion', 'ustencile', 'ustencile_crossed', 'facebook', 'twitter', 'linkedin', 'instagram', 'play'],

        },
    }
}





export const Icon = {
    render: (args) => {
        return {
            components: {
                MyIcon,
            },
            setup() {
                return {args} 
            },
            template: `<MyIcon v-bind="args"></MyIcon>`
        }
    },
    args: {
        variant:"default"
    }
}

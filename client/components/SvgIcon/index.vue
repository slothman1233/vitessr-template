<template>
  <svg :class="svgClass" aria-hidden="true" v-on="$attrs">
    <use :xlink:href="iconName" :fill="iconColor" />
  </svg>
</template>

<script lang="ts">
  interface Props {
    iconClass: string;
    className: string;
    iconColor: string;
  }

  export default defineComponent({
    name: 'SvgIcon',
    props: {
      iconClass: {
        type: String,
        required: true,
      },
      className: {
        type: String,
        default: () => '',
      },
      iconColor: {
        type: String,
        default: '#333',
      },
    },
    setup(props: Props) {
      const iconName = computed((): string => `#icon-${props.iconClass}`);
      const svgClass = computed((): string => {
        if (props.className) {
          return 'svg-icon ' + props.className;
        } else {
          return 'svg-icon';
        }
      });

      return {
        iconName,
        svgClass,
      };
    },
  });
</script>

<style scoped>
  .svg-icon {
    width: 4em;
    height: 4em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>

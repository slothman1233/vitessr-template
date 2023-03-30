import { defineComponent, DefineComponent } from 'vue';
declare module '*.vue' {
  const Component: ReturnType<typeof defineComponent>;

  const component: DefineComponent<{}, {}, any>;

  declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $configModel: clientEnv; // configModel
      $ELEMENT: object;
      $myMeta: any;
    }
  }

  export default Component;
}

declare module '*.vue' {
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '*.vue' {
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

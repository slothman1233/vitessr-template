import type { App } from 'vue';
import {
  Affix as AAffix,
  Alert as AAlert,
  Anchor as AAnchor,
  AutoComplete as AAutoComplete,
  Avatar as AAvatar,
  BackTop as ABackTop,
  Badge as ABadge,
  Breadcrumb as ABreadcrumb,
  Button as AButton,
  Calendar as ACalendar,
  Card as ACard,
  Carousel as ACarousel,
  Cascader as ACascader,
  Checkbox as ACheckbox,
  Col as ACol,
  Collapse as ACollapse,
  Comment as AComment,
  ConfigProvider as AConfigProvider,
  DatePicker as ADatePicker,
  Descriptions as ADescriptions,
  Divider as ADivider,
  Drawer as ADrawer,
  Dropdown as ADropdown,
  Empty as AEmpty,
  Form as AForm,
  Grid as AGrid,
  Image as AImage,
  Input as AInput,
  InputNumber as AInputNumber,
  Layout as ALayout,
  List as AList,
  LocaleProvider as ALocaleProvider,
  Mentions as AMentions,
  Menu as AMenu,
  PageHeader as APageHeader,
  Pagination as APagination,
  Popconfirm as APopconfirm,
  Popover as APopover,
  Progress as AProgress,
  Radio as ARadio,
  Rate as ARate,
  Result as AResult,
  Row as ARow,
  Select as ASelect,
  Skeleton as ASkeleton,
  Slider as ASlider,
  Space as ASpace,
  Spin as ASpin,
  Statistic as AStatistic,
  Steps as ASteps,
  Switch as ASwitch,
  Table as ATable,
  Tabs as ATabs,
  Tag as ATag,
  TimePicker as ATimePicker,
  Timeline as ATimeline,
  Tooltip as ATooltip,
  Transfer as ATransfer,
  Tree as ATree,
  TreeSelect as ATreeSelect,
  Typography as ATypography,
  Upload as AUpload,
} from 'ant-design-vue';

const components = [
  AAffix,
  AAlert,
  AAnchor,
  AAutoComplete,
  AAvatar,
  ABackTop,
  ABadge,
  ABreadcrumb,
  AButton,
  ACalendar,
  ACard,
  ACarousel,
  ACascader,
  ACheckbox,
  ACol,
  ACollapse,
  AComment,
  AConfigProvider,
  ADatePicker,
  ADescriptions,
  ADivider,
  ADrawer,
  ADropdown,
  AEmpty,
  AForm,
  AGrid,
  AImage,
  AInput,
  AInputNumber,
  ALayout,
  AList,
  ALocaleProvider,
  AMentions,
  AMenu,
  APageHeader,
  APagination,
  APopconfirm,
  APopover,
  AProgress,
  ARadio,
  ARate,
  AResult,
  ARow,
  ASelect,
  ASkeleton,
  ASlider,
  ASpace,
  ASpin,
  AStatistic,
  ASteps,
  ASwitch,
  ATable,
  ATabs,
  ATag,
  ATimePicker,
  ATimeline,
  ATooltip,
  ATransfer,
  ATree,
  ATreeSelect,
  ATypography,
  AUpload,
];

export function setupAntd(app: App<Element>): void {
  // 设置语言
  // locale.use(lang)
  components.forEach((component: any) => {
    app.use(component);
  });

  // app.use(vant);
}

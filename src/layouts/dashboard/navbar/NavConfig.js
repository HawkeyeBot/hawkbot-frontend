// components
import SvgIconStyle from "../../../components/SvgIconStyle";

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  user: getIcon("ic_user"),
  overview: getIcon("ic_analytics"),
  logs: getIcon("ic_mail"),
  controls: getIcon("ic_kanban"),
};

const sidebarConfig = [
  {
    subheader: "Operating",
    items: [
      { title: "Overview", path: "/operating/overview", icon: ICONS.overview },
      // { title: "Logs", path: "/operating/logs", icon: ICONS.logs },
      // { title: "Controls", path: "/operating/controls", icon: ICONS.controls },
    ],
  },
];

export default sidebarConfig;

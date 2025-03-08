const nestedOptions = [
  {
    label: "PROPHET",
    value: "prophet",
    children: [
      {
        label: "Strategic Planner",
        value: "strategic_planner",
        children: [
          { label: "Flighting - Full access", value: "flighting_full" },
          { label: "Flighting - View only", value: "flighting_view" },
        ],
      },
      {
        label: "Tactical Planner",
        value: "tactical_planner",
        children: [
          { label: "Tactical Dataset Management", value: "tactical_dataset" },
        ],
      },
      {
        label: "Campaign Planner",
        value: "campaign_planner",
        children: [
          {
            label: "Campaign Planner Dataset Management",
            value: "campaign_dataset",
          },
        ],
      },
      {
        label: "Insights Dashboard",
        value: "insights_dashboard",
        children: [
          {
            label: "Insights Dashboard Configurator",
            value: "insights_config",
          },
        ],
      },
      { label: "Insights Reports", value: "insights_reports" },
      { label: "Portal Admin", value: "portal_admin" },
    ],
  },
];

export default nestedOptions;
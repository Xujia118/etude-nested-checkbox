const nestedOptions = [
  {
    label: "ADAPTA",
    value: "adapta",
    children: [
      { label: "Data Scorecard", value: "data_scorecard" },
      { label: "ADAPTA Upload", value: "adapta_upload" },
      { label: "ADAPTA Review", value: "adapta_review" },
    ],
  },
  {
    label: "AMP",
    value: "amp",
    children: [{ label: "Agile Learning", value: "agile_learning" }],
  },
  {
    label: "PROPHET",
    value: "prophet",
    children: [
      {
        label: "Strategic Planner",
        value: "strategic_planner",
        children: [{ label: "Strategic View only", value: "strategic_view_only" }],
      },
      {
        label: "Strategic Multi KPI",
        value: "strategic_multi_kpi",
        children: [{ label: "Strategic View only", value: "strategic_view_only" }],
      },
      {
        label: "Tactical Planner",
        value: "tactical_planner",
        children: [],
      },
      {
        label: "Campaign Planner",
        value: "campaign_planner",
        children: [],
      },
      {
        label: "Insights Dashboard",
        value: "insights_dashboard",
        children: [],
      },
      {
        label: "Insights Reports",
        value: "insights_reports",
        children: [],
      },
    ],
  },
  {
    label: "Other",
    value: "other",
    children: [{ label: "Ask Genome", value: "ask_genome" }],
  },
];

export default nestedOptions;

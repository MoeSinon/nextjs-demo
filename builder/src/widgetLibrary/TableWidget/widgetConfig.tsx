import { ReactComponent as TableWidgetIcon } from "@/assets/widgetCover/table.svg"
import { WidgetConfig } from "@/widgetLibrary/interface"
import { useTranslation } from "next-i18next"
import { tansTableDataToColumns } from "@/widgetLibrary/TableWidget/utils"
const { t } = useTranslation();
const originData = [
  {
    id: 1,
    name: "Gerard Gislason",
    company: "Ameliorated explicit open system",
    phone: "(701) 882-0009 x344",
    address: "2741 Terry Glen Apt. 601",
  },
  {
    id: 2,
    name: "Anne Lockman",
    company: "Customizable explicit solution",
    phone: "689.992.6307",
    address: "191 Schimmel Cliff Apt. 474",
  },
  {
    id: 3,
    name: "Sue Hamill",
    company: "Proactive mission-critical open architecture",
    phone: "(686) 565-4880",
    address: "27002 Wilfredo Hill Suite 824",
  },
  {
    id: 4,
    name: "Rosalie Keebler",
    company: "De-engineered bi-directional hardware",
    phone: "1-379-349-3046 x439",
    address: "29436 Keebler RestSuite 320",
  },
  {
    id: 5,
    name: "Stacey Little",
    company: "Distributed interactive monitoring",
    phone: "(700) 403-5346",
    address: "47653 Reinger Row Apt. 480",
  },
  {
    id: 6,
    name: "Kristie Zemlak",
    company: "Synchronised context-sensitive implementation",
    phone: "698-202-3176 x8337",
    address: "5700 Isac Spurs Suite 919",
  },
  {
    id: 7,
    name: "Rhonda Torphy PhD",
    company: "User-friendly responsive hardware",
    phone: "470-744-4824 x376",
    address: "9826 Vincenzo Land Apt. 616",
  },
  {
    id: 8,
    name: "Elizabeth Franecki",
    company: "Compatible upward-trending system engine",
    phone: "506-644-1590",
    address: "9316 Manuel Lodge Apt. 678",
  },
  {
    id: 9,
    name: "Tasha Rohan",
    company: "Cloned scalable website",
    phone: "983.587.1143",
    address: "0434 Jermey Street Suite 577",
  },
  {
    id: 10,
    name: "Tasha",
    company: "Cloned website",
    phone: "983.587",
    address: "0434 Suite 577",
  },
]

export const TABLE_WIDGET_CONFIG: WidgetConfig = {
  displayName: "table",
  widgetName: t("widget.table.name"),
  h: 40,
  w: 32,
  type: "TABLE_WIDGET",
  icon: <TableWidgetIcon />,
  keywords: ["Table", "表格"],
  sessionType: "PRESENTATION",
  defaults: initTableWidgetDefaultProps(),
}

export function initTableWidgetDefaultProps() {
  return {
    data: `{{${JSON.stringify(originData)}}}`,
    columns: tansTableDataToColumns(originData),
    emptyState: "No rows found",
    overFlow: "pagination",
    download: false,
    filter: false,
    pageSize: `{{10}}`,
  }
}

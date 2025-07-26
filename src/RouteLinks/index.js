import { SideArrow } from "../Shared/Icons";

export const sidebarLink = [
  {
    id: 1,
    title: "Main Menus",
    children: [
      { id: 1, title: "Dashboard", path: "/apps", icon: SideArrow },
      { id: 2, title: "Reports", path: "admission", icon: SideArrow },
      { id: 3, title: "Analytics", path: "events", icon: SideArrow },
    ],
  },
  {
    id: 2,
    title: "Inventory Management",
    children: [
      { id: 1, title: "Warehouse", path: "warehouse", icon: SideArrow },
      { id: 2, title: "Products", path: "products", icon: SideArrow },
      { id: 3, title: "Stocks", path: "stock-store", icon: SideArrow },
      { id: 4, title: "Vendors", path: "vendors", icon: SideArrow },
    ],
  },
  {
    id: 3,
    title: "Manufacturing / Production",
    children: [
      {
        id: 1,
        title: "Bill of Materials",
        path: "student-informations",
        icon: SideArrow,
      },
      { id: 2, title: "Work Orders", path: "assignments", icon: SideArrow },
      {
        id: 3,
        title: "Production Planning",
        path: "scholarships",
        icon: SideArrow,
      },
      {
        id: 4,
        title: "Resource Schedules",
        path: "results",
        icon: SideArrow,
      },
      {
        id: 5,
        title: "Quality Control",
        path: "certificates",
        icon: SideArrow,
      },
    ],
  },
  {
    id: 4,
    title: "Finance & Accounting",
    children: [
      { id: 1, title: "Billing", path: "teachers", icon: SideArrow },
      { id: 2, title: "Taxes", path: "stuffs", icon: SideArrow },
      {
        id: 3,
        title: "Account Details",
        path: "human-resources",
        icon: SideArrow,
      },
    ],
  },
  {
    id: 5,
    title: "Human Resources",
    children: [
      {
        id: 1,
        title: "Employees",
        path: "schedules",
        icon: SideArrow,
      },
      { id: 2, title: "Attendances", path: "assignments", icon: SideArrow },
      { id: 3, title: "Leaves", path: "career", icon: SideArrow },
      { id: 4, title: "Recruitments", path: "results", icon: SideArrow },
      { id: 5, title: "Salary Info", path: "study-materials", icon: SideArrow },
      { id: 7, title: "Performance", path: "attendance", icon: SideArrow },
    ],
  },
  {
    id: 6,
    title: "System Management",
    children: [
      { id: 1, title: "Settings", path: "settings", icon: SideArrow },
      { id: 2, title: "My Profile", path: "profile", icon: SideArrow },
    ],
  },
];

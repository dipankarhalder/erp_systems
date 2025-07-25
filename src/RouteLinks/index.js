import { SideArrow } from "../Shared/Icons";
import { paths } from "../Constant";

export const sidebarLink = [
  {
    id: 1,
    title: "Main Menus",
    children: [
      { id: 1, title: "Dashboard", path: paths.APPS, icon: SideArrow },
      { id: 2, title: "Reports", path: paths.ADMISSION, icon: SideArrow },
      { id: 3, title: "Analytics", path: paths.EVENTS, icon: SideArrow },
    ],
  },
  {
    id: 2,
    title: "Inventory Management",
    children: [
      { id: 1, title: "Warehouse", path: paths.ADMIN, icon: SideArrow },
      { id: 2, title: "Products", path: paths.AUTH, icon: SideArrow },
      { id: 3, title: "Stocks", path: paths.HOSTEL, icon: SideArrow },
      { id: 4, title: "Vendors", path: paths.VENDORS, icon: SideArrow },
    ],
  },
  {
    id: 3,
    title: "Manufacturing / Production",
    children: [
      {
        id: 1,
        title: "Bill of Materials",
        path: paths.STUDENT,
        icon: SideArrow,
      },
      { id: 2, title: "Work Orders", path: paths.ASSIGN, icon: SideArrow },
      {
        id: 3,
        title: "Production Planning",
        path: paths.SCHOLAR,
        icon: SideArrow,
      },
      {
        id: 4,
        title: "Resource Schedules",
        path: paths.RESULT,
        icon: SideArrow,
      },
      {
        id: 5,
        title: "Quality Control",
        path: paths.CERTIFICATE,
        icon: SideArrow,
      },
    ],
  },
  {
    id: 4,
    title: "Finance & Accounting",
    children: [
      { id: 1, title: "Billing", path: paths.TEACHER, icon: SideArrow },
      { id: 2, title: "Taxes", path: paths.STUFF, icon: SideArrow },
      { id: 3, title: "Account Details", path: paths.HUMAN, icon: SideArrow },
    ],
  },
  {
    id: 5,
    title: "Human Resources",
    children: [
      { id: 1, title: "Employees", path: paths.STUDENT, icon: SideArrow },
      { id: 2, title: "Attendances", path: paths.ASSIGN, icon: SideArrow },
      { id: 3, title: "Leaves", path: paths.SCHOLAR, icon: SideArrow },
      { id: 4, title: "Recruitments", path: paths.RESULT, icon: SideArrow },
      { id: 5, title: "Salary Info", path: paths.CERTIFICATE, icon: SideArrow },
      { id: 7, title: "Performance", path: paths.ATTENDANCE, icon: SideArrow },
    ],
  },
  {
    id: 6,
    title: "System Management",
    children: [
      { id: 1, title: "Settings", path: paths.SETTING, icon: SideArrow },
      { id: 2, title: "My Profile", path: paths.PROFILE, icon: SideArrow },
    ],
  },
];

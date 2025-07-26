import { createBrowserRouter } from "react-router-dom";

import { Error } from "../Error";
import { AuthLayout } from "../Pages/Layout/AuthLayout";
import { MainLayout } from "../Pages/Layout/MainLayout";

import { AdministrationPage } from "../Pages/Main/Administration";
import { AdmissionPage } from "../Pages/Main/Admission";
import { AssignmentPage } from "../Pages/Main/Assignments";
import { AttendancePage } from "../Pages/Main/Attendance";
import { AuthorityPage } from "../Pages/Main/Authority";
import { CareerPage } from "../Pages/Main/Career";
import { CertificatesPage } from "../Pages/Main/Certificates";
import { CoursesPage } from "../Pages/Main/Courses";
import { DashboardPage } from "../Pages/Main/Dashboard";
import { EventsPage } from "../Pages/Main/Events";
import { ForgotPasswordPage } from "../Pages/Auth/ForgotPassword";
import { HostelPage } from "../Pages/Main/Hostel";
import { HumanResourcesPage } from "../Pages/Main/HumanResources";
import { InvoicePage } from "../Pages/Main/Invoice";
import { LaboratoryPage } from "../Pages/Main/Laboratory";
import { LocationsPage } from "../Pages/Main/Locations";
import { LibraryPage } from "../Pages/Main/Library";
import { NoticesPage } from "../Pages/Main/Notices";
import { OtpVerificationPage } from "../Pages/Auth/OTP";
import { ProfilePage } from "../Pages/Main/Profile";
import { ProductsPage } from "../Pages/Main/Products";
import { ReportsPage } from "../Pages/Main/Reports";
import { ResultsPage } from "../Pages/Main/Results";
import { SchedulesPage } from "../Pages/Main/Schedules";
import { ScholarshipsPage } from "../Pages/Main/Scholarships";
import { SettingsPage } from "../Pages/Main/Settings";
import { SigninPage } from "../Pages/Auth/Signin";
import { SignupPage } from "../Pages/Auth/Signup";
import { StocksPage } from "../Pages/Main/Stocks";
import { StudentsPage } from "../Pages/Main/Students";
import { StudyMaterialsPage } from "../Pages/Main/StudyMaterials";
import { StuffPage } from "../Pages/Main/Stuff";
import { TeachersPage } from "../Pages/Main/Teachers";
import { VendorsPage } from "../Pages/Main/Vendors";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <SigninPage />,
      },
      {
        path: "register",
        element: <SignupPage />,
      },
      {
        path: "otp",
        element: <OtpVerificationPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },
    ],
  },
  {
    path: "/apps",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "administration",
        element: <AdministrationPage />,
      },
      {
        path: "admission",
        element: <AdmissionPage />,
      },
      {
        path: "assignments",
        element: <AssignmentPage />,
      },
      {
        path: "attendance",
        element: <AttendancePage />,
      },
      {
        path: "authority-and-committee",
        element: <AuthorityPage />,
      },
      {
        path: "career",
        element: <CareerPage />,
      },
      {
        path: "certificates",
        element: <CertificatesPage />,
      },
      {
        path: "courses",
        element: <CoursesPage />,
      },
      {
        path: "events",
        element: <EventsPage />,
      },
      {
        path: "hostel",
        element: <HostelPage />,
      },
      {
        path: "human-resources",
        element: <HumanResourcesPage />,
      },
      {
        path: "invoice",
        element: <InvoicePage />,
      },
      {
        path: "laboratory",
        element: <LaboratoryPage />,
      },
      {
        path: "warehouse",
        element: <LocationsPage />,
      },
      {
        path: "library",
        element: <LibraryPage />,
      },
      {
        path: "notice-board",
        element: <NoticesPage />,
      },
      {
        path: "reports",
        element: <ReportsPage />,
      },
      {
        path: "results",
        element: <ResultsPage />,
      },
      {
        path: "schedules",
        element: <SchedulesPage />,
      },
      {
        path: "scholarships",
        element: <ScholarshipsPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "stock-store",
        element: <StocksPage />,
      },
      {
        path: "student-informations",
        element: <StudentsPage />,
      },
      {
        path: "study-materials",
        element: <StudyMaterialsPage />,
      },
      {
        path: "stuffs",
        element: <StuffPage />,
      },
      {
        path: "teachers",
        element: <TeachersPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "vendors",
        element: <VendorsPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
    ],
  },
]);

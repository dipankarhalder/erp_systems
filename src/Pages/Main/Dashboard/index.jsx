import { TopBar } from "../../../Components/Main/TopBar";
import { locationInfo } from "../../../Constant/index";
import {
  Companies,
  Subscribers,
  Revenue,
  Income,
  NetProfit,
  Sale,
  Loans,
  Darrow,
  Danalysis,
  Uanalysis,
  Settings,
  Teams,
  Profile,
  Members,
  Rarrow,
  Plans,
  Stocks,
} from "../../../Shared/Icons";
import { AppMainLayoutCover, AppDeashboardSection } from "../style";
import { RevenueChart } from "../../../Components/Main/Dashboard/RevenueChart";
import { ExpensesGrossProfitChart } from "../../../Components/Main/Dashboard/ExpensesGrossProfitChart";
import { AccountsLineChart } from "../../../Components/Main/Dashboard/AccountsLineChart";

const pagePaths = [{ label: "..Apps", path: "/" }];

export const DashboardPage = () => {
  return (
    <AppMainLayoutCover>
      <TopBar pageName="Dashboard" items={pagePaths} location={locationInfo} />
      <AppDeashboardSection>
        <div className="app_heading_section">
          <h2>
            Hello, <span>Himadri Chakraborti</span>
          </h2>
          <p>
            Wishing you a fantastic day - I hope everything is going smoothly
            and bringing you joy.
          </p>
        </div>
        <div className="app_list_overview_items">
          <div className="app_list_info">
            <div className="app_list_row">
              <div className="app_list_heading">
                <h3>Total Revenue</h3>
                <p>Rs. 528976/-</p>
              </div>
              <div className="app_list_icons revenue">
                <Revenue />
              </div>
            </div>
            <div className="app_graph_sec">
              <ul className="upitem">
                <li className="app_graph_itm">
                  <Uanalysis />
                  <p>6.9%</p>
                </li>
                <li className="app_week">
                  <p>This week</p>
                </li>
                <li className="app_today">
                  <p>Today</p>
                  <Darrow />
                </li>
              </ul>
            </div>
          </div>
          <div className="app_list_info">
            <div className="app_list_row">
              <div className="app_list_heading">
                <h3>Total Income</h3>
                <p>Rs. 128900/-</p>
              </div>
              <div className="app_list_icons income">
                <Income />
              </div>
            </div>
            <div className="app_graph_sec">
              <ul className="downitem">
                <li className="app_graph_itm">
                  <Danalysis />
                  <p>4.2%</p>
                </li>
                <li className="app_week">
                  <p>This week</p>
                </li>
                <li className="app_today">
                  <p>Today</p>
                  <Darrow />
                </li>
              </ul>
            </div>
          </div>
          <div className="app_list_info">
            <div className="app_list_row">
              <div className="app_list_heading">
                <h3>Net Profit</h3>
                <p>Rs. 108006/-</p>
              </div>
              <div className="app_list_icons netprofit">
                <NetProfit />
              </div>
            </div>
            <div className="app_graph_sec">
              <ul className="upitem">
                <li className="app_graph_itm">
                  <Uanalysis />
                  <p>6.9%</p>
                </li>
                <li className="app_week">
                  <p>This week</p>
                </li>
                <li className="app_today">
                  <p>Today</p>
                  <Darrow />
                </li>
              </ul>
            </div>
          </div>
          <div className="app_list_info">
            <div className="app_list_row">
              <div className="app_list_heading">
                <h3>Total Sales</h3>
                <p>Rs. 23730/-</p>
              </div>
              <div className="app_list_icons sale">
                <Sale />
              </div>
            </div>
            <div className="app_graph_sec">
              <ul className="upitem">
                <li className="app_graph_itm">
                  <Uanalysis />
                  <p>6.9%</p>
                </li>
                <li className="app_week">
                  <p>This week</p>
                </li>
                <li className="app_today">
                  <p>Today</p>
                  <Darrow />
                </li>
              </ul>
            </div>
          </div>
          <div className="app_list_info">
            <div className="app_list_row">
              <div className="app_list_heading">
                <h3>Loan Amounts</h3>
                <p>Rs. 187300/-</p>
              </div>
              <div className="app_list_icons loans">
                <Loans />
              </div>
            </div>
            <div className="app_graph_sec">
              <ul className="downitem">
                <li className="app_graph_itm">
                  <Danalysis />
                  <p>6.9%</p>
                </li>
                <li className="app_week">
                  <p>This week</p>
                </li>
                <li className="app_today">
                  <p>Today</p>
                  <Darrow />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="app_add_new_items">
          <ul>
            <li>
              <div className="front_item">
                <Companies />
                <p>Warehouse</p>
                <Rarrow />
              </div>
            </li>
            <li>
              <div className="front_item">
                <Subscribers />
                <p>Products</p>
                <Rarrow />
              </div>
            </li>
            <li>
              <div className="front_item">
                <Plans />
                <p>Order</p>
                <Rarrow />
              </div>
            </li>
            <li>
              <div className="front_item">
                <Settings />
                <p>Services</p>
                <Rarrow />
              </div>
            </li>
            <li>
              <div className="front_item">
                <Teams />
                <p>Customers</p>
                <Rarrow />
              </div>
            </li>
            <li>
              <div className="front_item">
                <Profile />
                <p>Employee</p>
                <Rarrow />
              </div>
            </li>
            <li>
              <div className="front_item">
                <Members />
                <p>Vendors</p>
                <Rarrow />
              </div>
            </li>
            <li>
              <div className="front_item">
                <Stocks />
                <p>Materials</p>
                <Rarrow />
              </div>
            </li>
          </ul>
        </div>
        <RevenueChart />
        <ExpensesGrossProfitChart />
        <AccountsLineChart />
      </AppDeashboardSection>
    </AppMainLayoutCover>
  );
};

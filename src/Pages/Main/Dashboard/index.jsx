import { TopBar } from "../../../Components/Main/TopBar";
import { locationInfo } from "../../../Constant/index";
import { UpGraph, DownGraph } from "../../../Shared/Icons";
import { AppMainLayoutCover, AppDeashboardSection } from "../style";

const pagePaths = [{ label: "..Apps", path: "/" }];

export const DashboardPage = () => {
  return (
    <AppMainLayoutCover>
      <TopBar pageName="Dashboard" items={pagePaths} location={locationInfo} />
      <AppDeashboardSection>
        <div className="app_revenue_sec">
          <h1>Report Overview</h1>
          <div className="app_main_revenue">
            <div className="app_item_rev">
              <p>Revenue</p>
              <div className="app_main_rev_items">
                <h2>
                  Rs. 528,976<span>.82 /-</span>
                </h2>
                <div className="app_rev_items">
                  <div className="app_rev_list_item">
                    <p>56%</p>
                  </div>
                  <div className="app_rev_list_item">
                    <p>Rs. 48,586.00/-</p>
                  </div>
                </div>
              </div>
              <div className="app_rev_items_new">
                <p>
                  Prev month - <span>Rs. 490,976.34/-</span>
                </p>
                <p>
                  Sep 1, 2024 - <span>July 31, 2025</span>
                </p>
              </div>
            </div>
            <div className="app_side_revenue">
              <ul>
                <li>
                  <p>Today's Revenue</p>
                  <span>Rs. 53.200/-</span>
                  <div className="rev_graph_view">
                    <div className="inside_rev green_view">
                      <UpGraph />
                      <p>23%</p>
                    </div>
                  </div>
                </li>
                <li>
                  <p>Today's Orders</p>
                  <span>346 items</span>
                  <div className="rev_graph_view">
                    <div className="inside_rev green_view">
                      <UpGraph />
                      <p>23%</p>
                    </div>
                  </div>
                </li>
                <li>
                  <p>Vendor Refunds</p>
                  <span>Rs. 21.790/-</span>
                  <div className="rev_graph_view">
                    <div className="inside_rev red_view">
                      <DownGraph />
                      <p>23%</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AppDeashboardSection>
    </AppMainLayoutCover>
  );
};

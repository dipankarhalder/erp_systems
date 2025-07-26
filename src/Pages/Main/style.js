import styled from "styled-components";

export const AppMainLayoutCover = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`;

export const AppTableDataInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 24px 0;
`;

export const ApplicationCoverContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const AppMainPageHeading = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > h1 {
    font-size: 18px;
    font-weight: 600;
  }
`;

export const AppContentDiv = styled.div`
  display: flex;
  width: 100%;
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.tableborder};
`;

export const AppDeashboardSection = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 24px 0;

  .app_revenue_sec {
    display: flex;
    width: 100%;
    border-radius: 8px;
    padding: 14px 20px;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.tablehead};

    h1 {
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 2px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.gray};
    }

    .app_main_revenue {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;

      .app_item_rev {
        width: 41%;
        border-radius: 8px;
        padding: 14px 20px;
        flex-direction: column;
        background: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.tableborder};

        p {
          font-size: 16px;
          font-weight: 600;
        }

        .app_main_rev_items {
          display: flex;
          width: 100%;
          align-items: center;
          gap: 20px;
          margin-bottom: 2px;

          h2 {
            font-size: 30px;
            font-weight: 700;

            & > span {
              opacity: 0.3;
            }
          }

          .app_rev_items {
            .app_rev_list_item {
              float: left;
              margin-right: 10px;

              &:last-child {
                margin-right: 0px;
              }

              & > p {
                color: #ffffff;
                font-weight: 600;
                font-size: 13px;
                padding: 4px 12px 3px;
                border-radius: 40px;
                background: #58b01cff;
              }
            }
          }
        }
        .app_rev_items_new {
          display: flex;
          width: 100%;
          gap: 20px;
          align-items: center;

          & > p {
            font-size: 15px;
            font-weight: 500;
            color: ${({ theme }) => theme.colors.gray};

            & > span {
              font-weight: 700;
              color: ${({ theme }) => theme.colors.dgray};
            }
          }
        }
      }

      .app_side_revenue {
        display: flex;
        width: 57%;

        & > ul {
          display: flex;
          width: 100%;
          justify-content: space-between;
          gap: 20px;

          & > li {
            width: 33%;
            border-radius: 8px;
            padding: 14px 20px;
            flex-direction: column;
            background: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.tableborder};

            & > p {
              font-size: 14px;
              font-weight: 600;
              color: ${({ theme }) => theme.colors.gray};
            }

            & > span {
              font-size: 15px;
              font-weight: 700;
              color: ${({ theme }) => theme.colors.black};
            }

            .rev_graph_view {
              display: flex;
              margin-top: 20px;

              .inside_rev {
                display: flex;
                padding: 5px 12px 4px;
                border-radius: 50px;
                gap: 6px;

                &.green_view {
                  background: #58b01cff;
                }

                &.red_view {
                  background: #ff0000;
                }

                & > span {
                  width: 14px;
                  height: 14px;
                  color: ${({ theme }) => theme.colors.white};

                  & > svg {
                    width: 14px;
                    height: 14px;
                  }
                }

                & > p {
                  color: ${({ theme }) => theme.colors.white};
                  font-size: 12px;
                  font-weight: 700;
                }
              }
            }
          }
        }
      }
    }
  }
`;

import { useEffect, useState } from "react";
import { TopBar } from "../../../components/Main/TopBar";
import { locationInfo } from "../../../Constant";
import { TableInfo } from "../../../Shared/Table";
import { AppMainLayoutCover, AppTableDataInformation } from "../style";
import productData from "../../../data/products.json";

const pagePaths = [
  { label: "Apps", path: "/" },
  { label: "All Stocks", path: "/" },
];

export const StocksPage = () => {
  const handleBtnAction = (action, student) => {
    console.log(`Action: ${action}`, student);
  };

  const handleAddItems = (isopen) => {
    console.log(isopen);
  };

  const productTableData =
    productData &&
    productData.map((item, idx) => ({
      id: `PD${idx + 1}`,
      name: item.name,
      stock_quantity: `${item.stockQuantity} items`,
      stock_price: `Rs. ${item.stock_price}/-`,
      manuf_date: item.manufacture_date,
      expire_date: item.expire_date,
      vendor: item.vendor,
    }));

  const tableHeaders =
    productTableData.length > 0
      ? Object.keys(productTableData[0]).filter((key) => key !== "image")
      : [];

  const [visibleColumns, setVisibleColumns] = useState(() =>
    tableHeaders.reduce((acc, col) => {
      acc[col] = true;
      return acc;
    }, {})
  );

  useEffect(() => {
    const handleResize = () => {
      setVisibleColumns((prev) => ({
        ...prev,
        stock: false,
      }));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppMainLayoutCover>
      <TopBar location={locationInfo} />
      <AppTableDataInformation>
        <TableInfo
          pageTitle={"Manage Stocks"}
          pagePath={pagePaths}
          data={productTableData}
          addTextItem={"Add New Stock"}
          handleAddItems={handleAddItems}
          sortableColumns={["id", "name", "vendor"]}
          viewBtn={"name"}
          enableStatus={true}
          filterableColumns={["expire_date", "vendor"]}
          visibleColumns={visibleColumns}
          onToggleColumn={(col) =>
            setVisibleColumns((prev) => ({
              ...prev,
              [col]: !prev[col],
            }))
          }
          onAction={handleBtnAction}
        />
      </AppTableDataInformation>
    </AppMainLayoutCover>
  );
};

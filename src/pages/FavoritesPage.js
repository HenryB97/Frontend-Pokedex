import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";

export default function FavoritesPage() {
  const data = useContext(ThemeContext);
  const favorites = useSelector((state) => state.favorites);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 150 },
    {
      field: "types",
      headerName: "Types",
      width: 200,
      valueGetter: (params) => {
        return params.row.types.map((type) => `${type.type.name}`).join(", ");
      },
    },
  ];

  return (
    <div className={data.theme}>
      <Navbar />
      <div style={{ padding: "5rem" }}>
        <div style={{ height: 400, width: "40%", backgroundColor: "white" }}>
          <DataGrid
            rows={favorites}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

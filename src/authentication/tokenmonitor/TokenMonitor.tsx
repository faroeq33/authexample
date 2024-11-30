import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import getAllLocalStorageItems from "./getAllLocalStorageItems";

function TokenMonitor() {
  const allItems = getAllLocalStorageItems();
  return (
    <div className="fixed w-1/2 p-4 bottom-4 right-4 bg-stone-200 border-rou">
      <div>
        <div>
          <span className="w-full text-2xl text-right">
            All Local Storage Items:
          </span>
        </div>
        <Table>
          <TableBody>
            {allItems.length > 0 ? (
              allItems.map((item) => (
                <TableRow key={item.key}>
                  <TableHead className="font-bold capitalize">
                    {item.key}:
                  </TableHead>
                  <TableCell className="truncate text-ellipsis" colSpan={1}>
                    {item.value}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2} className="text-center">
                  No items found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
export default TokenMonitor;

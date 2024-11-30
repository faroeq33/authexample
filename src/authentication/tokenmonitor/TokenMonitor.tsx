import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import getAllLocalStorageItems from "./getAllLocalStorageItems";

function TokenMonitor() {
  const allItems = getAllLocalStorageItems();
  return (
    <div className="fixed bottom-4 right-4 bg-stone-200">
      <div>
        <div>
          <span className="w-full text-2xl text-right">
            All Local Storage Items:
          </span>
        </div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>

          <TableBody>
            {allItems.map((item) => (
              <TableRow key={item.key}>
                <TableHead className="font-bold">{item.key}</TableHead>
                <TableCell className="text-right">{item.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
export default TokenMonitor;

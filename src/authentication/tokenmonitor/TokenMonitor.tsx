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
  // Get token from local storage
  // Display token in a div

  const allItems = getAllLocalStorageItems();
  return (
    <div className="fixed bottom-4 right-4 bg-stone-200">
      <div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHead>
            <span className="w-full text-2xl text-right">
              All Local Storage Items:
            </span>
          </TableHead>
          <TableBody>
            {allItems.map((item) => (
              <TableRow key={item.key}>
                <TableCell className="font-bold">{item.key}</TableCell>
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

import { getAllLocalStorageItems } from "./getAllLocalStorageItems";

function TokenMonitor() {
  // Get token from local storage
  // Display token in a div

  const allItems = getAllLocalStorageItems();
  return (
    <div className="fixed bg-pink-500 bottom-4 right-4">
      <div>
        <h3>All Local Storage Items:</h3>
        <ul>
          {allItems.map((item) => (
            <li key={item.key}>
              {item.key}: {item.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default TokenMonitor;

const useCache = () => {
  const databaseName = "";
  const version = 1;
  const db = indexedDB.open(databaseName, version);
  db.addEventListener("success", () => {
    console.log("打开数据库成功");
  });
  db.addEventListener("error", () => {
    console.log("数据库打开报错");
  });
  db.addEventListener("upgradeneeded", (event) => {
    // 数据库创建或升级的时候会触发
    const result = event.target.result;
    const storeName = "product"; // 表名
    if (!result.objectStoreNames.contains(storeName)) {
      // 判断表是否存在
      result.createObjectStore(storeName, {
        keyPath: "pro_id",
        autoIncrement: true,
      });
    }
  });
};

export default useCache;

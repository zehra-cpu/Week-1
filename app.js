import getData from "./service.js";

(async () => {
  const result = await getData(1);
  console.log(result);
})();
export default (() => {
  const origins = process.env.CORS_ORIGINS || "";
  if (!origins) throw new Error("CORS_ORIGINS must be set");
  return origins.split(",");
})();

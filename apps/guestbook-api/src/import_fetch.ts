const _importDynamic = new Function("modulePath", "return import(modulePath)");

export async function fetch(...args: any) {
  const { default: f } = await _importDynamic("node-fetch");
  return f(...args);
}

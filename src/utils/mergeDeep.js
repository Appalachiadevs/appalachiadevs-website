/** Deep-merge plain objects (nested). Arrays copied by reference from `source`. */
export function mergeDeep(target, source) {
  if (!source || typeof source !== "object") return target;
  const out = { ...target };
  for (const key of Object.keys(source)) {
    const sv = source[key];
    const tv = out[key];
    if (
      sv &&
      typeof sv === "object" &&
      !Array.isArray(sv) &&
      tv &&
      typeof tv === "object" &&
      !Array.isArray(tv)
    ) {
      out[key] = mergeDeep(tv, sv);
    } else {
      out[key] = sv;
    }
  }
  return out;
}

export function fail(err) {
  return { success: false, err };
}

export function success() {
  return { success: true };
}

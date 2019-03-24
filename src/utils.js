export function generateUUID() {
    // @ts-ignore - needed to support the + sign: [1e7] + -1e3
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (c ^ ((Math.random() * 16) & (15 >> (c / 4)))).toString(16)
    );
  }
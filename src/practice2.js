const inject = (items, sections) => {
  return sections
    .sort((a, b) => a.insex - b.index)
    .reduce(
      (acc, cur) => {
        acc.splice(acc.indexOf(items[cur.index]), 0, cur.content);
        return acc;
      },
      [...items]
    );
};
export { inject };

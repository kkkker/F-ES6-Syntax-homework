const parseData = ({data, column}) => {
  return data.reduce((acc, cur) => {
    const data = {};
    for(let item of column) {
      data[item.name] = cur[column.indexOf(item)];
    }
    acc.push(data);
    return acc;
  }, []);
}
export { parseData };

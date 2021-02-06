import Vue from 'vue';

const dateFilter = (value) => {
  return formatDate(value);
};

const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}/${day}/${year}`;
};

const filters = {
  date: dateFilter,
};

for (const name in filters) {
  Vue.filter(name, filters[name]);
}

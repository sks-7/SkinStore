import axios from 'axios';

const fetchData = async ({ page, limit, order, sort, FilterTitle, Filter }) => {
  try {
    let res = await fetch(
      `https://zany-puce-donkey-kit.cyclic.app/smart-splurges?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}&${FilterTitle}=${Filter}`
    );
    let data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export default fetchData;

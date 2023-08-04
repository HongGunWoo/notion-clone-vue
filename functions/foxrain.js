exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Foxrain',
      age: 12,
      email: 'gugu@abc.com',
    }),
  };
};

// const axios = require('axios');

// exports.handler = async function (event) {
//   const options = JSON.parse(event.body);
//   const { id = '', method, body } = options;
//   const { data } = await axios({
//     url: `https://kdt-frontend.programmers.co.kr/documents/${id}`,
//     method,
//     headers: {
//       'Content-Type': 'application/json',
//       'x-username': 'pigeontwo',
//     },
//     data: body,
//   });
//   return {
//     statusCod: 200,
//     body: await JSON.stringify(data),
//   };
// };

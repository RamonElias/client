const PREFIX = '/services';

export const mirrorContent = (content) => {
  return postData(`${PREFIX}/mirror`, {
    content,
  });
};

function postData(url = ``, data = {}) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json());
}



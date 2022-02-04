async function request(path, options = {}) {
    const url = `${process.env.REACT_APP_API_ORIGIN}${path}`;
    const response = await fetch(url, options);
    return response.json();
  }

  export async function getQuestions() {
    return request(`/questions`);
  }

  export async function getRanking() {
    return request(`/ranking`);
  }

  //kokokarahennkou
  export async function postGrades(
    record,
    getAccessToken
  ) {
    const token = await getAccessToken({
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    });


    return request(`/grades`, {
      body: JSON.stringify(record),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  }
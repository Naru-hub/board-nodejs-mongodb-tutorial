const formDOM = document.querySelector(".thread-section");

// 最初はThreadのすべてを読み込む
const getAllThreads = async () => {
  try {
    let allThreads = await axios.get("/api/v1/threads");
    console.log(allThreads);
    let { data } = allThreads;
    console.log(data);

    // 出力
    allThreads = data.map((thread) => {
      const { title, content } = thread;
      console.log(title, content);
      return `
      <div class="single-thread">
        <h3>${title}</h3>
        <p>${content}</p>
      </div>
      `;
    });
    formDOM.innerHTML = allThreads;
  } catch (err) {
    console.log(err);
  }
};

getAllThreads();

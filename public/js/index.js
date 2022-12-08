// const test = 10;

// console.log(test);

const headeruserNameElement = document.querySelector('.user');
const userNameElement = document.querySelector('.user-name');
const localuserName = localStorage.getItem('userName');
const userNameBtr = document.querySelector('#name');

const setUserNameInnerHtml = (name) => {
  headeruserNameElement.innerHTML = `${name}<span>님</span>`;
  userNameElement.innerHTML = `<span id="name">${name}</span><span>님</span>`;
};

if (localuserName) {
  setUserNameInnerHtml(localuserName);
}

// eslint-disable-next-line max-len
// userNameElement.innerHTML = `${localStorage.getItem('userName')}<span>님</span>`;

userNameBtr.onclick = () => {
  const userName = prompt('이름을 입력해 주세요');
  localStorage.setItem('userName', userName); // 새로고침을 해도 값이 유지됨

  setUserNameInnerHtml(userName);
};

// console.log(userNameElement);
// console.log(userNameElement.textContent);
// console.log(userNameElement.innerHTML);

// const test = 10;

// console.log(test);

const headeruserNameElement = document.querySelector('.user');
const userNameElement = document.querySelector('.user-name');
const localuserName = localStorage.getItem('userName');
const userNameBtr = document.querySelector('#name');

const userInformationNDElement = document.querySelector('.InFoND');
const userInformationEMElement = document.querySelector('.InFoEM');
const localInformationND = localStorage.getItem('userInFoND');
const localInformationEM = localStorage.getItem('userInFoEM');
const userInFoNDBtr = document.querySelector('#ND');
const userInFoEmBtr = document.querySelector('#EM');

const setUserInformationNDInnerHtml = (infomationND) => {
  userInformationNDElement.innerHTML = `<span id="ND"> ${infomationND}</span>`;
};

const setUserInformationEMInnerHtml = (infomationEM) => {
  userInformationEMElement.innerHTML = `<span id="EM"> ${infomationEM} </span>`;
};

const setUserNameInnerHtml = (name) => {
  headeruserNameElement.innerHTML = `${name}<span>님</span>`;
  userNameElement.innerHTML = `<span id="name">${name}</span><span>님</span>`;
};

if (localuserName) {
  setUserNameInnerHtml(localuserName);
}

if (localInformationND) {
  setUserInformationNDInnerHtml(localInformationND);
}
if (localInformationEM) {
  setUserInformationEMInnerHtml(localInformationEM);
}

// eslint-disable-next-line max-len
// userNameElement.innerHTML = `${localStorage.getItem('userName')}<span>님</span>`;

userNameBtr.onclick = () => {
  const userName = prompt('이름을 입력해 주세요');
  localStorage.setItem('userName', userName); // 새로고침을 해도 값이 유지됨

  setUserNameInnerHtml(userName);
};

userInFoNDBtr.onclick = () => {
  const userInFoND = prompt('학번을 입력해 주십시오');
  const number = /^[0-9]*$/;
  if(userInFoND == "") {
    alert('입력 공란');
  } else if (number.test(userInFoND)) {
    localStorage.setItem('userInFoND', userInFoND);
    setUserInformationNDInnerHtml(userInFoND);
  } else {
    alert('숫자만 입력할 수 있습니다.')
  }
};

userInFoEmBtr.onclick = () => {
  const userInFoEM = prompt('이메일을 입력해 주십시오');
  const email = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  if (userInFoEM == "") {
    alert('입력 공란');
  } else if (email.test(userInFoEM)) {
    localStorage.setItem('userInFoEM', userInFoEM);
    setUserInformationEMInnerHtml(userInFoEM);
  } else {
    alert('이메일 양식에 맞춰 입력');
  }
};

// 아래 3개 코드는 입력된 값을 F5로 초기화 시킬 수 있게 하는 코드
// delete localStorage.userName;
// delete localStorage.userInFoND;
// delete localStorage.userInFoEM;

// console.log(userNameElement);
// console.log(userNameElement.textContent);
// console.log(userNameElement.innerHTML);

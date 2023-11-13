var memberArray = ['egoing', 'graphittie', 'leezhce'];
//배열에서는 값에 접근할 때 []를 사용합니다.
console.log("memberArray[2]", memberArray[2]);

var memberObject = {
    // 원소의 이름 : 원소 값
    manager: 'egoing',
    developer: 'graphittie',
    designer: 'leezhce'
  }
  //객체에서는 값에 접근할 때 .를 사용합니다.
  memberObject.designer = 'leezche';
  console.log('memberObject.designer', memberObject.designer);
  //[]를 이용해 접근할 수도 있습니다.
  console.log("memberObject.['designer']", memberObject['designer']);
  
  delete memberObject.manager
  console.log('after delete memberObject.manager', memberObject.manager);
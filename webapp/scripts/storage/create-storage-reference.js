(function(firebase) {
  // 在网页上创建存储引用
  const storage = firebase.storage();
  const storageRef = storage.ref();

  console.log('storageRef: ', storageRef);
  const imagesRef = storageRef.child('images');
  console.log('imagesRef: ', imagesRef);
  const contributorRef = storageRef.child('images/cedar-contributors.png');
  console.log('contributorRef:', contributorRef);
})(firebase);

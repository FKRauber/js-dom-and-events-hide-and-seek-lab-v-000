function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget(cla, id) {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for ( i = 0 , l = rankedLists.length ; i < l ; i++ ) {
    let children = rankedLists[i].children
    for ( let j = 0 , k = children.length ; j < k ; j++ ) {
      children[j].innerHTML = parseInt( children[j].innerHTML ) + n
    }
  }
}

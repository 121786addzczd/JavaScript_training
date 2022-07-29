
function displayFormData(){
  let url = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode='

  const formElm = document.getElementById("test_form");
  url += formElm.post_adress.value

  // urlからデータを読み込む
fetch(url)
// データを受け取って、加工(整形)
.then(response => {
  // JSONはオブジェクト(連想配列)
  // textはテキスト
  return response.json()
})
.then(data => {
  console.log(data)

  const post_adress = document.getElementById('post_adress')
  const adress = document.getElementById('adress')
  const adress_kana = document.getElementById('adress_kana')

  post_adress.value = data.results[0].zipcode.slice(0, 3) + '-' + data.results[0].zipcode.slice(3,data.results[0].zipcode.length)
  adress.value = data.results[0].address1 + data.results[0].address2 + data.results[0].address3
  adress_kana.value = data.results[0].kana1 + ' ' + data.results[0].kana2 + ' '+ data.results[0].kana3
})
// 通信にエラーが発生した場合
.catch(error => {
  console.log(error)
})

}
alert(url)


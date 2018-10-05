//実験参加者募集受付を定員を満たし次第締め切る関数
function endFormCheck(e) {
  var LIMIT_COUNT = 15; //ここに人数の上限値を設定

  //var form = FormApp.getActiveForm();
  var url = "https://docs.google.com/forms/THE_ADDRESS_OF_YOUR_FORM_WHICH_END_WITH_EDIT/edit"
  var form = FormApp.openByUrl(url);
  //var form = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if (form.getResponses().length >= LIMIT_COUNT) {
    form.setAcceptingResponses(false);
  }
}

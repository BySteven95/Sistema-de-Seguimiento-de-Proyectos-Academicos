const SHEET_ID = '1Jqx-vmuwSS85wj_4EFeHlo8zW3vMMSg76wmqsMKRz_Y';

function doGet() {
  const HTML = HtmlService.createTemplateFromFile('web')
  const output = HTML.evaluate();
  return output
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function LoginProcedure(UserInfo) {
  
}

function SigninProcedure(UserInfo) {
  
}

function getHTMLContent(page){
  const HTMLContent = HtmlService.createHtmlOutputFromFile(page).getContent();
  return HTMLContent;
}
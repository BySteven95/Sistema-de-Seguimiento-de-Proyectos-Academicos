const SHEET_ID = '1Jqx-vmuwSS85wj_4EFeHlo8zW3vMMSg76wmqsMKRz_Y';

function doGet() {
  const HTML = HtmlService.createTemplateFromFile('HTML/web')
  const output = HTML.evaluate();
  return output
}

function loadTemplate(templateName) {
  try {
    // Carga el archivo HTML solicitado
    const html = HtmlService.createTemplateFromFile(`HTML/${templateName}`);
    return html.evaluate().getContent(); // Devuelve el contenido HTML como cadena
  } catch (e) {
    return `Error al cargar la plantilla: ${e.message}`;
  }
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function WhatIfExists(wantedValue) {

  const hoja = SpreadsheetApp.openById(SHEET_ID).getSheetByName('Users');
  const textFinder = hoja.createTextFinder(wantedValue);
  const state = textFinder.findNext();

  return state;
}

function GetUserInfo(wantedValue) {

  const spreadsheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
  const textFinder = spreadsheet.createTextFinder(wantedValue);
  const dataFound = textFinder.findNext();

  if (dataFound) {
    const row = dataFound.getRow();
    const RowValues = spreadsheet.getRange(row, 1, 1, spreadsheet.getLastColumn()).getValues()[0];
    return RowValues; 
  } else {
    return false;
  }
}

function LoginProcedure(UserInfo) {
  console.log(UserInfo);
  if(WhatIfExists(UserInfo[0])){
    let array = GetUserInfo(UserInfo[0]);
    return array;
  } else {
    return false;
  }
}

function SigninProcedure(UserInfo) {
  if(WhatIfExists(UserInfo[0])){
    let array = GetUserInfo(UserInfo[0]);
    return array;
  } else {
    Email = UserInfo[0];
    Password = UserInfo[1];
    Name =  UserInfo[2];
    saveToSheet(Email, Password, Name);
    return false;
  }
}

function getHTMLContent(page){
  const HTMLContent = HtmlService.createHtmlOutputFromFile(page).getContent();
  return HTMLContent;
}

function saveToSheet(Email, Password, Name) {
  var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName('Users');

  var ID = sheet.getLastRow();
  sheet.appendRow([ID, Name, Email, Password, "None"]);

}